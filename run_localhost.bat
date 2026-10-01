@echo off
title AI Customer Escalation Resolution Agent - Localhost
echo ========================================================
echo Starting AI Customer Escalation Resolution Agent...
echo Backend:  http://127.0.0.1:8000
echo Frontend: http://127.0.0.1:5173
echo ========================================================
cd /d "%~dp0"
node run_all.js
pause
