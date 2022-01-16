import {
  Link,
  Route,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";

import CastPage from "../../pages/CastPage";
import ReviewPage from "../../pages/ReviewPage";

const MovieInfo = (props) => {
  const { title, vote_average, release_date, overview, genres, poster_path } =
    props;

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
      return;
    }
    history.push("/movies");
  };

  const date = release_date.slice(0, 4);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="movie"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1>
                {title} ({date})
              </h1>
              <p>User Score {vote_average}</p>
            </li>
            <li>
              <h2>Overview</h2>
              <p>{overview}</p>
            </li>
            <li>
              <h2>Genres</h2>
              <p>{genres.name}</p>
            </li>
          </ul>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link
            to={{
              pathname: `/movies/${id}/cast`,
              state: {
                from: location.state?.from,
              },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `/movies/${id}/review`,
              state: {
                from: location.state?.from,
              },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Route path="/movies/:id/cast">
        <CastPage />
      </Route>
      <Route path="/movies/:id/review">
        <ReviewPage />
      </Route>
    </div>
  );
};

export default MovieInfo;