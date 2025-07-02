import { usefavoritoFilme } from '../hooks/useFavoritoFilmes';
import styles from '../styles/Home.module.css';

export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  
  const {mutateAsync: favoritar } = usefavoritoFilme();
  return (
    <div className={styles.card}>
      <img src={movie.imagemUrl} alt={movie.titulo} />
      <div className={styles.info}>
        <h3>{movie.titulo}</h3>
        <p>{movie.descricao}</p>
        <button
          className={styles.favoriteButton}
          onClick={() => favoritar({ id:movie.id })}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}
