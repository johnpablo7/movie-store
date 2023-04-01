import { useState, useEffect, FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
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

  console.log(movie);

  if (!movie) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="bg-red-300">
      <MovieImage movie={movie} />
      <MovieDetails movie={movie} />
    </div>
  );
};

type TMovieImageProps = {
  movie: TMovie;
};

const MovieImage: FC<TMovieImageProps> = ({ movie }) => {
  return (
    <div className="grid grid-cols-1">
      <div className="relative aspect-[5/7]">
        <img
          src={getImageUrl(500, movie.poster_path)}
          alt="logo"
          className="w-full h-full object-cover"
        />

        <div className="absolute">
          <NavLink to="/">
            <RiArrowLeftLine className="text-2xl text-white" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

type TMovieDetailsProps = {
  movie: TMovie;
};

const MovieDetails: FC<TMovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <div>
        <div>
          <h3>Release Date</h3>
          <p>{movie.release_date}</p>
        </div>
        <div>
          <h3>Categorías</h3>
          <div>
            {movie.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3>Synopsis</h3>
        <p>{movie.overview}</p>
      </div>

      <div className="flex overflow-x-auto items-center w-auto scrollbar-hide gap-x-2">
        <h1>Películas similares</h1>
      </div>
    </div>
  );
};
