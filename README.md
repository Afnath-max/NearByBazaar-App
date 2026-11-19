# NearByBazaar

<p align="center">
  <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80" alt="Showcase Preview" width="100%" />
</p>

<p align="center">
  <strong>Local grocery pre-order and pickup mobile application connecting neighborhood customers with small grocery stores.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-Expo_SDK_57-006B2C?style=flat-square&logo=react" alt="React Native" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-22_LTS-339933?style=flat-square&logo=nodedotjs" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5.1-000000?style=flat-square&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas_Mongoose_8-47A248?style=flat-square&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Architecture-Feature_Sliced_BFF-orange?style=flat-square" alt="Architecture" />
</p>

<p align="center">
  <i>"Empowering neighborhood markets with modern, frictionless pre-order and curbside pickup."</i>
</p>

---

## Overview

**NearByBazaar** is a full-stack, mobile-first grocery pre-order and scheduled pickup platform designed for local residential communities and neighborhood grocery shop owners. Developed as an advanced Human-Computer Interaction (HCI) project at the Sri Lanka Institute of Information Technology (SLIIT), NearByBazaar eliminates uncertainty in grocery shopping by replacing handwritten notes and missed phone inquiries with real-time inventory visibility, intelligent category-based substitution suggestions, dynamic pickup scheduling, and a digital QR pickup pass.

---

## Key Features

### For Neighborhood Customers
* **Instant Product Discovery:** Search and browse neighborhood groceries by category (Fresh Produce, Dairy, Pulses, Essentials) with real-time stock availability.
* **Smart Basket & Substitution Control:** Real-time basket calculations with automated suggestions for unavailable items from the same shop.
* **Scheduled Curbside Pickup:** Reserve 30-minute collection windows based on shop operating hours and counter traffic capacity.
* **Digital Pickup Pass (QR Code):** Generate a dynamic digital pass with an order tracking code (`NM-8492`) for quick counter scanning and handoff.
* **Personalized Preferences:** Save vehicle curbside details, contact preferences, and automated substitution rules.

### For Small Shop Owners
* **Operational Control Dashboard:** Real-time pulse monitoring total sales, fulfilled orders, active packing queues, and inventory alerts with a 1-tap open/close switch.
* **Live Order Processing Pipeline:** Stage-based order fulfillment board (`New` ➔ `Preparing` ➔ `Ready` ➔ `Completed`).
* **Inventory Management:** Instant stock quantity adjustments (+/-), out-of-stock toggles, and bulk restock shortcuts.
* **Performance Analytics & Reporting:** Track hourly customer rush curves, payment distributions (LANKAQR vs Cash), fast-moving items, and export daily CSV/PDF summaries.
* **Configurable Store Rules:** Set custom preparation buffer windows, active concurrent order caps, and automated pickup expiration times.

---

## Architecture & Tech Stack

NearByBazaar implements a **Feature-Sliced Architecture (Vertical Slice)** on the client and a **Layered Modular Monolith (Controller-Service-Repository)** on the backend:

* **Frontend:** React Native (Expo SDK 57), TypeScript, Expo Router, Expo SecureStore, React Context API, React Native SVG.
* **Backend:** Node.js (v22 LTS), Express.js (v5), TypeScript, Mongoose (v8), MongoDB Atlas, Nodemailer, bcryptjs, JWT.
* **Deployment & Tooling:** Docker multi-stage Alpine build, Render Blueprint (`render.yaml`).

For full technical specifications, see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

---

## Getting Started

### Prerequisites
* Node.js 22 LTS or higher
* npm or yarn
* Expo Go app installed on your physical mobile device or an Android/iOS emulator

### 1. Backend Setup
```bash
cd server
npm install
copy .env.example .env
npm run dev
```
* The backend will start on `http://localhost:5000`
* Health verification endpoint: `GET http://localhost:5000/api/health`

### 2. Mobile App Setup
```bash
cd ../client
npm install
copy .env.example .env
npm start
```
* Scan the displayed QR code with Expo Go (Android) or Camera (iOS) to launch the application.

---

## Project Directory Tree

```
NearByBazaar-App/
├── client/                               # React Native (Expo SDK 57) Mobile Application
│   ├── assets/                           # Brand graphics, icons, fonts
│   └── src/
│       ├── app/                          # Thin Expo Router screens & role navigation guards
│       ├── components/                   # Atomic UI primitives, layout wrappers, feedback states
│       ├── context/                      # Global state providers (AuthContext, CartContext)
│       ├── features/                     # Feature slices (auth, cart, orders, products, shops, reports)
│       ├── theme/                        # Design tokens (colors, typography, spacing)
│       ├── utils/                        # Localized currency, date formatters, validators
│       └── services/                     # Interceptor HTTP client & SecureStore persistence
├── server/                               # Node.js + Express + TypeScript Backend REST API
│   ├── src/
│   │   ├── config/                       # DB connection pool & environment schema
│   │   ├── constants/                    # Roles, order status enums, HTTP status codes
│   │   ├── controllers/                  # HTTP transport orchestration
│   │   ├── middleware/                   # JWT auth, role RBAC guards, error handler
│   │   ├── models/                       # Mongoose schemas (User, Shop, Product, Cart, Order, Slot)
│   │   ├── routes/                       # Internal BFF REST endpoints
│   │   ├── services/                     # Atomic business logic & reservation engines
│   │   ├── utils/                        # AppError, password hasher, JWT signer
│   │   └── validators/                   # Input validation schemas
│   └── tests/                            # Automated integration test suites
├── docs/                                 # Architectural specifications & member reports
│   ├── ARCHITECTURE.md                   # System design & pattern documentation
│   ├── MEMBER_2_INTEGRATION.md           # Member 2 integration documentation
│   └── MEMBER_3_AFNATH_INTEGRATION.md   # Member 3 (Afnath Ahamed) integration documentation
├── render.yaml                           # Cloud deployment blueprint
└── README.md                             # Repository showcase documentation
```

---

## Security Governance

* **Authentication & Secrets:** Stateless JWT authentication stored in hardware keystores via `Expo SecureStore`. Passwords hashed using `bcryptjs` with salt rounds = 10.
* **Role-Based Access Control (RBAC):** Strict middleware guards ensuring customers cannot access merchant management endpoints and shop owners cannot mutate customer baskets.
* **Idempotency & Race Condition Prevention:** Atomic MongoDB operators (`$inc`, `$setOnInsert`) combined with client-side checkout keys prevent double-booking pickup capacity or overselling stock.

---

## License

This project is developed for educational and academic evaluation under the Sri Lanka Institute of Information Technology (SLIIT). All rights reserved.
