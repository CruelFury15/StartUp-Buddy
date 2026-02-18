# 🚀 Quick Start Guide - Startup Buddy

## Get Up and Running in 5 Minutes!

---

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- A code editor (VS Code recommended)

---

## Step 1: Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

---

## Step 2: Configure Environment Variables

### Backend Environment
The `.env` file is already created in `backend/.env` with default values.

**Optional**: Add your Gemini API key for real AI responses:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from: https://makersuite.google.com/app/apikey

### Frontend Environment
The `.env` file is already created in `frontend/.env`:
```env
VITE_API_URL=http://localhost:3000
```

---

## Step 3: Start the Servers

### Terminal 1 - Start Backend
```bash
cd backend
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:3000
```

### Terminal 2 - Start Frontend
```bash
cd frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

---

## Step 4: Open the App

1. Open your browser
2. Go to: `http://localhost:5173`
3. You'll see the login page

---

## Step 5: Login

1. Enter any username (e.g., "John")
2. Enter any email (e.g., "john@example.com")
3. Enter a password (minimum 8 characters, e.g., "password123")
4. Click "Sign In"

**Note**: The app will automatically register you if you're a new user!

---

## Step 6: Explore Features

### Dashboard
- 3-step startup analysis flow
- Category selection
- Budget and experience inputs
- Idea description

### AI Mentor
- Click "AI Mentor" in the sidebar
- Choose a topic or click "AI Mentor is Online"
- Chat with the AI assistant
- Get personalized startup advice

### Startup Explorer
- Browse 6 startup categories
- View curated startup ideas
- Get detailed information

### Financial Assessment
- Calculate your runway
- Analyze burn rate
- View financial metrics

### Co-Founder Matching
- Find potential co-founders
- View persona reports
- Assess compatibility

### Settings
- Update profile
- Change password
- Configure notifications
- Toggle dark/light theme

---

## 🎯 Quick Test Checklist

- [ ] Backend server is running on port 3000
- [ ] Frontend server is running on port 5173
- [ ] Can login successfully
- [ ] Dashboard loads after login
- [ ] Can navigate between pages
- [ ] AI Mentor chat works
- [ ] Can logout successfully
- [ ] Session persists after page refresh

---

## 🐛 Common Issues

### Port Already in Use
**Backend (Port 3000)**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Frontend (Port 5173)**:
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### Cannot Connect to Backend
1. Check backend is running: `http://localhost:3000/api/health`
2. Should return: `{"status":"ok","message":"StartUp-Buddy API is running"}`
3. Check frontend `.env` has correct API URL

### Login Not Working
1. Check browser console for errors
2. Verify backend console shows the request
3. Try clearing localStorage and cookies
4. Use a different email address

---

## 📚 Documentation

- **Backend API**: See `backend/API.md`
- **Integration Guide**: See `BACKEND_CONNECTED.md`
- **Full Checklist**: See `BACKEND_INTEGRATION_CHECKLIST.md`
- **Postman Collection**: Import `backend/StartUp-Buddy.postman_collection.json`

---

## 🎉 You're All Set!

Your Startup Buddy app is now running with:
- ✅ Full authentication system
- ✅ AI-powered mentor chat
- ✅ Real-time backend integration
- ✅ Session persistence
- ✅ Beautiful UI with dark/light themes

**Start building your startup journey!** 🚀

---

## 💡 Pro Tips

1. **Use Dark Mode**: Toggle in Settings for a better experience
2. **Chat with AI**: Ask specific questions for better responses
3. **Explore All Features**: Each section has unique tools
4. **Save Your Work**: All data is stored in the backend
5. **Check Console**: Open DevTools to see API calls in action

---

## 🆘 Need Help?

- Check `BACKEND_CONNECTED.md` for detailed integration info
- Review `backend/API.md` for API documentation
- Look at browser console for frontend errors
- Check backend terminal for server errors
- Verify environment variables are set correctly

---

**Happy Coding! 🎊**
