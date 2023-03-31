import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTrendingMoviesPreview, getImageUrl } from "../../api/movies";
import { TMovie } from "../../types/movie";
import LeftArrowIcon from "../../Svg/LeftArrowIcon";
import RightArrowIcon from "../../Svg/RightArrowIcon";

export const Trending = () => {
  const [movies, setMovies] = useState<TMovie[]>();

  useEffect(() => {
    getTrendingMoviesPreview().then((movies) => {
      setMovies(movies);
    });
  }, []);

  // console.log(movies);

  return (
    <div className="p-4 drop-shadow-2xl 2xl:py-10">
      <div className="flex items-center justify-between pb-2 md:px-0 md:mb-5 2xl:mb-8">
        <div className="text-[#EBEBF5] text-lg md:text-2xl font-semibold">
          Tendencias
        </div>
        <div className="items-center hidden md:hidden lg:flex gap-4">
          <LeftArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
          <RightArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
        </div>
      </div>

      {/* Tendencias */}
      <div className="overflow-x-auto">
        <div className="flex items-center w-auto scrollbar-hide gap-x-2">
          {movies?.map((movie) => (
            <NavLink key={movie.id} to="/" className="w-1/3 flex-none">
              <img
                src={getImageUrl(300, movie.poster_path)}
                className="object-cover object-center rounded-sm"
                alt="img"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
