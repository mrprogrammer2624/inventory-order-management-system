# Inventory Management System

## Overview

This Inventory Management System is a web application built with React, TypeScript, and Vite. It allows users to manage products, track inventory levels, and handle customer orders. The system has two types of users: customers and admins. Customers can view products, place orders, and check their order history, while admins can manage the inventory by adding, updating, and deleting products.

## Features

- User authentication (Login/Sign-up) for customers and admins
- Product catalog with shopping cart functionality
- Order history for customers
- Admin panel for inventory management
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- JavaScript
- Vite
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/mrprogrammer2624/inventory-order-management-system
   cd inventory-order-management-system
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   VITE_API_URL=
   ```

## Running the Application

To start the development server:

```
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
inventory-management-system/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │      └── index.jsx
│   │   ├── index.jsx
│   ├── Layouts/
│   │   ├── AuthLayout/
│   │   │      └── index.jsx
│   │   ├── MainLayout/
│   │   │      └── index.jsx
│   │   ├── AdminLayout/
│   │   │      └── index.jsx
│   │   ├── index.jsx
│   ├── Pages/
│   │   ├── Admin/
│   │   │     ├── Home/
│   │   │     │     ├── index.jsx
│   │   │     ├── index.jsx
│   │   ├── Auth/
│   │   │     ├── Admin/
│   │   │     │    └── SignUp/
│   │   │     │          └── index.jsx
│   │   │     ├── Login/
│   │   │     │      └── index.jsx
│   │   │     ├── SignUp/
│   │   │     │      └── index.jsx
│   │   │     ├── index.jsx
│   │   ├── User/
│   │   │    ├── Home/
│   │   │    │      └── index.jsx
│   │   │    ├── ProductCatalog/
│   │   │    │      └── index.jsx
│   │   │    ├── OrderHistory/
│   │   │    │      └── index.jsx
│   │   │    ├── index.jsx
│   │   ├── index.jsx
│   ├── providers/
│   │   │    └── ToasterProvider.jsx
│   ├── Routes/
│   │   │  └── index.jsx
│   ├── Slice/
│   │   │  ├── authSlice/
│   │   │  │      └── index.jsx
│   │   │  ├── orderSlice/
│   │   │  │      └── index.jsx
│   │   │  ├── productSlice/
│   │   │  │      └── index.jsx
│   │   │  ├── index.jsx
│   ├── Store
│   │   └── index.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
├── jsconfig.json
├── vite.config.js
└── tailwind.config.js
```

## Usage

1. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).
2. Sign up for a new account or log in with existing credentials.
3. Explore the product catalog, add items to your cart, and place orders.
4. View your order history in the Orders section.
5. If you're an admin, access the Admin Panel to manage products and inventory.

## License

This project is licensed under the MIT License.
