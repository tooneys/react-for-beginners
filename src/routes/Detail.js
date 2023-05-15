import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = useCallback(async () => {
    const json = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    ).then((res) => res.json());

    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div
      style={{
        backgroundImage: `url(${movie.background_image_original})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <h2>Detail</h2>
      <hr />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title}></img>
          <h1>{movie.title}</h1>
          <div className="inline">
            Rating: <p>{movie.rating}</p>
          </div>
          <hr />
          <ul className="list-inline">
            {movie.genres.map((g) => (
              <li key={g} className="list-inline-item">
                {g}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
