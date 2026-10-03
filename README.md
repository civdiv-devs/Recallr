# Recallr

**Know when a recall affects a vehicle you own.**

Recallr is a web app that checks NHTSA recall data every day against the vehicles you've added and emails you when something affects one of them.

Add your vehicles. Recallr watches for recalls.

---

## MVP Scope

The MVP covers **vehicle recalls only**, for **US vehicles**.

Users can:

- Sign up and log in with email
- Add a vehicle by VIN, or enter year/make/model manually if they don't have the VIN
- See each vehicle's recall status at a glance
- View recall details and safety guidance from the official notice
- Receive an email when a new recall affects one of their vehicles

### Recall Statuses

| Status                    | Meaning                                                                     |
| ------------------------- | --------------------------------------------------------------------------- |
| **No open recalls**       | No open recalls found for this vehicle                                      |
| **Open recall**           | At least one open recall applies                                            |
| **Urgent — do not drive** | NHTSA has flagged the recall as "park it" or "park outside"                 |
| **Unverified**            | The match can't be confirmed (e.g., vehicle entered manually without a VIN) |

Recall checks run daily.

---

## How It Works

```text
   NHTSA Recall Data
          │
          ▼
  ┌───────────────────┐
  │   Daily check     │
  │   Fetch & process │
  └─────────┬─────────┘
            │
            ▼
  ┌───────────────────┐
  │   Your vehicles   │
  │   (VIN or manual) │
  └─────────┬─────────┘
            │
            ▼
  ┌───────────────────┐
  │   Recall match    │
  │   Assign status   │
  └─────────┬─────────┘
            │
            ▼
  ┌───────────────────┐
  │   Email alert     │
  └───────────────────┘
```

---

## Why We're Building This

Vehicle recall information is public, but finding it is on the owner. You have to remember to search, then work out whether a recall applies to your specific vehicle.

Recallr flips that around: tell it what you own, and it tells you when something affects it.

Vehicles are the starting point. The data model is meant to extend to other product categories later.

---

## Tech Stack

| Layer          | Choice                       |
| -------------- | ---------------------------- |
| Language       | TypeScript                   |
| Framework      | Next.js                      |
| Database       | TBD                          |
| ORM            | TBD                          |
| Authentication | Email (Google login planned) |
| Notifications  | Email                        |
| Hosting        | TBD (free tier)              |
| External data  | NHTSA                        |

---

## Data Source

Recall data comes from the **National Highway Traffic Safety Administration (NHTSA)**.

Recallr displays information from that source. It does not independently determine whether a vehicle is safe or whether a recall is valid. Always refer to the official recall notice and the manufacturer's instructions.

---

## Roadmap

**v1 — Vehicles (current)**
The MVP described above.

**v2 — Baby and children's products**
CPSC recall data.

**Later**

- FDA recalls, starting with medical devices, then food and drugs
- Household page for shared vehicles and products
- Google login
- Push notifications (once a mobile app exists)
- Previous-owner recall compliance lookup
- Recall news page

None of these are supported yet.

---

## Project Status

🚧 **MVP in active development.** Vehicles only.
