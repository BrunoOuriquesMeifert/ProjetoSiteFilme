"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/Home.module.css";
import MovieCard from "./components/MovieCard";
import { useFetcherFilmes } from "./hooks/useFetcherFilmes";


export default function Home() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const { data: movies } = useFetcherFilmes();


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

  const filtered = movies?.filter((movie) =>
    movie.titulo.toLowerCase().includes(search.toLowerCase())
  )??[];

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
            isFavorite={favorites.includes(movie.titulo)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </main>
    </div>
  );
}
