import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

interface Movie {
  imdbID: string;
  [key: string]: any;
}

function MoviePage() {
  const [data, setData] = useState<Movie[]>([]);
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=f3d5a13e";

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getMovieData();
    })();
  }, []);
  return (
    <ul>
      {data.map((curEl) => {
        return (
          <MovieCard
            key={curEl.imdbID}
            curMovie={{
              Poster: "",
              imdbID: "",
            }}
          />
        );
      })}
    </ul>
  );
}

export default MoviePage;
