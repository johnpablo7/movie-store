import { useAtom } from "jotai";
import { mobileMenuAtom } from "../../atoms/sidebar";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { getCategoriesPreview } from "../../api/categories";
import { TCategory } from "../../types/category";
import clsx from "clsx";

export const Categories = () => {
  const [categories, setCategories] = useState<TCategory[]>();
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);

  useEffect(() => {
    getCategoriesPreview().then((categories) => {
      setCategories(categories);
    });
  }, []);
  // console.log(categories);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div
      className={clsx(
        // Mobile
        `bg-black bg-opacity-90 fixed top-0 w-full h-full flex flex-col py-20 transition-all z-50`,
        showMobileMenu ? "left-0" : "-left-full",
        // Destok
        `lg:left-0`
      )}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-center text-white font-bold">Inicio</h3>
        {categories?.map((category) => (
          <NavLink key={category.id} to="/">
            <h3 className="text-white">{category.name}</h3>
          </NavLink>
        ))}
      </div>

      {/* Btn menu movil */}
      <button
        onClick={toggleMenu}
        className="bg-white text-black fixed bottom-4 right-40 p-4 text-xl rounded-full z-50"
      >
        {showMobileMenu ? <TfiClose /> : <RiMenu3Fill />}
      </button>
    </div>
  );
};
