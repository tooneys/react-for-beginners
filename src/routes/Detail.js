import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.data.movie);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h2>Detail</h2>
      <hr />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title}></img>
          <h1>{movie.title}</h1>
          <div>
            Rating: <p>{movie.rating}</p>
          </div>
          <hr />
          <label>장르</label>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
