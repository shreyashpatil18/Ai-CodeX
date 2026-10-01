# ResolvAI - AI Customer Escalation Resolution Agent (Frontend)

A premium, modern SaaS customer-support and autonomous escalation resolution interface built with React, Vite, Tailwind CSS, and Axios.

## Features

- **Customer Support Portal:**
  - One-click demo customer personas (Failed Payment, Refund Pending, Escalation Case, Missing Order)
  - Interactive Customer Dashboard with status tracking & active SLA metrics
  - Simple, streamlined Create Complaint workflow
  - Multi-step, customer-friendly AI Investigation progress screen (zero technical jargon)
  - Comprehensive Resolution Screen highlighting root cause, policy actions, and next steps
  - Real-time conversation thread and message reply system
  - Order History & direct issue reporting
  - Help & Policy Center with searchable company refund/cancellation guidelines

- **Admin & Support Supervisor Console:**
  - Executive KPI cards: Total, Open, Resolved, Escalated, Urgent SLA
  - Filterable & searchable Complaints Management table
  - Advanced Two-Column Complaint Review layout:
    - Left: Customer profile, order info, payment info, conversation thread & internal notes
    - Right: AI Investigation intent analysis, root cause, policy alignment, confidence scoring
  - Supervisor Actions: Resolve ticket with agent notes, Escalate to human supervisor, Add internal notes
  - Supervisor Escalation Queue
  - Customer directory & Orders ledger
  - Live AI Policy RAG Simulator testing vector keyword alignment
  - Resolution intelligence analytics & SLA benchmarks

## Tech Stack

- **React 18**
- **Vite 5**
- **Tailwind CSS 3**
- **React Router 6**
- **Axios** (Centralized API service reading `VITE_API_BASE_URL`)
- **Lucide React** icons

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create `.env` file (or copy `.env.example`):
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

### 3. Run Development Server
```bash
npm run dev
```
The frontend is available at `http://localhost:5173`.
