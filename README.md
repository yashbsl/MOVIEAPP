# 🎬 MovieDB — Movie & TV Discovery App

MovieDB is a modern, responsive single-page application built with **React.js** that allows users to discover trending movies, TV shows, and actors using real-time data from the **TMDB API**.

The application focuses on a clean user experience, fast performance, responsive design, and a premium dark-themed interface inspired by modern streaming platforms.

## 🚀 Live Demo

🔗 **[MovieDB Live Demo](https://moviedb-pi-liart.vercel.app/)**

---

## ✨ Features

* 🔎 **Real-Time Smart Search**

  * Search for movies, TV shows, and actors instantly.
  * Displays dynamic suggestions with posters and titles.

* 🔥 **Trending Content**

  * Explore currently trending movies and TV shows.

* 🎬 **Now Playing**

  * Discover movies currently playing in theaters.

* ⭐ **Popular Movies & TV Shows**

  * Browse popular content fetched directly from TMDB.

* 🌙 **Premium Dark UI**

  * Modern dark-themed interface with a streaming-platform-inspired design.

* 📱 **Fully Responsive**

  * Optimized for desktop, tablet, and mobile devices.

* ⚡ **Fast Performance**

  * Built with Vite for a fast development experience and optimized production builds.

* 🧭 **Client-Side Routing**

  * Smooth navigation using React Router without unnecessary page reloads.

* ☁️ **Live Deployment**

  * Deployed and hosted on Vercel.

---

## 🛠️ Tech Stack

| Technology           | Purpose                                 |
| -------------------- | --------------------------------------- |
| **React.js**         | Frontend & component-based architecture |
| **Vite**             | Development server & build tool         |
| **Tailwind CSS**     | Styling & responsive design             |
| **React Router DOM** | Client-side routing                     |
| **Axios**            | API requests                            |
| **TMDB API**         | Movie, TV & actor data                  |
| **Vercel**           | Deployment & hosting                    |

---

## 📂 Project Structure

```text
MovieDB/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yashbsl/moviedb.git
```

### 2. Navigate to the Project

```bash
cd moviedb
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Replace `your_tmdb_api_key` with your TMDB API key.

### 5. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🔑 TMDB API

This project uses the **TMDB API** to retrieve real-time information about:

* Movies
* TV Shows
* Actors
* Trending content
* Popular content
* Now Playing movies
* Search results

You can get your API key from the **TMDB Developer Portal**.

---

## 🚀 Deployment

The application is deployed using **Vercel**.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Future Improvements

* [ ] Add user authentication
* [ ] Add movie watchlist functionality
* [ ] Add favorites
* [ ] Add movie trailers
* [ ] Add detailed movie/TV show pages
* [ ] Add genre-based filtering
* [ ] Add pagination / infinite scrolling
* [ ] Add ratings and reviews
* [ ] Improve loading states with skeleton screens

---

## 👨‍💻 Author

**Yash Bansal**

Built with ❤️ using React.js and TMDB API.

---

## 📄 Disclaimer

MovieDB uses the **TMDB API** to provide movie and TV show information. This project is created for educational and portfolio purposes.

**MovieDB is not affiliated with or endorsed by TMDB.**
