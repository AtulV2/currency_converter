# Currency Converter Pro

A modern, responsive, and easy-to-use currency converter web application built with React, Vite, and Tailwind CSS. It fetches live currency exchange rates to provide accurate conversions.

## 🚀 Live Demo
[View Live Project](https://atulv2.github.io/currency_converter/)

## ✨ Features
- **Live Exchange Rates:** Fetches real-time currency conversion rates using a reliable currency API.
- **Bi-directional Conversion:** Easily swap between the "From" and "To" currencies with a single click.
- **Modern UI:** Designed with Tailwind CSS featuring a glassmorphism effect and responsive layout.
- **Custom React Hooks:** Utilizes a custom hook (`useCurrencyInfo`) for clean and modular API data fetching.
- **Reusable Components:** Features modular components like `InputBox` for maintainability and scalability.

## 🛠️ Tech Stack
- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment:** GitHub Pages (`gh-pages`)

## ⚙️ Local Development

Follow these steps to run the project locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd 10_Currency_Convertor_Pro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be running at `http://localhost:5173`.

## 📦 Build and Deployment

### Build for Production
To create a production-ready build, run:
```bash
npm run build
```
The optimized output will be generated in the `dist` folder.

### Deploy to GitHub Pages
This project is configured to easily deploy to GitHub Pages. Run the following command to build and deploy simultaneously:
```bash
npm run deploy
```

## 📁 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── InputBox.jsx        # Reusable input component for currency and amount
│   │   └── index.js            # Component exports
│   ├── hooks/
│   │   └── useCurrencyInfo.js  # Custom hook to fetch live currency data
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & Tailwind configuration
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
└── eslint.config.js            # ESLint configuration
```

## 🌐 API Reference
This project uses the free [Currency API](https://github.com/fawazahmed0/currency-api) to fetch the latest exchange rates.
- Endpoint used: `https://latest.currency-api.pages.dev/v1/currencies/{currency}.json`
