# NearByBazaar System Architecture & Engineering Specification

## 1. High-Level Architectural Pattern
NearByBazaar follows a **Three-Tier Client-Server Architecture** with a **Stateless RESTful API Gateway**:

```
[ Tier 1: Client ]        ──HTTP / JSON (Bearer JWT)──► [ Tier 2: Application Server ] ──Mongoose ODM──► [ Tier 3: Database ]
React Native (Expo SDK)                                 Node.js + Express + TypeScript                   MongoDB Atlas
Customer App & Shop Portal                              Stateless Business Logic Engine                  Document Store
```

## 2. Frontend: Feature-Sliced Dynamic Shell
* **Routing:** Expo Router (File-Based). Route files are thin shells delegating to domain feature slices.
* **Feature Domains (`client/src/features/`):**
  * `auth/`: Session management, JWT persistence, signup/login forms.
  * `cart/`: Real-time basket calculations, substitution recommendations.
  * `orders/`: QR Pickup pass generation, status tracking pipeline.
  * `products/`: Product catalog search, category filtering, stock adjustments.
  * `shops/`: Store profiles, operating hours, capacity limits.
  * `reports/`: Analytics queries, revenue aggregation, report exports.
* **Design System (`client/src/components/ui/`):**
  * Presentational components (`Button`, `Input`, `Badge`, `Card`, `Modal`) decouple styling from business state.
* **Design Tokens (`client/src/theme/`):**
  * Centralized palette (`#006B2C` primary forest green), typography scale, and elevation shadows.

## 3. Backend: Layered Modular Monolith with Internal BFF
* **Routes (`server/src/routes/`):** URL mapping with role middleware pipelines.
* **Controllers (`server/src/controllers/`):** HTTP transport orchestration (parameters, status codes).
* **Services (`server/src/services/`):** Pure business logic (inventory decrement, slot allocation, idempotency).
* **Models (`server/src/models/`):** Mongoose schemas with compound indexes (`User`, `Shop`, `Product`, `Cart`, `Order`, `PickupSlot`).
* **Concurrency & Atomicity:** Concurrency mutex handles simultaneous checkouts using atomic MongoDB document operators (`$inc`, `$pull`, `$setOnInsert`), guaranteeing zero overselling.
