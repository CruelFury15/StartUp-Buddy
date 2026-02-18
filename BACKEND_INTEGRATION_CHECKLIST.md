# Backend Integration Checklist

## ✅ Frontend is Backend-Ready!

Your frontend is already structured to work with a backend. Here's what you need to do to connect it:

---

## 📋 Pre-Integration Checklist

### 1. Backend Requirements
- [ ] Node.js backend (Express, NestJS, or similar)
- [ ] Database (PostgreSQL, MongoDB, or MySQL)
- [ ] Authentication system (JWT tokens recommended)
- [ ] RESTful API endpoints or GraphQL

### 2. Environment Setup
- [ ] Create `.env` file in frontend folder
- [ ] Add backend API URL: `VITE_API_URL=http://localhost:5000`
- [ ] Add any API keys needed

---

## 🔧 Integration Steps

### Step 1: Update API Service Configuration

**File:** `frontend/src/services/api.ts`

```typescript
// Update the BASE_URL at the top of the file
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

### Step 2: Implement Backend Endpoints

Your backend needs these endpoints (see `BACKEND_INTEGRATION_GUIDE.md` for details):

#### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

#### Dashboard Endpoints
- `POST /api/dashboard/analyze` - Analyze startup idea
- `GET /api/dashboard/history` - Get analysis history

#### Financial Endpoints
- `POST /api/financial/calculate` - Calculate runway
- `GET /api/financial/scenarios` - Get saved scenarios

#### AI Mentor Endpoints
- `POST /api/mentor/chat` - Send chat message
- `GET /api/mentor/history` - Get chat history

#### User Endpoints
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `PUT /api/user/password` - Change password

#### Explorer Endpoints
- `GET /api/explorer/categories` - Get all categories
- `GET /api/explorer/ideas/:category` - Get ideas by category

### Step 3: Update AuthContext to Use Real API

**File:** `frontend/src/contexts/AuthContext.tsx`

Replace the demo login function with:

```typescript
const login = async (username: string, email: string, password: string): Promise<boolean> => {
  try {
    const response = await apiService.auth.login({ username, email, password });
    
    if (response.success && response.data) {
      const userData = {
        username: response.data.username,
        email: response.data.email,
        name: response.data.name
      };
      
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', response.data.token); // Store JWT token
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
};
```

### Step 4: Update Dashboard to Use Real API

**File:** `frontend/src/pages/Dashboard.tsx`

In the `handleSubmit` function, replace mock data with:

```typescript
const handleSubmit = async () => {
  if (wordCount < 100) {
    alert('Please write at least 100 words about your startup idea.');
    return;
  }

  try {
    const response = await apiService.dashboard.analyzeIdea({
      category: selectedCategory,
      budget: formData.budget,
      experience: formData.experience,
      idea: formData.idea
    });

    if (response.success && response.data) {
      // Use real data from backend
      setShowResults(true);
    }
  } catch (error) {
    console.error('Analysis failed:', error);
    alert('Failed to analyze your idea. Please try again.');
  }
};
```

### Step 5: Update Chatbot to Use Real AI

**File:** `frontend/src/components/Chatbot.tsx` and `frontend/src/pages/Mentor.tsx`

Replace the mock AI responses with:

```typescript
const handleSendMessage = async () => {
  if (!input.trim()) return;

  const userMessage: Message = {
    id: Date.now().toString(),
    text: input,
    sender: 'user',
    timestamp: new Date()
  };

  addMessage(userMessage);
  setInput('');
  setIsTyping(true);

  try {
    const response = await apiService.mentor.sendMessage({ message: input });
    
    if (response.success && response.data) {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.data.reply,
        sender: 'ai',
        timestamp: new Date()
      };
      
      addMessage(aiMessage);
    }
  } catch (error) {
    console.error('AI response failed:', error);
    const errorMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: 'Sorry, I encountered an error. Please try again.',
      sender: 'ai',
      timestamp: new Date()
    };
    addMessage(errorMessage);
  } finally {
    setIsTyping(false);
  }
};
```

---

## 🔐 Security Considerations

### 1. Token Management
- Store JWT tokens in localStorage
- Add token to all API requests via interceptor
- Implement token refresh mechanism
- Clear tokens on logout

### 2. API Security
- Use HTTPS in production
- Implement rate limiting
- Validate all inputs on backend
- Use CORS properly

### 3. Environment Variables
```env
# frontend/.env
VITE_API_URL=http://localhost:5000
VITE_API_TIMEOUT=30000
```

---

## 🧪 Testing Backend Integration

### 1. Test Authentication Flow
```bash
# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 2. Test Protected Endpoints
```bash
# Test with JWT token
curl -X GET http://localhost:5000/api/user/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 3. Test Dashboard Analysis
```bash
curl -X POST http://localhost:5000/api/dashboard/analyze \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"category":"tech","budget":50000,"experience":"beginner","idea":"..."}'
```

---

## 📊 Database Schema Suggestions

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  phone VARCHAR(20),
  location VARCHAR(100),
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Startup Analyses Table
```sql
CREATE TABLE startup_analyses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  category VARCHAR(50),
  budget DECIMAL(10,2),
  experience VARCHAR(20),
  idea TEXT,
  analysis_result JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Chat Messages Table
