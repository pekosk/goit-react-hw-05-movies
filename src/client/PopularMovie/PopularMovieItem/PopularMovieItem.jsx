import { memo } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const PopularMovieItem = ({ title, id }) => {
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

PopularMovieItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PopularMovieItem);