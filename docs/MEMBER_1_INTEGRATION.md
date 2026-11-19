# Member 1 Integration: Karunarathne W K S R (IT23772786)

**Project:** NearByBazaar (Local Grocery Pre-order and Pickup App for Small Shops)  
**Course Module:** IT3060 - Human Computer Interaction  
**Group:** WE_112  
**Role:** Member 1  
**Student ID:** IT23772786  
**Student Name:** Karunarathne W K S R  

---

## 1. Workload Distribution & Scope

As documented in the official SLIIT Milestone 01–03 Final Report, Member 1 is responsible for **Customer Authentication**, **Account Registration**, **Product Discovery & Category Browsing**, and **Product Selection & Quantity Configuration**, including full CRUD integration and usability/functional testing (T01–T02).

| Interface ID | Interface Name | Primary Function | Frontend Implementation | Backend REST Endpoint |
|---|---|---|---|---|
| **I01** | Login | Customer and shop authentication | `client/src/app/(auth)/login.tsx` | `POST /api/auth/login`<br>`GET /api/auth/me` |
| **I02** | Customer Account Creation | Customer registration & area selection | `client/src/app/(auth)/customer-signup.tsx` | `POST /api/auth/register/customer` |
| **I04** | Customer Dashboard | Grocery search, category browsing | `client/src/app/customer/(tabs)/dashboard.tsx` | `GET /api/shops`<br>`GET /api/products` |
| **I05** | Product Details Page | Quantity selector & stock visibility | `client/src/app/customer/product-details.tsx`<br>`client/src/app/customer/product/[id].tsx` | `GET /api/products/:id`<br>`PUT /api/cart/items/:productId` |

---

## 2. Interface Details & Technical Architecture

### I01 – Login
* **File:** `client/src/app/(auth)/login.tsx`
* **Features:**
  * Clean credentials authentication with email format and password validation.
  * Remember Me persistence using hardware-backed keystores via `expo-secure-store`.
  * Role-based post-login redirection routing customers to `/customer/dashboard` and merchants to `/shop/dashboard`.
  * Social login integration mockups (Google & Apple authentication options).

### I02 – Customer Account Creation
* **File:** `client/src/app/(auth)/customer-signup.tsx`
* **Features:**
  * Straightforward registration capturing Full Name, Email Address, and Neighborhood/Delivery Area (e.g. Colombo 03, Kandy).
  * Email verification trigger dispatching verification codes to the user.
  * Direct switch links to Shop Owner registration and existing login flows.

### I04 – Customer Dashboard
* **File:** `client/src/app/customer/(tabs)/dashboard.tsx`
* **Features:**
  * Selected shop card allowing customers to choose their preferred neighborhood store.
  * Instant search bar with category filters (Fresh Produce, Dairy, Pulses, Grains, Snacks).
  * Filter pills for *In Stock Only*, *Special Offers*, and *Fast Pack*.
  * Responsive product grid displaying thumbnails, unit prices, and direct "+ Add to Cart" buttons.

### I05 – Product Details Page
* **File:** `client/src/app/customer/product-details.tsx` / `client/src/app/customer/product/[id].tsx`
* **Features:**
  * High-resolution product showcase imagery with shop identity badge.
  * Live stock indicator badge showing units remaining (e.g. *15 units left*).
  * Interactive quantity counter with automatic subtotal calculation.
  * One-tap add to basket preserving substitution preferences.

---

## 3. CRUD Operations Matrix

| Interface | CRUD Type | Operation Description | Data Model |
|---|---|---|---|
| **I01** | **Read** | User account credential validation and session retrieval | `User` |
| **I02** | **Create / Read** | Create new customer account; verify email existence | `User` |
| **I04** | **Read / Update** | Fetch active shops & product lists; update selected shop filter | `Shop`, `Product` |
| **I05** | **Read / Create** | Fetch product specifications; create/update customer cart item | `Product`, `Cart` |

---

## 4. Verification & Testing Evidence (T01–T02)

* **Functional Test T01 (Customer Account Access):**
  * *Procedure:* Open I01, test login with valid/invalid credentials, verify role redirection and token storage in SecureStore. Open I02 and verify registration form validation.
  * *Reported Result:* Passed. Authenticated tokens persisted successfully; invalid passwords properly rejected.
* **Functional Test T02 (Product Search & Selection):**
  * *Procedure:* Open I04, search for items by name, filter by category ('Dairy', 'Vegetables'), select an item to open I05, configure quantity, and verify subtotal accuracy.
  * *Reported Result:* Passed. Category filter displayed matching items instantly with accurate pricing.
* **Usability Testing Metrics:**
  * **UT-P01 (Task T01):** Completion time: 24s | Errors: 0 | Rating: 5/5 (Account access was straightforward with clear options).
  * **UT-P02 (Task T02):** Completion time: 28s | Errors: 0 | Rating: 5/5 (Search, categories, and quantity counters were intuitive).
