import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Recipe.scss';

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className='recipe'>
      {error && <div className='error'>{error}</div>}

      {isPending && <div className='loading'>Loading</div>}

      {recipe && (
        <div>
          <h1>{recipe.title}</h1>
        </div>
      )}
    </div>
  );
}
