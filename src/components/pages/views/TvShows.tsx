import { NavLink } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../../api/movies";
import { TTvShowSmall } from "../../../types/tv";
import { getTrendingTvShows } from "../../../api/tvs";

export const TvShows = () => {
  const [shows, setShows] = useState<TTvShowSmall[]>();

  useEffect(() => {
    getTrendingTvShows().then(setShows);
  }, []);

  // console.log(shows);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <div className="flex items-center gap-4 pb-2 md:px-8 md:py-2">
        <NavLink to="/" className="top-0 left-0 py-4">
          <RiArrowLeftLine className="text-2xl text-white" />
        </NavLink>

        <h1 className="text-white text-2xl">TVSeries</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:px-8 md:py-2">
        {shows?.map((show) => (
          <NavLink
            key={show.id}
            to={"/series/" + show.id}
            className="flex-none"
          >
            <img
              src={getImageUrl(300, show.poster_path)}
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
