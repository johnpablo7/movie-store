import { useState, useEffect, FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { getRelatedTvShowsById, getTvById } from "../../../api/tvs";
import { getImageUrl } from "../../../api/movies";
import { TTvShow, TTvShowSmall } from "../../../types/tv";

export const TvShowPreview = () => {
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

  // console.log(serie);

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
    <main className="flex flex-col md:grid md:grid-cols-2 w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <TvShowImage serie={serie} />
      <TvShowDetails serie={serie} />
      <div className="col-span-2">
        <TRelated related={relatedShows} />
      </div>
    </main>
  );
};

type TTvShowImageProps = {
  serie: TTvShow;
};

const TvShowImage: FC<TTvShowImageProps> = ({ serie }) => {
  return (
    <div className="relative flex items-center justify-center md:justify-end md:p-8">
      <img
        src={getImageUrl(500, serie.poster_path)}
        loading="lazy"
        className="object-cover rounded-b-2xl h-full"
        alt="img"
      />

      <div className="absolute top-0 md:top-5 right-0 md:right-[560px] m-3 p-2 bg-gradient-to-r from-gray-900 to-gray-700 opacity-80 rounded-full">
        <NavLink to="/">
          <RiArrowLeftLine className="text-2xl md:text-3xl text-white" />
        </NavLink>
      </div>
    </div>
  );
};

type TTvShowDetailsProps = {
  serie: TTvShow;
};

const TvShowDetails: FC<TTvShowDetailsProps> = ({ serie }) => {
  return (
    <div className="md:p-8">
      <div className="pt-4 px-4 md:p-0">
        <div className="flex items-center gap-4 mb-2 md:mb-8">
          <h1 className="text-white text-3xl font-semibold">
            {serie.original_name}
          </h1>
          <div className="flex items-center gap-2 pt-2">
            <img
              src="/images/star.png"
              loading="lazy"
              className="w-4 h-4"
              alt="img"
            />
            <p className="text-white font-semibold">{serie.vote_average}</p>
          </div>
        </div>
        <p className="text-lg md:text-xl md:leading-1 text-gray-300 text-opacity-70 md:w-[500px] md:mb-2">
          {serie.overview}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-1 py-2">
          <div className="flex flex-col items-center md:items-start md:mb-4">
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
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-xl font-semibold p-1 md:mb-2">
              Categoría
            </h3>
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
    </div>
  );
};

type TRelatedProps = {
  related?: TTvShowSmall[];
};

const TRelated: FC<TRelatedProps> = ({ related }) => {
  return (
    <div className="pl-4 md:px-8">
      <h2 className="text-2xl text-white mb-2 md:mb-4">Más Similares</h2>
      {/* Similares */}
      <div className="flex overflow-x-auto items-center w-auto scrollbar-hide gap-x-2">
        {related?.map((serie) => (
          <NavLink
            key={serie.id}
            to={"/series/" + serie.id}
            className="w-1/3 md:w-1/12 flex-none"
          >
            <img
              src={getImageUrl(300, serie.poster_path)}
              className="object-cover object-center rounded-sm w-full"
              loading="lazy"
              alt="img"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
