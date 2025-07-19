# Express with TypeScript Setup Guide

This guide will help you set up an Express server with TypeScript step by step.

---

## Prerequisites

Ensure you have the following installed:
- Node.js
- npm (comes with Node.js)

---

## Steps to Setup the Project

### **Step 1: Initialize the Project**
Run the following command to initialize a new Node.js project:
```bash
npm init -y
```

### **Step 2: Install Express**
Install Express as a dependency:
```bash
npm add express
```

### **Step 3: Install TypeScript**
Install TypeScript as a development dependency:
```bash
npm add -D typescript
```

### **Step 4: Initialize TypeScript**
Generate a `tsconfig.json` file:
```bash
tsc --init
```

### **Step 5: Setup Folder Structure**
1. Create a `src` folder with a subfolder named `app`:
   ```
   src/
   └── app/
   ```
2. Create a `dist` folder in the root for compiled JavaScript files.
3. Inside `src/app`, create two files:
   - `app.ts`
   - `server.ts`

### **Step 6: Configure `tsconfig.json`**
Update `tsconfig.json` to set the source and output directories:
```json
"rootDir": "./src/",
"outDir": "./dist"
```

### **Step 7: Add Express "Hello World" Code**
In `src/app/app.ts`, add the following code:

```typescript
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
```

### **Step 8: Move `app.listen` to `server.ts`**
In `src/app/server.ts`, add the server logic:

```typescript
import app from './app';

const PORT = 5000;

async function bootstrap() {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

bootstrap();
```

### **Step 9: Add Middleware**
In `src/app/app.ts`, add middleware to parse JSON and text:

```typescript
import express, { Application } from 'express';

const app: Application = express();

// Middleware to handle JSON and text requests
app.use(express.json());
app.use(express.text());

export default app;
```

### **Step 10: Compile and Run the Server**
1. Compile the TypeScript code:
   ```bash
   tsc
   ```
2. Run the compiled server:
   ```bash
   node dist/app/server.js
   ```

### **Step 11: Use `nodemon` for Development**
1. Install `nodemon` as a development dependency:
   ```bash
   npm add -D nodemon
   ```
2. Add a script to `package.json` for live development:
   ```json
   "scripts": {
     "start:dev": "nodemon ./dist/server.js"
   }
   ```
3. Run the server in development mode:
   ```bash
   npm run start:dev
   ```

### **Step 12: Enable Live Compilation**
For live compilation, use:
```bash
tsc -w
```

---

## Middleware Summary

To handle different types of data from clients:
- Use `app.use(express.json())` to parse JSON data.
- Use `app.use(express.text())` to parse plain text data.

---

## Commands Overview

| Command                       | Description                          |
|-------------------------------|--------------------------------------|
| `npm init -y`                 | Initialize a new Node.js project     |
| `npm add express`             | Install Express                      |
| `npm add -D typescript`       | Install TypeScript                   |
| `tsc --init`                  | Initialize TypeScript configuration  |
| `tsc`                         | Compile TypeScript code              |
| `tsc -w`                      | Compile TypeScript in watch mode     |
| `npm add -D nodemon`          | Install nodemon for live reload      |
| `npm run start:dev`           | Start the server with live reload    |

---

Now you have a fully functional Express server running with TypeScript!

```json
{
  "configs": [
    {
      "files": ["**/*.{js,mjs,cjs,ts,mts,cts}"],
      "plugins": {
        "js": "@eslint/js"
      },
      "extends": ["js/recommended"]
    },
    {
      "files": ["**/*.{js,mjs,cjs,ts,mts,cts}"],
      "languageOptions": {
        "globals": "browser"
      }
    },
    "typescript-eslint/recommended"
  ]
}
```

