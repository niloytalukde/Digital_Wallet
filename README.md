# 💳 Digital Wallet Frontend

A secure, role-based, and user-friendly **Digital Wallet System frontend** inspired by services like **bKash** and **Nagad**.  
Built with **React, TypeScript, Redux Toolkit, and RTK Query**, this application enables Users, Agents, and Admins to manage wallets and transactions seamlessly.

The video demonstrates:
- Registration & login for User, Agent, and Admin
- Wallet operations (deposit, withdraw, send money)
- Transaction filtering and pagination
- User, Agent, and Admin management features

---

## 🧠 Project Overview

This frontend consumes a REST API to provide:

- A **public landing experience**
- **Role-based dashboards** (User, Agent, Admin)
- **Secure authentication & authorization**
- **Real-time state management** using Redux Toolkit & RTK Query
- A **polished, responsive UI/UX**

---

## 🧰 Tech Stack

### Frontend
- **React** + **TypeScript**
- **React Router DOM**
- **Redux Toolkit**
- **RTK Query**
- **Tailwind CSS**
- **shadcn/ui**
- **Chart Libraries** (Recharts / Chart.js)
- **Toast Notifications** (Sonner / React-Toastify)
- **Guided Tour** (React Joyride / Driver.js)

### Backend (separate repository)
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing

---

## 📌 Features

### 🌍 Public Landing Pages
Accessible without login:
- Home (Hero section, CTA, sticky navbar, footer)
- About
- Features
- Pricing (optional)
- Contact (simulated form submission)
- FAQ

Includes:
- Responsive layout
- Skeleton loaders
- Smooth transitions
- Fully functional navigation links

---

### 🔐 Authentication
- JWT-based login
- Role-based registration (User / Agent)
- Role-based redirection after login
- Persisted authentication (refresh-safe)
- Secure logout

---

### 👤 User Dashboard
- Wallet balance overview
- Deposit money (via agent simulation)
- Withdraw money
- Send money to another user
- Transaction history:
  - Pagination
  - Type & date filtering
- Profile management:
  - Update name, phone, password

---

### 🧑‍💼 Agent Dashboard
- Cash-in / cash-out overview
- Add money to user wallets
- Withdraw money from users
- Transaction history handled by agent
- Commission history (optional)
- Profile management

---

### 🛠️ Admin Dashboard
- System overview:
  - Total users
  - Total agents
  - Transaction volume & count
- User management:
  - View, block/unblock users
- Agent management:
  - Approve, suspend agents
- Global transaction monitoring:
  - Advanced filters
  - Pagination
- System fee/limit management (optional)
- Admin profile management

---

### 📊 General Features
- Role-based navigation menus
- Global loading & error handling
- Form validation (required fields, numeric checks, positive amounts)
- Advanced search & filtering
- Pagination for large datasets
- Data visualization:
  - Cards
  - Tables
  - Bar & pie charts
- Toast notifications for feedback
- Fully responsive design
- Accessible UI with consistent spacing and color themes

---

## 🧭 Guided Tour
Implemented using **React Joyride / Driver.js**

Includes at least 5 steps:
1. Navigation menu overview
2. Dashboard statistics cards
3. Charts and analytics section
4. Table search & filters
5. Theme toggle (light/dark mode)

✨ Features:
- Runs only once for new users (localStorage)
- “Restart Tour” option in settings
- Styled tooltips for better UX

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone (https://github.com/niloytalukde/Digital_Wallet/]
cd digital-wallet-frontend

