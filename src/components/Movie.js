import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="col">
      <div className="card" style={{ width: '23rem' }}>
        <img src={coverImg} alt={title} className="card-img-top"></img>
        <div className="card-body">
          <h2 className="card-title">
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p className="card-text">
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <ul className="list-group">
            {genres.map((g) => (
              <li key={g} className="list-group-item">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