```sql
CREATE TABLE chat_messages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  message TEXT NOT NULL,
  sender VARCHAR(10) NOT NULL, -- 'user' or 'ai'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Financial Scenarios Table
```sql
CREATE TABLE financial_scenarios (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  initial_capital DECIMAL(10,2),
  monthly_burn DECIMAL(10,2),
  team_size INTEGER,
  runway_months INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🚀 Deployment Checklist

### Frontend Deployment
- [ ] Build production bundle: `npm run build`
- [ ] Update API URL to production backend
- [ ] Deploy to Vercel/Netlify/AWS
- [ ] Configure environment variables
- [ ] Test all features in production

### Backend Deployment
- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Deploy to Heroku/AWS/DigitalOcean
- [ ] Set up SSL certificate
- [ ] Configure CORS for frontend domain
- [ ] Set up monitoring and logging

---

## 📝 Quick Start Commands

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (example with Express)
cd backend
npm install
npm run dev

# Database setup
psql -U postgres
CREATE DATABASE startup_buddy;
```

---

## 🔗 Useful Resources

- [API Service Documentation](./frontend/src/services/api.ts)
- [Backend Ready Status](./BACKEND_READY_STATUS.md)
- [Integration Guide](./BACKEND_INTEGRATION_GUIDE.md)
- [Express.js Documentation](https://expressjs.com/)
- [JWT Authentication Guide](https://jwt.io/introduction)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## ⚠️ Common Issues & Solutions

### Issue: CORS Errors
**Solution:** Configure CORS in backend:
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
```

### Issue: Token Expiration
**Solution:** Implement token refresh:
```typescript
// Add to api.ts
if (error.response?.status === 401) {
  // Refresh token logic
  const newToken = await refreshToken();
  // Retry request with new token
}
```

### Issue: API Timeout
**Solution:** Increase timeout in api.ts:
```typescript
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 30 seconds
});
```

---

## ✅ Integration Complete Checklist

- [ ] Backend API is running
- [ ] Database is set up and migrated
- [ ] Environment variables configured
- [ ] API service updated with correct BASE_URL
- [ ] Authentication flow tested
- [ ] Dashboard analysis working
- [ ] AI Mentor chat working
- [ ] Financial calculator working
- [ ] User profile updates working
- [ ] All features tested end-to-end
- [ ] Error handling implemented
- [ ] Loading states working
- [ ] Production deployment successful

---

**Need Help?** Check the detailed integration guide in `BACKEND_INTEGRATION_GUIDE.md` or the component-by-component status in `BACKEND_READY_STATUS.md`.
