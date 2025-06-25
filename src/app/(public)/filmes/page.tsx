"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/Home.module.css";
import MovieCard from "./components/MovieCard";

const movies = [
  {
    title: "O Senhor dos Anéis",
    description: "Uma jornada épica pela Terra Média.",
    image: "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg",
  },
  {
    title: "Matrix",
    description: "A realidade nem sempre é o que parece.",
    image: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
  },
  {
    title: "Interestelar",
    description: "Explorando os limites do espaço e do tempo.",
    image:
      "https://m.media-amazon.com/images/I/61AN97A3+fL._UF1000,1000_QL80_DpWeblab_.jpg",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const handleToggleFavorite = (title: string) => {
    setFavorites((prev) => {
      const newFavs = prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title];

      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return newFavs;
    });
  };

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🎬 Catálogo de Filmes</h1>
        <nav>
          <Link href="/favoritos">❤️ Favoritos</Link>
        </nav>
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main className={styles.grid}>
        {filtered.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            isFavorite={favorites.includes(movie.title)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </main>
    </div>
  );
}
