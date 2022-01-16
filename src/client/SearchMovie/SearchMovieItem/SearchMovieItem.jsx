import { memo } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const SearchMovieItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <Link
      to={{
        pathname: `/movies/${id}`,
        state: {
          from: location,
        },
      }}
    >
      <li>
        <h4>{title}</h4>
      </li>
    </Link>
  );
};

export default memo(SearchMovieItem);

SearchMovieItem.propTypes = {
  title: PropTypes.string.isRequired,
};