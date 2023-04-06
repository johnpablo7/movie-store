import { NavLink } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { getImageUrl, getTrendingMoviesAll } from "../../../api/movies";
import { TMovieSmall } from "../../../types/movie";

export const Movies = () => {
  const [movies, setMovies] = useState<TMovieSmall[]>();

  useEffect(() => {
    getTrendingMoviesAll().then(setMovies);
  }, []);

  // console.log(movies);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <div className="flex items-center gap-4 pb-2 md:px-8 md:py-2">
        <NavLink to="/" className="top-0 left-0 py-4">
          <RiArrowLeftLine className="text-2xl text-white" />
        </NavLink>

        <h1 className="text-white text-2xl">All The Movies</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:px-8 md:py-2">
        {movies?.map((movie) => (
          <NavLink
            key={movie.id}
            to={"/movies/" + movie.id}
            className="flex-none"
          >
            <img
              src={getImageUrl(300, movie.poster_path)}
              className="object-cover object-center w-full h-full rounded-md"
              alt="img"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
