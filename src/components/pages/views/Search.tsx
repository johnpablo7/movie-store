import { NavLink } from "react-router-dom";
import { RiArrowLeftLine, RiSearchLine, RiMovieLine } from "react-icons/ri";
import { FormEventHandler, useState } from "react";
import { getImageUrl, getMovieBySearch } from "../../../api/movies";
import { TMovieSmall } from "../../../types/movie";

export const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<TMovieSmall[]>();

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    getMovieBySearch(query).then(setMovies);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 w-full min-h-screen flex flex-col gap-2 md:px-8 md:py-4">
      <NavLink to="/" className="pt-4 pb-3 px-3 md:px-5">
        <RiArrowLeftLine className="text-2xl md:text-4xl text-white" />
      </NavLink>

      <form onSubmit={onSubmit} className="relative md:px-4">
        <RiMovieLine className="absolute text-[#EBEBF5] opacity-60 top-3 left-4 md:left-8 text-2xl" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="bg-[#100d0d] outline-none w-full py-3 pl-12 pr-14 text-[#EBEBF5] text-lg md:rounded-2xl md:w-[410px]"
          placeholder="Buscar una serie, una peli, un gén..."
        />
        <button>
          <RiSearchLine className="absolute text-[#EBEBF5] opacity-60 top-3 left-96 text-2xl" />
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
        {movies?.map((movie) => (
          <NavLink
            key={movie.id}
            to={"/movies/" + movie.id}
            className="flex-none"
          >
            <img
              src={getImageUrl(300, movie.poster_path)}
              className="object-cover object-center w-full h-full rounded-md"
              loading="lazy"
              alt="img"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
