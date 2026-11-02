# 470-Security-

Open a terminal in the project folder and use the command for your system.

### macOS (Terminal)

```sh
bash requirments.txt
```

If Node.js or npm is missing, the script installs Node.js using Homebrew when
available. Otherwise, install Node.js LTS from https://nodejs.org, reopen your
terminal, and run the command again.

### Windows (PowerShell or Command Prompt)

```powershell
.\requirments.cmd
```

No Bash installation is needed. If Node.js or npm is missing, the script uses
Windows Package Manager (`winget`) to install Node.js LTS. Follow any installer
prompts. If `winget` is unavailable, install Node.js LTS from https://nodejs.org,
reopen your terminal, and run the command again.

Windows users who already have Node.js/npm and Git Bash can also run
`bash requirments.txt` from Git Bash. Use the native Windows command above from
PowerShell or Command Prompt.

Both scripts install the project dependencies from `package-lock.json` using
`npm ci` (which replaces `node_modules`), or `npm install` if no lockfile exists.
`requirments.txt` is a Bash script, not a Python pip requirements file.

### Start the server

```sh
node Server.js
```

Then open http://localhost:3000. You can also start it with `npm start`.
