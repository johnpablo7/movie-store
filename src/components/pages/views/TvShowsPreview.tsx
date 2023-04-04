import { useState, useEffect, FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { getImageUrl } from "../../../api/movies";
import { TTvShow, TTvShowSmall } from "../../../types/tv";
import { getRelatedTvShowsById, getTvById } from "../../../api/tvs";

export const TvShowsPreview = () => {
  const [serie, setSerie] = useState<TTvShow>();
  const [relatedShows, setRelatedShows] = useState<TTvShowSmall[]>();
  const { serieId } = useParams();

  useEffect(() => {
    if (serieId) {
      getTvById(serieId).then((serie) => {
        setSerie(serie);
      });
    }
  }, [serieId]);

  console.log(serie);

  useEffect(() => {
    if (serieId) {
      getRelatedTvShowsById(serieId).then((series) => {
        setRelatedShows(series);
      });
    }
  }, [serieId]);

  // console.log(series);

  if (!serie) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <TvShowImage serie={serie} />
      <TvShowDetails serie={serie} related={relatedShows} />
    </main>
  );
};

type TTvShowImageProps = {
  serie: TTvShow;
};

const TvShowImage: FC<TTvShowImageProps> = ({ serie }) => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={getImageUrl(500, serie.poster_path)}
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

type TTvShowDetailsProps = {
  serie: TTvShow;
  related?: TTvShowSmall[];
};

const TvShowDetails: FC<TTvShowDetailsProps> = ({ serie, related }) => {
  return (
    <div>
      <div className="pt-4 px-4">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-white text-3xl font-semibold">
            {serie.original_name}
          </h1>
          <div className="flex items-center gap-2 pt-2">
            <img src="/images/star.png" alt="star" className="w-4 h-4" />
            <p className="text-white font-semibold">{serie.vote_average}</p>
          </div>
        </div>
        <p className="text-lg text-gray-300 text-opacity-70">
          {serie.overview}
        </p>
        <div className="grid grid-cols-2 gap-1 py-2">
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-semibold p-1">
              Lanzamiento
            </h3>
            <p className="text-gray-300 text-opacity-70 text-lg">
              {serie.first_air_date}
            </p>
            <h3 className="flex items-center gap-2 text-white text-xl font-semibold p-1">
              Con más
            </h3>
            <div className="flex items-center gap-2 text-gray-300 text-opacity-70 text-lg">
              <SlLike />
              {serie.popularity}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-semibold p-1">Categoría</h3>
            <div className="flex flex-wrap gap-2">
              {serie.genres.map((genre) => (
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
          {related?.map((serie) => (
            <NavLink
              key={serie.id}
              to={"/series/" + serie.id}
              className="w-1/3 flex-none"
            >
              <img
                src={getImageUrl(300, serie.poster_path)}
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
