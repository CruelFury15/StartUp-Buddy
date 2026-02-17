# StartUp Buddy - Backend

Backend API for the StartUp Buddy platform.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Suggested Project Structure

```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration files
│   └── server.ts        # Entry point
├── tests/               # Test files
├── .env                 # Environment variables
├── .env.example         # Example environment variables
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config
```

## 🛠️ Tech Stack Recommendations

Choose based on team preference:

### Option 1: Node.js + Express
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB/PostgreSQL
- **ORM**: Mongoose/Prisma
- **Authentication**: JWT

### Option 2: Python + FastAPI
- **Runtime**: Python
- **Framework**: FastAPI
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy
- **Authentication**: JWT

### Option 3: Node.js + NestJS
- **Runtime**: Node.js
- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM/Prisma
- **Authentication**: Passport.js

## 📝 API Endpoints to Implement

### Authentication
```
POST   /api/auth/register      # User registration
POST   /api/auth/login         # User login
POST   /api/auth/logout        # User logout
GET    /api/auth/me            # Get current user
POST   /api/auth/refresh       # Refresh token
```

### User Management
```
GET    /api/users/:id          # Get user profile
PUT    /api/users/:id          # Update user profile
DELETE /api/users/:id          # Delete user account
```

### Startup Ideas
```
GET    /api/startups           # Get all startup ideas
GET    /api/startups/:id       # Get specific startup
POST   /api/startups           # Create startup idea
PUT    /api/startups/:id       # Update startup idea
DELETE /api/startups/:id       # Delete startup idea
```

### Financial Calculations
```
POST   /api/financial/runway   # Calculate runway
POST   /api/financial/burn     # Calculate burn rate
GET    /api/financial/metrics  # Get financial metrics
```

### AI Features
```
POST   /api/ai/mentor          # Get AI mentor advice
POST   /api/ai/analyze         # Analyze startup idea
POST   /api/ai/competitors     # Analyze competitors
```

### Risk Assessment
```
POST   /api/risk/assess        # Assess startup risk
GET    /api/risk/factors       # Get risk factors
```

## 🔐 Environment Variables

Create a `.env` file:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/startup_buddy

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

# CORS
FRONTEND_URL=http://localhost:5173

# API Keys (if needed)
OPENAI_API_KEY=your_openai_key
```

## 🔧 Example Server Setup (Express.js)

```typescript
// src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## 📦 Recommended Dependencies

### Core
```bash
npm install express cors dotenv
npm install -D typescript @types/express @types/cors @types/node
npm install -D nodemon ts-node
```

### Database (choose one)
```bash
# MongoDB
npm install mongoose

# PostgreSQL
npm install pg prisma
```

### Authentication
```bash
npm install jsonwebtoken bcrypt
npm install -D @types/jsonwebtoken @types/bcrypt
```

### Validation
```bash
npm install zod
# or
npm install joi
```

## 🧪 Testing

```bash
npm install -D jest @types/jest ts-jest supertest @types/supertest
```

## 📝 Development Guidelines

1. **Use TypeScript** for type safety
2. **Follow RESTful conventions** for API design
3. **Implement proper error handling**
4. **Add input validation** for all endpoints
5. **Use environment variables** for configuration
6. **Write tests** for critical functionality
7. **Document API endpoints** (consider Swagger/OpenAPI)

## 🔒 Security Best Practices

- Use HTTPS in production
- Implement rate limiting
- Validate and sanitize all inputs
- Use parameterized queries to prevent SQL injection
- Store passwords with bcrypt
- Use JWT for authentication
- Implement CORS properly
- Keep dependencies updated

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [NestJS Documentation](https://nestjs.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [JWT Best Practices](https://jwt.io/introduction)

## 🤝 Integration with Frontend

The frontend expects the API to be available at:
```
http://localhost:3000/api
```

Make sure to:
1. Enable CORS for the frontend URL
2. Return consistent JSON responses
3. Use proper HTTP status codes
4. Handle errors gracefully

## 📞 Support

For questions or issues, contact the backend team lead or create an issue on GitHub.

---

**Happy Coding! 🚀**
