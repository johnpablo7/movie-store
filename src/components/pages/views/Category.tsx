import { NavLink, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { TMovieSmall } from "../../../types/movie";
import { getImageUrl, getMovieByCategory } from "../../../api/movies";
import { TCategory } from "../../../types/category";
import { getCategoriesPreview } from "../../../api/categories";

export const Category = () => {
  const [movies, setMovies] = useState<TMovieSmall[]>();
  const [category, setCategory] = useState<TCategory>();
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getMovieByCategory(categoryId).then(setMovies);

      getCategoriesPreview().then((categories) => {
        const nameCategory = categories.find(
          (category) => category.id.toString() === categoryId
        );
        setCategory(nameCategory);
      });
    }
  }, [categoryId]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <div className="flex items-center gap-4 pb-2">
        <NavLink to="/" className="top-0 left-0 py-4">
          <RiArrowLeftLine className="text-2xl text-white" />
        </NavLink>

        <h1 className="text-white text-2xl">{category?.name}</h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {movies?.map((movie) => (
          <NavLink
            key={movie.id}
            to={"/movies/" + movie.id}
            className="flex-none"
          >
            <img
              src={getImageUrl(300, movie.poster_path)}
              className="object-cover object-center w-full h-full rounded-md"
              alt="img"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
