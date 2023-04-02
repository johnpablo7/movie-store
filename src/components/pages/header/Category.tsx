import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { TTrendingMovie } from "../../../types/movie";
import { getImageUrl, getMovieByCategory } from "../../../api/movies";

export const Category = () => {
  const [category, setCategory] = useState<TTrendingMovie[]>();
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getMovieByCategory(categoryId).then((category) => {
        setCategory(category);
      });
    }
  }, [categoryId]);

  console.log(category);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <div className="flex items-center gap-4 pb-2">
        <NavLink to="/" className="top-0 left-0 py-4">
          <RiArrowLeftLine className="text-2xl text-white" />
        </NavLink>
        <div className="text-white text-2xl">Acción</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {category?.map((cat) => (
          <NavLink key={cat.id} to={"/movies/" + cat.id} className="flex-none">
            <img
              src={getImageUrl(300, cat.poster_path)}
              className="object-cover object-center w-full h-full rounded-md"
              alt="img"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
