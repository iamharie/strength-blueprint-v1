# Portfolio MFE - Packages

This directory contains the micro frontend architecture for Hariharan Mohan's Portfolio.

## 📦 Packages

- **host-app** - Main portfolio application (Host)
- **test-module** - TEST page as a remote micro frontend

## 🚀 Quick Start

```bash
# 1. Install all dependencies
npm install
npm run install:all

# 2. Start development servers
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 📖 Full Documentation

See [README-MFE.md](../README-MFE.md) in the root directory for complete documentation.

## 🛠️ Scripts

```bash
npm run dev              # Start both apps
npm run build            # Build both apps
npm run clean            # Remove all node_modules
```

## 🏗️ Architecture

```
Host App (Port 3000)
├── Loads all portfolio pages
└── Dynamically imports TEST module

Test Module (Port 3001)
└── Exposes TestPage component
```

## ⚡ Module Federation

- **Host** consumes remote modules
- **Test Module** exposes components
- **Shared** dependencies (React, React DOM, etc.)

---

For troubleshooting and detailed setup, see [README-MFE.md](../README-MFE.md)
