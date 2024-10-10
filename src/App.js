import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import ThemeSelector from './components/ThemeSelector';

// styles
import './App.scss';

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar></Navbar>
        <ThemeSelector></ThemeSelector>
        <Routes>
          <Route path='/' element={<Home></Home>} />

          <Route path='/create' element={<Create></Create>} />

          <Route path='/search' element={<Search></Search>} />

          <Route path='/recipes/:id' element={<Recipe></Recipe>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
