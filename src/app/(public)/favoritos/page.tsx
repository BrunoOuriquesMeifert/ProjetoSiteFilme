"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../filmes/styles/Home.module.css";
import MovieCard from "../filmes/components/MovieCard";
  

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
    image: "https://m.media-amazon.com/images/I/61AN97A3+fL._UF1000,1000_QL80_DpWeblab_.jpg",
  },
];

export default function FavoritosPage() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const favoriteMovies = movies.filter((m) => favorites.includes(m.title));

  const handleToggleFavorite = (title: string) => {
    const newFavs = favorites.filter((t) => t !== title);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
    setFavorites(newFavs);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>⭐ Filmes Favoritos</h1>
        <nav>
          <Link href="/filmes">← Voltar ao catálogo</Link>
        </nav>
      </header>

      <main className={styles.grid}>
        {favoriteMovies.length === 0 ? (
          <p>Nenhum filme favoritado ainda.</p>
        ) : (
          favoriteMovies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              isFavorite={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))
        )}
      </main>
    </div>
  );
}
