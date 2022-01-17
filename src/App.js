import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';

import './App.css';

const HomePage = lazy(() =>
  import(
    './pages/HomePage'
  ),
);
const MoviesPage = lazy(() =>
  import(
    './pages/MoviesPage'
    ),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage'
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage'
  ),
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>...loading. Please, wait!</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
