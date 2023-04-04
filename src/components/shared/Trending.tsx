import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTrendingMovies, getImageUrl } from "../../api/movies";
import { TMovieSmall } from "../../types/movie";
import LeftArrowIcon from "../../Svg/LeftArrowIcon";
import RightArrowIcon from "../../Svg/RightArrowIcon";

export const Trending = () => {
  const [movies, setMovies] = useState<TMovieSmall[]>();

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  // console.log(movies);

  return (
    <div className="pl-4 pt-2">
      <div className="flex items-center justify-between mb-2">
        {/* API trending */}
        <h3 className="text-[#EBEBF5] font-bold">Trending</h3>
        <div className="items-center hidden md:hidden lg:flex gap-4">
          <LeftArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
          <RightArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
        </div>
      </div>

      {/* Tendencias */}
      <div className="flex overflow-x-auto items-center w-auto scrollbar-hide gap-x-2">
        {movies?.map((movie) => (
          <NavLink
            key={movie.id}
            to={"/movies/" + movie.id}
            className="w-1/3 flex-none"
          >
            <img
              src={getImageUrl(300, movie.poster_path)}
              className="object-cover object-center rounded-sm w-full h-44"
              alt="img"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
