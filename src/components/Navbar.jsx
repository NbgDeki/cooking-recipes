// styles
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link className='brand' to='/'>
          <h1>Cooking Ninja</h1>
        </Link>

        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
}
