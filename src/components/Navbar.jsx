// styles
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import SearchBar from './SearchBar';
import './Navbar.scss';

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link className='brand' to='/'>
          <h1>Cooking Ninja</h1>
        </Link>

        <SearchBar></SearchBar>
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
}
