# Playwright Web & API Automation Project

This project is an automation testing framework built with **Playwright** using **TypeScript**.  
It supports **both Web UI testing and API testing** in a single project, with a clean and scalable structure inspired by Robot Framework concepts.

---

## ✨ Features

- Web UI automation with Playwright
- API testing using `APIRequestContext`
- Shared fixtures for Web and API
- Environment-based configuration
- Clean separation between tests, fixtures, utility, validators, and data
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
cd Playwright-Practice-Project
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

```
Playwright-Practice-Project/
│
├── api/
│   ├── clients/
│   └── validators/
│
├── data/
│   ├── api/
│   └── web/
│
├── fixtures/
│   ├── api/
│   └── web/
│
├── pages/
│
├── tests/
│   ├── api/
│   └── web/
│
├── utils/
│
├── playwright.config.ts
├── package.json
├── PlaywrightJenkinsfile          ← Jenkins pipeline definition
├── PlaywrightJenkinsDockerfile    ← Standalone Dockerfile (optional)
└── README.md
```

---

## 🌐 Environment Configuration

Set API base URL via environment variable:

```bash
export API_BASE_URL=https://automationexercise.com
```

If not provided, the project will fallback to:

```
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

## 🏗️ Jenkins Pipeline: `PlaywrightJenkinsfile`

This project includes `PlaywrightJenkinsfile` for running tests via Jenkins CI/CD.  
The shared Jenkins Docker image is maintained at:  
👉 [jenkins-shared](https://github.com/sipahtsanan/jenkins-shared)

### Pipeline Stages

| Stage | Description |
|-------|-------------|
| **Install Dependencies** | Runs `npm ci` to install project packages |
| **Install Playwright Browsers** | Installs Chromium browser via `npx playwright install chromium` |
| **Run API Tests** | Runs tests under `tests/api/` and publishes JUnit results |
| **Run Web Tests** | Runs tests under `tests/web/` and publishes JUnit results |
| **Archive Report** | Archives the `playwright-report/` folder as a build artifact |

### Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `TEST_SUITE` | `all` | Choose which suite to run: `all`, `api`, or `web` |
| `API_BASE_URL` | `https://automationexercise.com` | Base URL for API tests |

### Reporter Configuration

Test reports are configured in `playwright.config.ts`:

```typescript
reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
]
```

JUnit results are picked up by Jenkins automatically for trend tracking.

---

## 🐳 `PlaywrightJenkinsDockerfile` (Optional — Standalone Image)

This file is provided for cases where you want to run this project with its **own dedicated Jenkins image**, independent from the shared image in [jenkins-shared](https://github.com/sipahtsanan/jenkins-shared).

It builds a Jenkins image with Node.js and Playwright system dependencies pre-installed.

```bash
docker build -t my-jenkins-playwright -f PlaywrightJenkinsDockerfile .

docker run -d --name jenkins \
  -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e JAVA_OPTS="-Dorg.jenkinsci.plugins.durabletask.BourneShellScript.HEARTBEAT_CHECK_INTERVAL=86400" \
  my-jenkins-playwright
```

> **Recommended:** Use the shared image from [jenkins-shared](https://github.com/sipahtsanan/jenkins-shared) instead, which supports all automation projects (Newman, Playwright, Robot Framework) in a single image.

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
