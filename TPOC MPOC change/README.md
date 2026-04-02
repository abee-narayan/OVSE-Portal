# OVSE Portal 2.0 - Technical Documentation & Walkthrough

Welcome to the **OVSE Portal 2.0**, a modern, comprehensive 360-degree operating framework for the Aadhaar App VC Sharing ecosystem. This project replaces manual PDF processing with an automated digital lifecycle.

## 🌟 Key Features

### 1. Modern Dashboard (Orange Theme)
- **High-Impact UI**: A premium, warm-themed dashboard built for clarity and speed.
- **Advanced Sidebar**: 
  - Full navigation for Agreements, QR Codes, and Consents.
  - **Dev Console** integration and **Organization Settings**.
  - **Credits Widget**: Real-time tracking of portal credits.
  - **User Profile**: Integrated profile status and logout.

### 2. Application Wizard (Vertical Stepper)
- **7-Step Lifecycle**: Fully digitizes the UIDAI compliance requirements.
  1. **Basic Information**: Organization and POC details.
  2. **Statutory Information**: PAN, GST, and CIN management.
  3. **Use-Case Information**: Business domain and benefits.
  4. **Technical Infrastructure**: Domains, URLs, and Certificates.
  5. **Authorized Personnel**: Multi-tier POC management.
  6. **Declaration**: Digital compliance undertaking.
  7. **Terms & Conditions**: Project MSA wrap-up.
- **Banner System**: "About OVSE Registration" guidance at every step.

### 3. Lead Generation & Demand Engine
- **EOI Portal**: Public-facing lead intake (`/lead-intake`).
- **Readiness Scoring**: Automated calculation based on business readiness and volume.

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (Orange/Slate Theme)
- **UI Components**: Shadcn/UI + Lucide Icons
- **Forms**: React Hook Form + Zod Validation
- **Charts**: Recharts for performance visualization

## 🚀 Getting Started

1.  **Installation**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 🔍 How to Verify the Implementation

### Dashboard & Navigation
1.  Navigate to `/dashboard`.
2.  Observe the **Sidebar** bottom section (Credits 10, Settings, Profile).
3.  Check the **Checklist** and **Visualizations** on the main screen.

### Application Flow
1.  Go to `/application/new`.
2.  Verify the **Vertical Stepper** on the left tracks your progress.
3.  Fill in the "Entity Category" using the new grid selector.

### Hydration & Stability
- The hydration issues (`aria-controls` mismatches) have been resolved via mount-checks in the `DashboardLayout`, ensuring a crash-free experience on mobile and desktop.
