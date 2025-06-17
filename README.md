# 🛒 Shopping List Frontend

This is the frontend for the **Shopping List App**, built with **React**, **TypeScript**, and **Tailwind CSS**. It connects to a backend API to manage shopping items – allowing users to add, mark as purchased, and delete products.

---

## 🚀 Features

- Add new shopping list items
- Toggle items as purchased (strikethrough)
- Delete items from the list
- Responsive and clean UI with Tailwind CSS
- Uses `.env` file to manage API URLs

---

## 📦 Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **Vite** as the build tool (or CRA if applicable)
- State management using built-in `useState` and `useEffect`

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/akash-echo/shopping-list-frontend.git
cd shopping-list-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file based on the example:

```bash
cp example.env .env
```

Edit `.env` and update the backend API URL if needed:

```env
VITE_API_URL=http://localhost:2025/items
```

### 4. Run the development server

```bash
npm run dev
```

## 🌐 API Endpoints Used

| Method | Endpoint     | Description                 |
| ------ | ------------ | --------------------------- |
| GET    | `/items`     | Fetch all shopping items    |
| POST   | `/items`     | Create a new item           |
| PUT    | `/items/:id` | Update item "bought" status |
| DELETE | `/items/:id` | Delete an item              |

## 📦 Build

```bash
npm run build
```

## 👨‍💻 Author

### Akash Das

Github Profile: https://github.com/akash-echo/
