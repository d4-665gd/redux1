'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFavorite } from '../../store/favoritesSlice';

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div>
      <h1>Your Favorites</h1>
      <ul>
        {favorites.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={50} />
            <span>{product.title} - ${product.price}</span>
            <button onClick={() => dispatch(removeFavorite(product.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
