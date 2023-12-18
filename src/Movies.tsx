import axios from "axios";
import { NavLink } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

type Movie = {
  title: string;
  genre: string;
  releaseYear: string;
  language: string;
  comments: { user: string }[];
  id: number;
};



const Movies = () => {
  const queryClient = new QueryClient();
  const { data: movies} = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axios
        .get<Movie[]>("http://localhost:3000/movies")
        .then(({ data }) => {
          return data;
        });
    },
  });

  const {mutateAsync: deleteMovie} = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`http://localhost:3000/movies/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"]});
    },
});

  return (
    <div className="content-wrapper">
      <div className="card-wrapper">
        {movies?.map(({ title, genre, releaseYear, language, id }) => (
          <div key={id} className="card">
            <NavLink to={`/movies/${id}`}>
              <h2>{title}</h2>
            </NavLink>
            <h4>{genre}</h4>
            <h4>{releaseYear}</h4>
            <h4>{language}</h4>
            <button onClick={() => {deleteMovie(id)}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
