# GulfTP Get a Search - Benchmarking Portal

This project is a high-fidelity replication of the GulfTP "Get a Search" form, complete with a Stripe-powered payment gateway and a Node.js backend.

## 🚀 Features
- **Searchable Industry Dropdown**: Integrated with Select2 and a database of hundreds of benchmarking categories.
- **Modern UI**: Perfectly matches the GulfTP design system (Bootstrap 5 + Poppins).
- **Stripe Integration**: Secure payment flow for the $750 benchmarking fee.
- **Node.js Backend**: Express server to securely manage Stripe Checkout Sessions.

## 🛠️ Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed.
- A [Stripe Account](https://stripe.com/) (for API keys).

### 2. Backend Configuration
1. Open `.env` in the root directory.
2. Replace `sk_test_your_secret_key_here` with your **Stripe Secret Key**.
3. (Optional) Adjust the `PORT` if 5000 is occupied.

### 3. Frontend Configuration
1. Open `index.html`.
2. Locate `const STRIPE_PUBLISHABLE_KEY`.
3. Replace the placeholder with your **Stripe Publishable Key**.

### 4. Installation & Running
Run the following commands in your terminal:

```bash
# Install dependencies
npm install

# Start the payment server
npm start
```

### 5. Launch
- Open `index.html` in your browser (use a local server like "Live Server" for best results).
- The form will now communicate with `http://localhost:5000` to process payments.

## 📁 Project Structure
- `index.html`: Main form and design.
- `server.js`: Node.js payment backend.
- `success.html`: Post-payment confirmation page.
- `.env`: Sensitive configuration (do not commit real keys!).
- `.gitignore`: Prevents sensitive files from being pushed to GitHub.
