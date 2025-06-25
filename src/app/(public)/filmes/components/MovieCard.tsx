import styles from '../styles/Home.module.css';

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className={styles.card}>
      <img src={movie.image} alt={movie.title} />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <button
          className={styles.favoriteButton}
          onClick={() => onToggleFavorite(movie.title)}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}
