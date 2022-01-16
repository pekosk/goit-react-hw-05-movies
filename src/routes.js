import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
// const SearchPage = lazy(() => import("./pages/SearchPage"));
// const MoviePage = lazy(() => import("./pages/MoviePage"));

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage title="Trending Today" />
            </Route>
            {/* <Route exact path="/movies">
                <SearchPage />
            </Route>
            <Route path="/movies/:id">
                <MoviePage />
            </Route> */}
        </Switch>
    );
};

export default Routes;