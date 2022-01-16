import { useState, useEffect, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import SearchForm from "./SearchForm";
import SearchMovieItem from "./SearchMovieItem";
import { ApiService } from "../../shared/service";

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  modalOpen: false,
  modalProduct: {},
};

const SearchMovie = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchMovie = async () => {
      const searchParams = new URLSearchParams(location.search);
      const query = searchParams.get("query");
      try {
        const { data } = await ApiService.getSearch(query);
        setState(({ items }) => {
          return {
            ...state,
            items: [...items, ...data.results],
            error: null,
          };
        });
      } catch (error) {
        setState({
          error,
        });
      }
    };

    if (location.search) {
      fetchMovie();
    }
  }, [location.search]);

  const changeQuery = useCallback(({ query }) => {
    history.push({
      pathname: location.pathname,
      search: `query=${query}`,
    });
  }, []);

  const elements = state.items.map((item) => (
    <SearchMovieItem key={item.id} {...item} />
  ));
  const { error } = state;

  return (
    <div>
      <SearchForm onSubmit={changeQuery} />
      {error && <p>Не удалось загрузить товары</p>}
      {!error && <ul>{elements}</ul>}
    </div>
  );
};

export default SearchMovie;