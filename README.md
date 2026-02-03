# Playwright Web & API Automation Project

This project is an automation testing framework built with **Playwright** using **TypeScript**.  
It supports **both Web UI testing and API testing** in a single project, with a clean and scalable structure inspired by Robot Framework concepts.

---

## ✨ Features

- Web UI automation with Playwright
- API testing using `APIRequestContext`
- Shared fixtures for Web and API
- Environment-based configuration
- Clean separation between:
  - tests
  - fixtures
  - utility
  - validators
  - data
- Type-safe with TypeScript

---

## 🧰 Tech Stack

- **Node.js**
- **Playwright**
- **TypeScript**

---

## 📦 Prerequisites

### Node.js (Required)

- **Node.js v18+** (recommended)
- Minimum supported: **Node.js v16.17+**

Check your version:
```bash
node -v
```

---

## 📥 Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd playwright_project_web_api
```

2. Install dependencies
```bash
npm install
```

3. Install Playwright browsers
```bash
npx playwright install
```

---

## 📁 Project Structure

```text
playwright_project_web/
│
├─ api/
│   ├─ clients/
│   └─ validators/
│
├─ data/
│   ├─ api/
│   └─ web/
│
├─ fixtures/
│   ├─ api/
│   └─ web/
│
├─ pages/
│
├─ tests/
│   ├─ api/
│   └─ web/
│
├─ utils/
│
├─ playwright.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

---

## 🌐 Environment Configuration

Set API base URL via environment variable:

```bash
export API_BASE_URL=https://automationexercise.com
```

If not provided, the project will fallback to:
```ts
https://automationexercise.com
```

---

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run Web UI tests
```bash
npx playwright test tests/web
```

### Run API tests
```bash
npx playwright test tests/api
```

### Run a specific test file
```bash
npx playwright test tests/api/product-api.spec.ts
```

---

## 📊 Test Report

```bash
npx playwright show-report
```

---

## 🔌 API Testing Approach

- Uses Playwright `APIRequestContext`
- API logic is separated into:
  - **clients**: API calls
  - **validators**: response assertions

---

## 🧠 Design Principles

- Fixtures manage setup and teardown
- Clients do not contain assertions
- Validators contain only assertions
- Tests focus on business flow
- No hardcoded URLs in test logic

---

## 📄 License

For learning and automation practice purposes.
