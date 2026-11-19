# Member 4 Integration: Karunarathne K M K T (IT23828698)

**Project:** NearByBazaar (Local Grocery Pre-order and Pickup App for Small Shops)  
**Course Module:** IT3060 - Human Computer Interaction  
**Group:** WE_112  
**Role:** Member 4  
**Student ID:** IT23828698  
**Student Name:** Karunarathne K M K T  

---

## 1. Workload Distribution & Scope

As documented in the official SLIIT Milestone 01–03 Final Report, Member 4 is responsible for **Shop Operational Dashboard Monitoring**, **Product Inventory & Stock Management**, **Incoming Order Processing & Counter Verification**, and **Performance Analytics & Report Exports**, including full CRUD integration and usability/functional testing (T07–T08).

| Interface ID | Interface Name | Primary Function | Frontend Implementation | Backend REST Endpoint |
|---|---|---|---|---|
| **I11** | Shop Owner Dashboard | Operational overview & quick toggles | `client/src/app/shop/(tabs)/dashboard.tsx` | `GET /api/shops/me`<br>`GET /api/orders/shop` |
| **I12** | Shop Product & Stock | Inventory CRUD, restock & toggles | `client/src/app/shop/(tabs)/stock.tsx`<br>`client/src/app/shop/product-form.tsx` | `GET /api/products/shop`<br>`POST/PUT/DELETE /api/products` |
| **I13** | Shop Order Management | Live fulfillment board & QR handoff | `client/src/app/shop/(tabs)/orders.tsx`<br>`client/src/app/shop/order-details.tsx` | `GET /api/orders/shop`<br>`PATCH /api/orders/:id/status`<br>`POST /api/orders/:id/verify-pickup` |
| **I14** | Shop Performance & Reports | Sales analytics, rush curves & exports | `client/src/app/shop/reports.tsx` | `GET /api/reports/shop`<br>`POST /api/reports/shop/exports` |

---

## 2. Interface Details & Technical Architecture

### I11 – Shop Owner Dashboard
* **File:** `client/src/app/shop/(tabs)/dashboard.tsx`
* **Features:**
  * Verified merchant status header with live store toggle switch (*Accepting Orders* ON/OFF).
  * **Today's Pulse KPI Cards:** Total Sales (LKR), Active Orders count, Fulfilled count, and Low Stock Alerts.
  * Live pre-order queue preview displaying urgent orders to pack.
  * Direct action shortcuts to inventory restock and order management.

### I12 – Shop Product & Stock Management
* **File:** `client/src/app/shop/(tabs)/stock.tsx`, `client/src/app/shop/product-form.tsx`
* **Features:**
  * Inventory search by item name or category with filter chips (*All Items*, *Low Stock*, *Out of Stock*).
  * Quick bulk update action restocked low-stock staples in one tap.
  * Item stock stepper (+/-) and instant *In Stock* toggle switch.
  * **Product Form Modal:** Supports image capture via `expo-image-picker`, category selection, price input, and initial stock quantities.

### I13 – Shop Order Management
* **File:** `client/src/app/shop/(tabs)/orders.tsx`, `client/src/app/shop/order-details.tsx`
* **Features:**
  * Tabbed status fulfillment pipeline: *New* (with unread badge) ➔ *Preparing* ➔ *Ready* ➔ *Completed*.
  * Incoming order cards displaying customer vehicle details, pickup window, and item checklist.
  * Substitution proposal workflow enabling the merchant to suggest alternatives post-checkout.
  * **Counter QR Scanner:** Uses `expo-camera` to scan the customer's Digital Pickup Pass, verifying order authenticity and marking handoff complete.

### I14 – Shop Performance & Reports
* **File:** `client/src/app/shop/reports.tsx`
* **Features:**
  * Timeframe analysis tabs (*Today*, *This Week*, *This Month*).
  * KPI summary metrics: Total Revenue, Orders Fulfilled, Average Pack Time (e.g. 6.4 mins), and Substitution Acceptance Rate (e.g. 80%).
  * Hourly Customer Order Rush visual distribution curve identifying peak shopping hours.
  * Payment method distribution breakdown (LANKAQR digital vs Cash on Counter).
  * Top Movers leaderboard highlighting best-selling inventory staples.
  * One-tap export generating CSV and PDF sales summaries.

---

## 3. CRUD Operations Matrix

| Interface | CRUD Type | Operation Description | Data Model |
|---|---|---|---|
| **I11** | **Read / Update** | Fetch shop KPIs and active orders; toggle store accepting status | `Shop`, `Order` |
| **I12** | **Create / Read / Update / Delete** | Full product CRUD: create items, read inventory, mutate stock/price, delete | `Product` |
| **I13** | **Read / Update** | Retrieve live order queue; update status pipeline; verify pickup code | `Order` |
| **I14** | **Read / Create / Delete** | Query sales metrics & rush curves; generate and delete export summaries | `ReportExport`, `Order` |

---

## 4. Verification & Testing Evidence (T07–T08)

* **Functional Test T07 (Shop Order Management):**
  * *Procedure:* Open I13 under merchant session, view newly incoming orders, accept order, advance status to 'Preparing', then 'Ready', and complete handoff via counter verification.
  * *Reported Result:* Passed. Status pipeline transitioned seamlessly and notified customer tracking.
* **Functional Test T08 (Product & Stock Management):**
  * *Procedure:* Open I12, edit product stock count, toggle availability switch, add a new grocery item via product form, and verify customer dashboard reflects changes.
  * *Reported Result:* Passed. Stock updates synchronized reactively across both customer and shop views.
* **Usability Testing Metrics:**
  * **UT-P05 (Task T07):** Completion time: 35s | Errors: 0 | Rating: 5/5 (Order processing and status buttons were easy to locate).
  * **UT-P05 (Task T08):** Completion time: 48s | Errors: 1 | Rating: 4/5 (Stock controls accessible; bulk update feedback confirmed clearly).
