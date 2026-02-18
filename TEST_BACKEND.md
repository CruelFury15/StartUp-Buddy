# 🧪 Backend Connection Test

## Quick Test to Verify Backend is Working

### Step 1: Check if Backend is Running

Open a new terminal and run:

```bash
curl http://localhost:3000/api/health
```

**Expected Response:**
```json
{"status":"ok","message":"StartUp-Buddy API is running"}
```

**If you get an error:**
- Backend is not running
- Start it with: `cd backend && npm run dev`

---

### Step 2: Test Registration

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\",\"name\":\"Test User\"}"
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1234567890,
    "email": "test@example.com",
    "name": "Test User"
  }
}
```

---

### Step 3: Test Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1234567890,
    "email": "test@example.com",
    "name": "Test User"
  }
}
```

---

## Common Issues

### Issue 1: "Connection refused" or "Failed to connect"
**Cause**: Backend is not running  
**Fix**: 
```bash
cd backend
npm run dev
```

### Issue 2: "Invalid credentials" on first login
**Cause**: User doesn't exist yet (backend uses in-memory storage)  
**Fix**: This is normal! The frontend will automatically register you.

### Issue 3: Backend starts but crashes immediately
**Cause**: Missing dependencies or port already in use  
**Fix**:
```bash
# Install dependencies
cd backend
npm install

# Check if port 3000 is in use
# Windows:
netstat -ano | findstr :3000

# Mac/Linux:
lsof -ti:3000
```

---

## Frontend Login Flow

When you try to login:

1. **Frontend sends login request** to `POST /api/auth/login`
2. **If user doesn't exist** (401 error), frontend automatically calls `POST /api/auth/register`
3. **Registration creates user** and returns token
4. **Token is stored** in localStorage
5. **You're logged in!**

---

## Important Notes

⚠️ **Backend uses in-memory storage**
- Users are stored in a JavaScript array
- Data is lost when server restarts
- This is normal for development
- For production, you'll need a real database

✅ **Auto-registration is enabled**
- First-time users are automatically registered
- No need for separate registration page
- Just enter your details and click "Sign In"

---

## Quick Troubleshooting Checklist

- [ ] Backend server is running (`npm run dev` in backend folder)
- [ ] Backend shows "Server running on http://localhost:3000"
- [ ] Health check works: `curl http://localhost:3000/api/health`
- [ ] Frontend .env has correct API URL: `VITE_API_URL=http://localhost:3000`
- [ ] Frontend was restarted after creating .env file
- [ ] Browser console shows no CORS errors
- [ ] Password is at least 8 characters

---

## Still Having Issues?

### Check Backend Console
Look for errors in the terminal where backend is running:
- Port already in use?
- Missing environment variables?
- Syntax errors?

### Check Frontend Console
Open browser DevTools (F12) and check Console tab:
- Network errors?
- CORS errors?
- API response errors?

### Check Network Tab
In DevTools, go to Network tab:
- Is the request being sent to `http://localhost:3000/api/auth/login`?
- What's the response status code?
- What's the response body?

---

## Manual Test in Browser

1. Open browser DevTools (F12)
2. Go to Console tab
3. Paste this code:

```javascript
// Test backend connection
fetch('http://localhost:3000/api/health')
  .then(r => r.json())
  .then(data => console.log('Backend is running:', data))
  .catch(err => console.error('Backend error:', err));

// Test registration
fetch('http://localhost:3000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User'
  })
})
  .then(r => r.json())
  .then(data => console.log('Registration successful:', data))
  .catch(err => console.error('Registration error:', err));
```

---

**If all tests pass, your backend is working correctly!** 🎉

The "Invalid credentials" error should be resolved by the auto-registration feature.
