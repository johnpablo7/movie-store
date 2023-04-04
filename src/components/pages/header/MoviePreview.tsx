import { useState, useEffect, FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { getImageUrl, getMovieById } from "../../../api/movies";
import { TMovie } from "../../../types/movie";

export const MoviePreview = () => {
  const [movie, setMovie] = useState<TMovie>();
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieById(movieId).then((movie) => {
        setMovie(movie);
      });
    }
  }, [movieId]);

  // console.log(movie);

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <MovieImage movie={movie} />
      <MovieDetails movie={movie} />
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
};

const MovieDetails: FC<TMovieDetailsProps> = ({ movie }) => {
  return (
    <div className="p-4">
      <h2 className="text-center text-white text-2xl font-semibold">
        {movie.original_title}
      </h2>
      <div className="grid grid-cols-2 gap-1 py-2">
        <div className="flex flex-col items-center">
          <p className="text-white font-semibold p-1">Lanzamiento</p>
          <p className="text-gray-300 text-opacity-70 text-sm">
            {movie.release_date}
          </p>
          <p className="flex items-center gap-2 text-white font-semibold p-1">
            Con más <SlLike />
          </p>
          <p className="text-gray-300 text-opacity-70 text-sm">
            {movie.popularity}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white font-semibold p-1">Categoría</p>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <p
                key={genre.id}
                className="text-sm px-2 py-[2px] bg-gray-900 text-gray-300 text-opacity-70 rounded-xl"
              >
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl text-white font-semibold mb-2">Sinopsis</h3>
        <p className="text-gray-300 text-opacity-70">{movie.overview}</p>
      </div>
    </div>
  );
};
