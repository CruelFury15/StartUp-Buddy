# Backend Integration Guide

## Current State: Mock Data
The frontend currently uses **hardcoded/mock data** for demonstration purposes. This data is defined directly in the components.

## Backend-Ready Architecture

### ✅ Already Backend-Ready (Will Auto-Update)
These features use context/state management and will automatically work with backend:

1. **Authentication (AuthContext)**
   - Login/logout functionality
   - User data storage
   - **Action Required**: Replace `localStorage` with API calls

2. **Chat Messages (ChatContext)**
   - Shared message state
   - **Action Required**: Add API integration for message persistence

3. **Theme Settings (ThemeContext)**
   - Already persists to localStorage
   - ✅ No changes needed

### ⚠️ Needs Backend Integration
These components use mock data and need API integration:

## Files That Need Backend Integration

### 1. Dashboard.tsx
**Current**: Mock startup recommendations
```typescript
const startupRecommendations = [
  { title: 'AI Resume Builder', category: 'SaaS', confidenceScore: 87, riskLevel: 'Medium' },
  // ... hardcoded data
];
```

**Backend-Ready**:
```typescript
const [startupRecommendations, setStartupRecommendations] = useState([]);

useEffect(() => {
  fetch('/api/recommendations', {
    method: 'POST',
    body: JSON.stringify({ category: selectedCategory, budget, experience, idea })
  })
    .then(res => res.json())
    .then(data => setStartupRecommendations(data));
}, [selectedCategory, budget, experience, idea]);
```

### 2. FinancialRunway.tsx
**Current**: Client-side calculations only
**Backend-Ready**: Send data to API for advanced calculations
```typescript
const calculateRunway = async () => {
  const response = await fetch('/api/financial/calculate-runway', {
    method: 'POST',
    body: JSON.stringify({ initialCapital, monthlyBurn, teamSize })
  });
  const data = await response.json();
  setRunwayData(data);
};
```

### 3. RiskAssessment.tsx
**Current**: Hardcoded risk factors
**Backend-Ready**: Fetch from API based on user's startup idea
```typescript
useEffect(() => {
  fetch(`/api/risk-assessment/${startupId}`)
    .then(res => res.json())
    .then(data => setRiskFactors(data.factors));
}, [startupId]);
```

### 4. CoFounderPage.tsx
**Current**: Mock compatibility data
**Backend-Ready**: Fetch matching profiles from database
```typescript
const fetchCoFounderMatches = async () => {
  const response = await fetch('/api/cofounder/matches', {
    method: 'POST',
    body: JSON.stringify(userProfile)
  });
  const matches = await response.json();
  setMatches(matches);
};
```

### 5. Settings.tsx
**Current**: Local state only
**Backend-Ready**: Save to database
```typescript
const handleProfileSave = async () => {
  await fetch('/api/user/profile', {
    method: 'PUT',
    body: JSON.stringify(profileData)
  });
  // Show success message
};
```

### 6. Chatbot & Mentor
**Current**: Keyword-based responses
**Backend-Ready**: Real AI integration
```typescript
const sendMessage = async () => {
  const response = await fetch('/api/ai-mentor/chat', {
    method: 'POST',
    body: JSON.stringify({ message: input, conversationId })
  });
  const data = await response.json();
  addMessage(data.response, 'bot');
};
```

## API Endpoints Needed

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Dashboard
- `POST /api/recommendations` - Get startup recommendations
- `GET /api/competitors` - Get competitor analysis
- `POST /api/analyze-idea` - Analyze startup idea

### Financial
- `POST /api/financial/calculate-runway` - Calculate runway
- `GET /api/financial/scenarios` - Get scenario analysis
- `POST /api/financial/export` - Export financial report

### Risk Assessment
- `GET /api/risk-assessment/:ideaId` - Get risk factors
- `POST /api/risk-assessment/calculate` - Calculate risk score

### Co-Founder
- `POST /api/cofounder/matches` - Find matches
- `GET /api/cofounder/profile/:userId` - Get profile
- `POST /api/cofounder/compatibility` - Calculate compatibility

### AI Mentor
- `POST /api/ai-mentor/chat` - Send message to AI
- `GET /api/ai-mentor/history/:conversationId` - Get chat history
- `DELETE /api/ai-mentor/conversation/:id` - Clear conversation

### User Settings
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile
- `PUT /api/user/password` - Change password
- `GET /api/user/sessions` - Get active sessions
- `DELETE /api/user/session/:id` - Revoke session

## Environment Variables

Create `.env` file in frontend:
```
VITE_API_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000
```

## API Service Layer

Create `frontend/src/services/api.ts`:
```typescript
const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  async get(endpoint: string) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.json();
  },
  
  // ... put, delete methods
};
```

## Migration Steps

### Phase 1: Authentication
1. Update AuthContext to use API
2. Store JWT token
3. Add token refresh logic

### Phase 2: Core Features
1. Dashboard recommendations
2. Financial calculations
3. Risk assessment

### Phase 3: AI Integration
1. Connect chatbot to AI API
2. Implement conversation persistence
3. Add streaming responses

### Phase 4: User Data
1. Profile management
2. Settings persistence
3. User preferences

## Testing Backend Integration

1. **Mock API Server**: Use tools like `json-server` or `MSW` for testing
2. **Error Handling**: Add try-catch blocks and error states
3. **Loading States**: Add loading indicators for API calls
4. **Offline Support**: Implement fallback to cached data

## Data Flow

```
User Action → Component State → API Call → Backend Processing → Response → Update State → UI Update
```

## Current vs Backend-Ready

| Feature | Current | Backend-Ready |
|---------|---------|---------------|
| Login | Demo (any credentials) | Real authentication |
| Recommendations | Hardcoded | AI-generated |
| Financial Calc | Client-side | Server-side + ML |
| Risk Assessment | Static | Dynamic analysis |
| Chat | Keyword matching | Real AI (GPT/Claude) |
| Profile | localStorage | Database |
| Analytics | None | User behavior tracking |

## Summary

**Current State**: All data is hardcoded and stored in component state or localStorage.

**Backend-Ready State**: Components are structured to easily integrate with APIs. You just need to:
1. Replace mock data with API calls
2. Add loading/error states
3. Implement proper authentication
4. Handle API responses

The architecture is already set up to support backend integration with minimal refactoring!
