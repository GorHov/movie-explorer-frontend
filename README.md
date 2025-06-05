# 🎬 Movie Explorer Frontend

This is the frontend client for the **Movie Explorer** application, built with React and styled using TailwindCSS.

## 📦 Tech Stack
- **React** (with Vite)
- **React Router DOM**
- **Zustand** for state management
- **TailwindCSS**
- **Axios** for HTTP requests

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Yarn

### Setup

```bash
cd movie-explorer-frontend
yarn install
yarn dev
```

Frontend runs at `http://localhost:5173`.

## 📁 Structure

```
movie-explorer-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layout/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
```

## ✨ Features
- Movie search using TMDB API
- View movie details
- User notes for each movie
- Responsive UI with TailwindCSS

## 🧠 Technical Notes
- Zustand used for simple and scalable state management
- Axios used for consistency in API calls

## 🔮 Future Improvements
- Add authentication
- Save notes persistently using backend storage
- Pagination and filtering
- Add unit & integration testing
- TypeScript migration if time allows