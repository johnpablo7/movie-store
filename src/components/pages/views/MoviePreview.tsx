import { useState, useEffect, FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import {
  getImageUrl,
  getMovieById,
  getRelatedMoviesById,
} from "../../../api/movies";
import { TMovie, TMovieSmall } from "../../../types/movie";

export const MoviePreview = () => {
  const [movie, setMovie] = useState<TMovie>();
  const [relatedMovies, setRelatedMovies] = useState<TMovieSmall[]>();
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieById(movieId).then((movie) => {
        setMovie(movie);
      });
    }
  }, [movieId]);

  // console.log(movie);

  useEffect(() => {
    if (movieId) {
      getRelatedMoviesById(movieId).then((movies) => {
        setRelatedMovies(movies);
      });
    }
  }, [movieId]);

  // console.log(movies);

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <MovieImage movie={movie} />
      <MovieDetails movie={movie} related={relatedMovies} />
    </main>
  );
};

type TMovieImageProps = {
  movie: TMovie;
};

const MovieImage: FC<TMovieImageProps> = ({ movie }) => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={getImageUrl(500, movie.poster_path)}
        alt="logo"
        className="object-cover rounded-b-2xl"
      />

      <div className="absolute top-0 right-0 m-3 p-2 bg-gradient-to-r from-gray-900 to-gray-700 opacity-80 rounded-full">
        <NavLink to="/">
          <RiArrowLeftLine className="text-2xl text-white" />
        </NavLink>
      </div>
    </div>
  );
};

type TMovieDetailsProps = {
  movie: TMovie;
  related?: TMovieSmall[];
};

const MovieDetails: FC<TMovieDetailsProps> = ({ movie, related }) => {
  return (
    <div>
      <div className="pt-4 px-4">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-white text-3xl font-semibold">
            {movie.original_title}
          </h1>
          <div className="flex items-center gap-2 pt-2">
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
            <p className="text-white font-semibold">{movie.vote_average}</p>
          </div>
        </div>
        <p className="text-lg text-gray-300 text-opacity-70">
          {movie.overview}
        </p>
        <div className="grid grid-cols-2 gap-1 py-2">
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-semibold p-1">
              Lanzamiento
            </h3>
            <p className="text-gray-300 text-opacity-70 text-lg">
              {movie.release_date}
            </p>
            <h3 className="flex items-center gap-2 text-white text-xl font-semibold p-1">
              Con más
            </h3>
            <div className="flex items-center gap-2 text-gray-300 text-opacity-70 text-lg">
              <SlLike />
              {movie.popularity}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-semibold p-1">Categoría</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="px-2 py-[2px] bg-gray-900 text-gray-300 text-opacity-70 rounded-xl"
                >
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pl-4">
        <h2 className="text-2xl text-white mb-2">Más Similares</h2>
        {/* Similares */}
        <div className="flex overflow-x-auto items-center w-auto scrollbar-hide gap-x-2">
          {related?.map((movie) => (
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
    </div>
  );
};
