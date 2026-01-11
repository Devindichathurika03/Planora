# Planora - Event Planning Platform (Frontend)

![Planora Logo](./src/assets/logo.png)

**Planora** is a modern, frontend-only event planning platform that lets users explore vendors, plan events, and add services to a cart—all from a smooth and interactive interface.

---

## 🚀 Project Overview

- Build interactive pages for **event planning**, **vendor marketplace**, **cart management**, **sign in**, and **sign up**.  
- Users can browse vendors by category, see ratings, reviews, pricing, and select vendors for their events.  
- Real-time cart updates and budget tracking.  
- Mobile-friendly, responsive design using **Tailwind CSS**.  
- Deployed frontend using **Vite** and **React** on **Vercel**.

---

## 📅 Project Status

- **Started:** Dec 2025  
- **Frontend development:** Dec 2025 – Jan 2026  
- Backend not included (frontend-only prototype).

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite  
- **Styling:** Tailwind CSS  
- **Icons & UI components:** Lucide React, Shadcn/UI  
- **State management:** React `useState` & Context API (for cart & planning data)  
- **Deployment:** Vercel  

---

## 📂 Folder Structure
```
planora-frontend/
├─ public/
│ └─ index.html
├─ src/
│ ├─ assets/ # Images, logo
│ ├─ components/ # UI components
│ ├─ pages/ # Pages: Home, SignIn, SignUp, VendorDetails
│ ├─ context/ # Context API for cart and plan data
│ ├─ data/ # Mock vendor data
│ ├─ App.tsx
│ └─ main.tsx
├─ tailwind.config.js
├─ vite.config.ts
└─ package.json
```


---

## 📌 Pages & Features

- **Home Page:** Hero, vendor categories, featured vendors.  
- **Sign Up / Sign In Pages:** Responsive forms with validation.  
- **Vendor Details:** Detailed info, select date, add notes, add to cart.  
- **Cart Sidebar:** Displays selected vendors, prices, and total budget.  
- **Event Planning:** Multi-step event planning interface (frontend-only).  

---

## ⚡ Deployment on Vercel

1. Make sure `vercel.json` is added to root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
Push project to GitHub.

Connect GitHub repo to Vercel.

Deploy – frontend routing works without 404 errors.

``` 
Live demo: https://planorafrontend.vercel.app
```

📖 Usage
Clone the repo:

```
Copy code
git clone https://github.com/<your-username>/planora-frontend.git
cd planora-frontend
npm install
npm run dev
Open http://localhost:5173 in your browser.
```
⚙ Next Steps
Connect to a backend API for persistent data.

Add user authentication & database integration.

Enable real checkout/payment flow.

Improve vendor filtering, search, and recommendations.

📝 Notes
This project is currently frontend-only. All vendor and event data are mocked.

Sign up/sign in pages are functional for UI demonstration but do not connect to a backend yet.

💡 Author
Name: R.G.D.Chathurika

LinkedIn / Portfolio: www.linkedin.com/in/devindi-chathurika




