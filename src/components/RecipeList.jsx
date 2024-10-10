// styles
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { projectFirestore } from '../firebase/config';
import Trashcan from '../assets/trashcan.svg';

// styles
import './RecipeList.scss';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className='recipe-list'>
      {recipes &&
        recipes.map(({ title, id, cookingTime, method }) => (
          <div className={`card ${mode}`} key={id}>
            <h3>{title}</h3>
            <p>{cookingTime} to make.</p>

            <div>{method.substring(0, 100)}...</div>

            <Link to={`/recipes/${id}`}>Cook This</Link>

            <img
              src={Trashcan}
              className='delete'
              onClick={() => handleClick(id)}
            />
          </div>
        ))}
    </div>
  );
}
