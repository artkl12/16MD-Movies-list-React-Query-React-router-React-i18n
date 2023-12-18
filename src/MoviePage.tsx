import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Movie = {
  title: string;
  genre: string;
  releaseYear: string;
  language: string;
  comments: { user: string }[];
  id: number;
};

const MoviePage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState<Movie | undefined>();

  useEffect(() => {
    axios.get<Movie>(`http://localhost:3000/movies/${id}`).then(({ data }) => {
      setMovies(data);
    });
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <div>
      <h1>{movies.title}</h1>
      <h3>{movies.genre}</h3>
      <h3>{movies.releaseYear}</h3>
      <h3>{movies.language}</h3>
      <h5>Comments:</h5>
      <ul>
        {movies.comments.map((comment, index) => (
          <p key={index}>{comment.user}</p>
        ))}
      </ul>

      <div>
        <form className="form-wrapper">
          <textarea></textarea>
          <button type="submit">Leave comment</button>
        </form>
      </div>
    </div>
  );
};
export default MoviePage;
