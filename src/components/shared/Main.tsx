import { RiPlayFill, RiAddFill, RiInformationLine } from "react-icons/ri";
import { Trending } from "./Trending";
import { Coming } from "./Coming";
import { CategoryList } from "./CategoryList";
import { useEffect, useState } from "react";
import { getImageUrl, getTrendingMovies } from "../../api/movies";
import { TMovieSmall } from "../../types/movie";
import { NavLink } from "react-router-dom";
import { FavoriteMovies } from "./FavoriteMovies";

export const Main = () => {
  const [movies, setMovies] = useState<TMovieSmall[]>();
  const [movie, setMovie] = useState<TMovieSmall>();

  useEffect(() => {
    getTrendingMovies().then(setMovies);
    getTrendingMovies().then((movies) => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const movie = movies[randomIndex];
      // console.log(randomIndex);

      setMovie(movie);
    });
  }, []);

  // console.log(movies);

  return (
    <main className="bg-black">
      <div className="md:hidden grid grid-cols-1">
        <div className="relative aspect-[5/7] xl:aspect-[4/3]">
          {movie && (
            <img
              src={getImageUrl(500, movie?.poster_path)}
              className="w-full h-full object-cover"
              loading="lazy"
              alt="img"
            />
          )}
        </div>
      </div>

      <div className="md:flex hidden overflow-x-auto items-center w-auto scrollbar-hide gap-x-2">
        {movies?.map((movie) => (
          <NavLink
            key={movie.id}
            to={"/movies/" + movie.id}
            className="w-1/5 flex-none"
          >
            <img
              src={getImageUrl(300, movie.poster_path)}
              className="object-cover object-center rounded-sm w-full"
              loading="lazy"
              alt="img"
            />
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center w-full py-2">
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <RiAddFill className="text-white text-2xl" />
            <p className="text-white text-xs">Mi lista</p>
          </div>
          <button className="flex items-center gap-1 bg-[#EBEBF5] px-6 py-2 rounded-sm text-xs mt-2">
            <RiPlayFill className="text-lg" />
            <p className="font-bold">Reproducir</p>
          </button>
          <div className="flex flex-col items-center gap-1">
            <RiInformationLine className="text-white text-2xl" />
            <p className="text-white text-xs">información</p>
          </div>
        </div>
      </div>

      <Trending />
      <Coming />
      <FavoriteMovies />
      <CategoryList />
    </main>
  );
};
