@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 goto install_node
where npm.cmd >nul 2>&1
if errorlevel 1 goto install_node
goto dependencies

:install_node
where winget >nul 2>&1
if errorlevel 1 goto manual_install
winget install --id OpenJS.NodeJS.LTS --exact --source winget
if errorlevel 1 exit /b 1

rem Make the standard Node.js installation available in this terminal.
set "PATH=%ProgramFiles%\nodejs;%PATH%"
where node >nul 2>&1
if errorlevel 1 goto restart_terminal
where npm.cmd >nul 2>&1
if errorlevel 1 goto restart_terminal

:dependencies
rem Use npm.cmd so PowerShell's script execution policy is not involved.
if exist package-lock.json (
  call npm.cmd ci
) else (
  call npm.cmd install
)
if errorlevel 1 exit /b 1
echo Dependencies installed. Start the server with: node Server.js
exit /b 0

:manual_install
echo Install Node.js LTS from https://nodejs.org, then reopen your terminal and run .\requirments.cmd again.
exit /b 1

:restart_terminal
echo Reopen your terminal so Node.js/npm are on PATH, then run .\requirments.cmd again.
exit /b 1
