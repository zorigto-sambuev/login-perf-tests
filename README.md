# 📗 How to Run Tests – Cypress + k6 Setup

This project contains two types of automated tests:

1. ✅ **Cypress End-to-End (E2E)** tests for login flow
2. 🚀 **k6 Performance** tests with HTML dashboard reporting

---

## 🔧 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**
- **Go** (for k6 dashboard)
- `k6` built with the `xk6-dashboard` extension

---

## 🧪 Cypress E2E Tests

### 📁 Location

- Test Spec: `cypress/e2e/login.cy.js`
- Page Object: `cypress/pages/LoginPage.js`
- HTML Report Output: `cypress/reports/html/mochawesome.html`

---

### 🧰 Install Dependencies

```bash
npm install
```

---

### ▶️ Run Cypress Tests and Generate Report

```bash
npm run test:full
```

This will:

1. Clean previous reports
2. Run Cypress tests
3. Merge Mochawesome reports
4. Generate HTML output in `cypress/reports/html/`

---

## 🚀 k6 Performance Tests

### 📁 Location

- Load Test File: `k6-tests/performance.test.js`
- Exported HTML Report: `k6-tests/k6-dashboard.html`

---

### ⚙️ Build k6 with Dashboard Extension

```bash
go install go.k6.io/xk6/cmd/xk6@latest
xk6 build --with github.com/grafana/xk6-dashboard@latest
mv k6 /usr/local/bin
```

---

### ▶️ Run Load Test and View Dashboard

```bash
k6 run --out dashboard k6-tests/performance.tests.js
```

Open live dashboard at:
```
http://localhost:5665
```

---

### 💾 Export and Commit HTML Report

1. Open: `http://localhost:5665/export/html`
2. Save as: `k6-tests/k6-dashboard.html`

```bash
git add k6-tests/k6-dashboard.html
git commit -m "Add exported k6 HTML dashboard"
git push
```

GitHub Actions will upload this file as an artifact named: `k6-dashboard-html`