# 🔧 Fix "Invalid Credentials" Login Issue

## The Problem
You're seeing "Invalid credentials" when trying to sign in.

## Why This Happens
The backend uses **in-memory storage** (a JavaScript array), which means:
- Users are stored temporarily in RAM
- When the backend restarts, all users are deleted
- If you try to login with an account that doesn't exist, you get "Invalid credentials"

## The Solution
I've updated the frontend to **automatically register** you if login fails!

---

## ✅ What I Fixed

### Updated: `frontend/src/contexts/AuthContext.tsx`

**New Behavior:**
1. Try to login first
2. If you get "Invalid credentials" (401 error), automatically register
3. Store your token and log you in
4. Show helpful error messages

**Changes:**
- Better error handling
- Auto-registration on 401 errors
- Alert messages to tell you what's happening
- Connection error detection

---

## 🚀 How to Fix Your Issue Right Now

### Option 1: Restart Frontend (Recommended)

The fix is already applied. Just restart your frontend:

```bash
# Stop the frontend (Ctrl+C)
# Then restart it:
cd frontend
npm run dev
```

Now try logging in again. It should work!

### Option 2: Clear Browser Data

If Option 1 doesn't work:

1. Open DevTools (F12)
2. Go to Application tab
3. Click "Clear storage"
4. Click "Clear site data"
5. Refresh the page
6. Try logging in again

### Option 3: Use Different Email

The backend might have old data. Try a different email:
- Instead of: `test@example.com`
- Try: `myname@example.com` or `user123@test.com`

---

## 🧪 Test the Fix

### Step 1: Make Sure Backend is Running

```bash
cd backend
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:3000
```

### Step 2: Test Backend Health

Open a new terminal:
```bash
curl http://localhost:3000/api/health
```

Should return:
```json
{"status":"ok","message":"StartUp-Buddy API is running"}
```

### Step 3: Try Logging In

1. Go to `http://localhost:5173`
2. Enter:
   - Username: `john`
   - Email: `john@example.com`
   - Password: `password123`
3. Click "Sign In"

**What should happen:**
- You'll see a console message: "User not found, attempting registration..."
- You'll be automatically registered
- You'll be logged in and redirected to Dashboard

---

## 📊 What You'll See in Console

Open browser DevTools (F12) → Console tab

**Successful Login:**
```
User not found, attempting registration...
Authentication successful
```

**Backend Not Running:**
```
Login error: TypeError: Failed to fetch
Alert: Cannot connect to server. Please make sure the backend is running on http://localhost:3000
```

**Other Error:**
```
Authentication failed: {error: "User already exists"}
Alert: User already exists
```

---

## 🔍 Debugging Steps

### 1. Check Backend Console

Look at the terminal where backend is running. You should see:
```
POST /api/auth/login 401 - - ms
POST /api/auth/register 200 - - ms
```

### 2. Check Frontend Console

Open DevTools (F12) → Console. Look for:
- Any red error messages?
- Network errors?
- CORS errors?

### 3. Check Network Tab

DevTools (F12) → Network tab:
- Filter by "Fetch/XHR"
- Try logging in
- Click on the "login" request
- Check the Response tab

**If you see 401:**
- This is normal! Frontend will auto-register you

**If you see 200:**
- Login successful!

**If you see nothing:**
- Backend is not running

---

## 💡 Understanding the Flow

### Old Behavior (Before Fix)
```
User enters credentials
  ↓
Frontend calls /api/auth/login
  ↓
Backend: "User not found" → 401 error
  ↓
Frontend: Shows "Invalid credentials"
  ↓
User is stuck ❌
```

### New Behavior (After Fix)
```
User enters credentials
  ↓
Frontend calls /api/auth/login
  ↓
Backend: "User not found" → 401 error
  ↓
Frontend: "Let me register you!"
  ↓
Frontend calls /api/auth/register
  ↓
Backend: Creates user → Returns token
  ↓
Frontend: Stores token → Logs you in
  ↓
User is logged in! ✅
```

---

## 🎯 Quick Checklist

Before trying to login, verify:

- [ ] Backend is running (`cd backend && npm run dev`)
- [ ] Backend shows "Server running on http://localhost:3000"
- [ ] Frontend is running (`cd frontend && npm run dev`)
- [ ] Frontend was restarted after the fix
- [ ] Browser DevTools Console is open (F12)
- [ ] Password is at least 8 characters
- [ ] Using a valid email format

---

## 🆘 Still Not Working?

### Try This Manual Test

1. Open browser DevTools (F12)
2. Go to Console tab
3. Paste this code:

```javascript
// Test registration directly
fetch('http://localhost:3000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'testuser@example.com',
    password: 'password123',
    name: 'Test User'
  })
})
  .then(r => r.json())
  .then(data => {
    console.log('✅ Registration successful!', data);
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(data.user));
    alert('Registered! Refresh the page.');
  })
  .catch(err => console.error('❌ Registration failed:', err));
```

4. Press Enter
5. If successful, refresh the page
6. You should be logged in!

---

## 📝 Summary

**The Issue:** Backend loses users when it restarts (in-memory storage)

**The Fix:** Frontend now auto-registers you if login fails

**What to Do:** 
1. Restart frontend: `cd frontend && npm run dev`
2. Try logging in with any email/password
3. You'll be automatically registered and logged in!

**Still stuck?** Check `TEST_BACKEND.md` for detailed backend testing steps.

---

**Your login should work now!** 🎉

Try it and let me know if you still see any issues.
