# Member 2 Integration: Ranathunga N R A H G (IT23776678)

**Project:** NearByBazaar (Local Grocery Pre-order and Pickup App for Small Shops)  
**Course Module:** IT3060 - Human Computer Interaction  
**Group:** WE_112  
**Role:** Member 2  
**Student ID:** IT23776678  
**Student Name:** Ranathunga N R A H G  

---

## 1. Workload Distribution & Scope

As documented in the official SLIIT Milestone 01–03 Final Report, Member 2 is responsible for **Cart & Order Summary Management**, **Intelligent Substitution & Alternative Suggestions**, and **Pickup Slot Scheduling & Atomic Checkout Reservation**, including full CRUD integration and usability/functional testing (T03–T04).

| Interface ID | Interface Name | Primary Function | Frontend Implementation | Backend REST Endpoint |
|---|---|---|---|---|
| **I06** | Cart / Order Summary | Real-time basket review & pricing breakdown | `client/src/app/customer/(tabs)/cart.tsx` | `GET /api/cart`<br>`PUT/DELETE /api/cart/items/:id` |
| **I07** | Substitution Approval | Review & approve same-category replacements | `client/src/app/customer/substitution.tsx` | `GET /api/cart/items/:id/replacements`<br>`POST /api/cart/items/:id/replacement` |
| **I08** | Pickup Time Selection | Schedule collection slot & atomic checkout | `client/src/app/customer/pickup-time.tsx` | `GET /api/cart/pickup-slots`<br>`POST /api/cart/checkout` |

---

## 2. Interface Details & Technical Architecture

### I06 – Cart / Order Summary
* **File:** `client/src/app/customer/(tabs)/cart.tsx`
* **Features:**
  * Real-time basket synchronization with MongoDB via `/api/cart`.
  * Inline item controls: Quantity stepping (+/-), single-item removal, and complete cart wipe.
  * Fee breakdown: Transparent item subtotal, store packing fee (e.g. LKR 50), and community discount (e.g. -LKR 40).
  * Counter settlement selection: Preferences for cash on counter or LANKAQR.

### I07 – Substitution Approval
* **File:** `client/src/app/customer/substitution.tsx`
* **Features:**
  * Side-by-side product comparison comparing out-of-stock items against staff-recommended alternatives within the same shop and category.
  * Automated price difference calculation displaying customer savings or additional cost.
  * Merchant commentary note ("Fresh shipment arrived this morning from Dambulla economic center").
  * Binary action buttons: "Approve Substitute" (replaces item in cart) or "Reject & Remove Item".

### I08 – Pickup Time Selection
* **File:** `client/src/app/customer/pickup-time.tsx`
* **Features:**
  * Date selector supporting *Today* and *Tomorrow* collection windows.
  * Dynamic 30-minute time slot chips categorized into Afternoon and Evening slots based on shop operating hours.
  * Live slot capacity indicators (e.g. *2 slots left*, *Available*, *Selected*).
  * Curbside instructions & vehicle details field (e.g. "White Alto car #WP-CAB-1234").
  * **Atomic Checkout Engine:** Places order with a client-generated `checkoutKey` to guarantee idempotency and reserve stock and slot capacity simultaneously without race conditions.

---

## 3. CRUD Operations Matrix

| Interface | CRUD Type | Operation Description | Data Model |
|---|---|---|---|
| **I06** | **Read / Update / Delete** | Fetch active cart contents; modify item quantities; delete cart items | `Cart`, `Product` |
| **I07** | **Read / Update** | Retrieve available same-category replacements; approve swap in cart | `Cart`, `Product` |
| **I08** | **Read / Create** | Query available pickup slots; create confirmed order with atomic reservation | `PickupSlot`, `Order` |

---

## 4. Verification & Testing Evidence (T03–T04)

* **Functional Test T03 (Cart and Order Review):**
  * *Procedure:* Add items from dashboard, open I06, adjust quantities (+/-), verify total recalculation including packing fee and discounts.
  * *Reported Result:* Passed. Basket items, quantities, and totals updated reactively.
* **Functional Test T04 (Substitution & Pickup Selection):**
  * *Procedure:* Trigger out-of-stock condition on an item, open I07, approve substitute, navigate to I08, select 5:00 PM slot, enter vehicle note, and complete checkout.
  * *Reported Result:* Passed. Substitution decision saved, slot capacity decremented, and order confirmed.
* **Usability Testing Metrics:**
  * **UT-P03 (Task T03):** Completion time: 32s | Errors: 0 | Rating: 5/5 (Cart review was clear and accurate).
  * **UT-P03 (Task T04):** Completion time: 46s | Errors: 1 | Rating: 4/5 (Substitution options clear; pickup confirmation highlighted for extra clarity).
