import { useState, useEffect } from "react";
import { TMovieSmall } from "../../types/movie";
import { CgHeart } from "react-icons/cg";
import { getImageUrl, getUpComingMovies } from "../../api/movies";
import { NavLink } from "react-router-dom";

export const FavoriteMovies = () => {
  const [movies, setMovies] = useState<TMovieSmall[]>();

  useEffect(() => {
    getUpComingMovies().then(setMovies);
  }, []);

  // console.log(movies);

  return (
    <div className="pl-4 md:pl-12">
      {/* API upcoming */}
      <h3 className="text-[#EBEBF5] font-bold mb-2">Favoritos</h3>

      {/* Coming */}
      <div className="flex overflow-x-auto items-center w-auto scrollbar-hide gap-x-2 md:gap-x-4">
        {movies?.map((movie) => (
          <NavLink
            key={movie.id}
            to={"/movies/" + movie.id}
            className="relative w-1/3 md:w-1/12 flex-none"
          >
            <img
              src={getImageUrl(300, movie.poster_path)}
              className="object-cover object-center rounded-sm w-full"
              loading="lazy"
              alt="img"
            />
            <button className="rounded-full bg-white/40 absolute text-red-600 text-2xl p-[3px] top-1 right-1">
              <CgHeart />
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
