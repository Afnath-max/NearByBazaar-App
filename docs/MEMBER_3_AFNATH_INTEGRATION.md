# Member 3 Integration: Afnath Ahamed (IT23833548)

**Project:** NearByBazaar (Local Grocery Pre-order and Pickup App for Small Shops)  
**Course Module:** IT3060 - Human Computer Interaction  
**Group:** WE_112  
**Role:** Member 3  
**Student ID:** IT23833548  
**Student Name:** Afnath Ahamed M N M  

---

## 1. Workload Distribution & Scope

As documented in the official SLIIT Milestone 01–03 Final Report, Member 3 is responsible for **Account Registration & Merchant Onboarding**, **Real-Time Order Tracking & Digital Pickup Verification**, **Customer Profile & Preferences Management**, and **Shop Operational Configuration**, including full CRUD integration and usability/functional testing (T05–T06).

| Interface ID | Interface Name | Primary Function | Frontend Implementation | Backend REST Endpoint |
|---|---|---|---|---|
| **I03** | Shop Owner Account Creation | Merchant registration & onboarding | `client/src/app/(auth)/shop-signup.tsx` | `POST /api/auth/register/shop` |
| **I09** | Order Tracking & Pickup | Real-time tracking & Digital QR Pickup Pass | `client/src/app/customer/order-tracking.tsx` | `GET /api/orders/:id`<br>`PATCH /api/orders/:id/cancel` |
| **I10** | Customer Profile / Settings | Manage profile, preferences & reminders | `client/src/app/customer/(tabs)/settings.tsx`<br>`client/src/app/customer/profile.tsx`<br>`client/src/app/customer/edit-profile.tsx` | `GET /api/users/me`<br>`PUT /api/users/me`<br>`GET/PUT /api/reminders/me` |
| **I15** | Shop Owner Settings | Store operating hours, buffers & caps | `client/src/app/shop/(tabs)/settings.tsx`<br>`client/src/app/shop/edit-profile.tsx` | `GET /api/shops/me`<br>`PATCH /api/shops/me` |

---

## 2. Interface Details & Technical Architecture

### I03 – Shop Owner Account Creation
* **File:** `client/src/app/(auth)/shop-signup.tsx`
* **Features:**
  * Two-part merchant onboarding: Store Profile (Store name, category, store address) and Owner Contact Details (Owner name, email, Sri Lankan mobile number).
  * Form validation adhering to NFR04 (Security & Privacy) and email uniqueness check.
  * Direct integration with `POST /api/auth/register/shop` creating both the `User` document (`role: 'shop'`) and linked `Shop` document.

### I09 – Order Tracking & Pickup (Digital Pickup Pass)
* **File:** `client/src/app/customer/order-tracking.tsx`
* **Features:**
  * **Digital Pickup Pass (QR Code):** Uses `react-native-qrcode-svg` to dynamically encode the secure order identifier for instant cashier counter scanning.
  * **4-Stage Visual Progress Timeline:**
    1. *Order Received* (Automated receipt confirmed by system)
    2. *Accepted by Shopkeeper* (Merchant confirmed basket availability)
    3. *Items Packed & Chilled* (Bagged with thermal wrap for fresh dairy)
    4. *Ready at Pickup Counter* (Awaiting customer collection)
  * Direct action triggers: Call store (`tel:`) and Google Maps navigation (`geo:` URL intent).
  * One-tap order cancellation for orders in `pending` state with automatic stock/slot release.

### I10 – Customer Profile / Settings
* **File:** `client/src/app/customer/(tabs)/settings.tsx`, `profile.tsx`, `edit-profile.tsx`
* **Features:**
  * Community badge & performance metrics (Pickups completed, monthly savings in LKR, community rating).
  * Shop pickup preferences: Preferred pickup area, default curbside vehicle notes (e.g. car model and license plate), and shop phone call permissions.
  * Order substitution rule toggles (Auto-replace with organic/best match vs Cancel missing items).
  * Pickup reminder schedule integration (`/api/reminders/me`).

### I15 – Shop Owner Settings
* **File:** `client/src/app/shop/(tabs)/settings.tsx`
* **Features:**
  * Store operating parameters: Store hours (e.g. 07:30 – 21:00), curbside prep buffer time (e.g. 15 minutes minimum), and maximum active concurrent orders cap (e.g. 10 orders).
  * Order & substitution governance: Auto-suggest alternatives toggle, auto-cancel uncollected pickups with customizable expiry duration (e.g. 30 minutes).
  * Counter settlement preferences (Cash on pickup vs LANKAQR digital settlement).

---

## 3. CRUD Operations Matrix

| Interface | CRUD Type | Operation Description | Data Model |
|---|---|---|---|
| **I03** | **Create / Read** | Register new shop-owner account; verify credentials & token | `User`, `Shop` |
| **I09** | **Read / Update** | Retrieve live order status, generate QR pass, cancel pending order | `Order`, `PickupSlot` |
| **I10** | **Read / Update** | Fetch profile data, update preferences, vehicle notes, and reminders | `User`, `PickupReminder` |
| **I15** | **Read / Update** | Fetch store configuration, mutate operating hours, buffer windows, caps | `Shop` |

---

## 4. Verification & Testing Evidence (T05–T06)

* **Functional Test T05 (Order Tracking & Pickup):**
  * *Procedure:* Create an order via customer checkout, open I09, verify digital pass QR rendering and status timeline updates when shop transitions order status.
  * *Reported Result:* Passed. Digital pass displayed correctly with zero latency.
* **Functional Test T06 (Customer Settings & Navigation):**
  * *Procedure:* Open I10, modify curbside vehicle instructions, toggle substitution rules, verify persistence via `GET /api/users/me`.
  * *Reported Result:* Passed. Persisted preferences successfully reloaded across sessions.
* **Usability Testing Metrics (UT-P04 Participant):**
  * Task T05 completion time: 27 seconds (Rating: 5/5, 0 errors).
  * Task T06 completion time: 39 seconds (Rating: 4/5, minor navigation refinement addressed).
