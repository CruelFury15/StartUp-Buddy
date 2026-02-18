# 🚀 Start with npm start

## Quick Start Commands

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend (in a new terminal)
```bash
cd frontend
npm install
npm start
```

That's it! Both will start in development mode.

## What Happens

### Backend (`npm start`)
- Starts the Express server on http://localhost:3000
- Watches for file changes and auto-restarts
- Shows API endpoints in console
- Ready to receive requests

### Frontend (`npm start`)
- Starts Vite dev server on http://localhost:5173
- Opens browser automatically
- Hot module replacement (instant updates)
- Ready to use!

## Step-by-Step

### 1. Start Backend First
Open terminal/command prompt:
```bash
cd backend
npm start
```

Wait for:
```
🚀 Server running on http://localhost:3000
📚 API Documentation:
   Health: GET /api/health
   Auth: POST /api/auth/register, /api/auth/login
   ...
```

### 2. Start Frontend Second
Open NEW terminal/command prompt:
```bash
cd frontend
npm start
```

Wait for:
```
  VITE v7.2.4  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Browser opens automatically to http://localhost:5173

### 3. Use the Platform!
- Sign up with new account
- Analyze your startup idea
- Chat with AI mentor
- Generate fresh ideas
- Explore all features!

## Alternative Commands

If you prefer the old commands, they still work:

### Backend
```bash
npm run dev    # Same as npm start
npm run build  # Compile TypeScript
npm run start:prod  # Run compiled version
```

### Frontend
```bash
npm run dev    # Same as npm start
npm run build  # Build for production
npm run preview  # Preview production build
```

## Troubleshooting

### Port Already in Use

**Backend (port 3000):**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=3001
```

**Frontend (port 5173):**
- Vite will automatically try port 5174, 5175, etc.

### Module Not Found

```bash
# Backend
cd backend
rm -rf node_modules
npm install

# Frontend
cd frontend
rm -rf node_modules
npm install
```

### TypeScript Errors

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm start
```

## Using Batch Files (Windows)

Even easier - just double-click:
- `START_BACKEND.bat` - Starts backend
- `START_FRONTEND.bat` - Starts frontend
- `RESTART_EVERYTHING.bat` - Restarts both

## Stopping the Servers

Press `Ctrl + C` in each terminal to stop the servers.

## Summary

**Easiest way to start:**
```bash
# Terminal 1
cd backend && npm start

# Terminal 2
cd frontend && npm start
```

**Or use batch files (Windows):**
- Double-click `START_BACKEND.bat`
- Double-click `START_FRONTEND.bat`

Both methods work perfectly! 🎉
