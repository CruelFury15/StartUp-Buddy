# 🚀 How to Start StartUp-Buddy

## ✅ YES! You can use `npm start`

Both backend and frontend now support `npm start` for easy startup!

## Quick Start (3 Steps)

### Step 1: Open Terminal for Backend
```bash
cd backend
npm start
```

Wait for: `🚀 Server running on http://localhost:3000`

### Step 2: Open NEW Terminal for Frontend
```bash
cd frontend
npm start
```

Wait for: `➜  Local:   http://localhost:5173/`

### Step 3: Use the Platform!
Browser opens automatically to http://localhost:5173

## Alternative Methods

### Method 1: npm start (Recommended)
```bash
# Terminal 1
cd backend && npm start

# Terminal 2
cd frontend && npm start
```

### Method 2: npm run dev (Same thing)
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

### Method 3: Batch Files (Windows - Easiest!)
- Double-click `START_BACKEND.bat`
- Double-click `START_FRONTEND.bat`

## What Each Command Does

### Backend: `npm start`
- Starts Express server on port 3000
- Watches for file changes
- Auto-restarts on code changes
- Shows API endpoints in console

### Frontend: `npm start`
- Starts Vite dev server on port 5173
- Opens browser automatically
- Hot module replacement (instant updates)
- Shows local and network URLs

## First Time Setup

If this is your first time:

```bash
# Backend
cd backend
npm install    # Install dependencies first
npm start      # Then start

# Frontend (new terminal)
cd frontend
npm install    # Install dependencies first
npm start      # Then start
```

## Verify It's Working

### Backend Check
Open http://localhost:3000 in browser
You should see:
```json
{
  "message": "🚀 Welcome to StartUp-Buddy API",
  "version": "2.0.0",
  "endpoints": { ... }
}
```

### Frontend Check
Browser should open automatically to http://localhost:5173
You should see the login page

## Stopping the Servers

Press `Ctrl + C` in each terminal window

## Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org

### "Port 3000 already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=3001
```

### "Module not found"
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

## Summary

**Easiest way:**
```bash
cd backend && npm start
cd frontend && npm start
```

**Or just double-click:**
- `START_BACKEND.bat`
- `START_FRONTEND.bat`

Both work perfectly! 🎉
