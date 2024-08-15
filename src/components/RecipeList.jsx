// styles
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// styles
import './RecipeList.scss';

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>;
  }

  return (
    <div className='recipe-list'>
      {recipes &&
        recipes.map(({ title, id, cookingTime, method }) => (
          <div className='card' key={id}>
            <h3>{title}</h3>
            <p>{cookingTime} to make.</p>

            <div>{method.substring(0, 100)}...</div>

            <Link to={`/recipes/${id}`}>Cook This</Link>
          </div>
        ))}
    </div>
  );
}
