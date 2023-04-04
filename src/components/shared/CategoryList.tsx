import { useAtom } from "jotai";
import { mobileMenuAtom } from "../../atoms/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { getCategoriesPreview } from "../../api/categories";
import { TCategory } from "../../types/category";
import clsx from "clsx";

export const CategoryList = () => {
  const [categories, setCategories] = useState<TCategory[]>();
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);
  const location = useLocation();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location, setShowMobileMenu]);

  useEffect(() => {
    getCategoriesPreview().then(setCategories);
  }, []);
  console.log(categories);

  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div
      className={clsx(
        // Mobile
        `bg-black bg-opacity-90 fixed w-full h-full flex flex-col py-20 transition-all overflow-scroll px-8 z-50`,
        showMobileMenu ? "top-0" : "top-full"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-7">
        <h3 className="text-center text-xl text-white font-semibold">Inicio</h3>

        {categories?.map((category) => (
          <NavLink key={category.id} to={"/category/" + category.id}>
            <p className="text-white opacity-80 text-xl font-semibold">
              {category.name}
            </p>
          </NavLink>
        ))}
      </div>

      {/* Btn menu movil */}
      {showMobileMenu ? (
        <button
          onClick={closeMenu}
          className="bg-white text-black fixed bottom-4 right-40 p-4 text-xl rounded-full z-50"
        >
          <TfiClose />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
