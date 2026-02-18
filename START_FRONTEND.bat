@echo off
echo ========================================
echo Starting StartUp-Buddy Frontend
echo ========================================
echo.

cd frontend

echo Checking Node.js installation...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
call npm install

echo.
echo Starting frontend server...
echo.
echo ========================================
echo Frontend will run on http://localhost:5173
echo Keep this window open!
echo ========================================
echo.

call npm run dev

pause
