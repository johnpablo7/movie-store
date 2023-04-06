import { useState, useEffect } from "react";
import { TMovieSmall } from "../../types/movie";
import { getImageUrl, getUpComingMovies } from "../../api/movies";
import { NavLink } from "react-router-dom";

export const Coming = () => {
  const [movies, setMovies] = useState<TMovieSmall[]>();

  useEffect(() => {
    getUpComingMovies().then(setMovies);
  }, []);

  // console.log(movies);

  return (
    <div className="pl-4 md:pl-12">
      {/* API upcoming */}
      <h3 className="text-[#EBEBF5] font-bold mb-2">Coming Soon</h3>

      {/* Coming */}
      <div className="flex overflow-x-auto items-center w-auto scrollbar-hide gap-x-2 md:gap-x-4">
        {movies?.map((movie) => (
          <NavLink
            key={movie.id}
            to={"/movies/" + movie.id}
            className="w-1/3 md:w-1/12 flex-none"
          >
            <img
              src={getImageUrl(300, movie.poster_path)}
              className="object-cover object-center rounded-sm w-full"
              alt="img"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
