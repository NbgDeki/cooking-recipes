import { BrowserRouter, Switch, Route } from 'react-router-dom';

// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

// styles
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/create'>
            <Create></Create>
          </Route>

          <Route path='/search'>
            <Search></Search>
          </Route>

          <Route path='/recipes/:id'>
            <Recipe></Recipe>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
