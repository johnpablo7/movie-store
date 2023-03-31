import { NavLink } from "react-router-dom";
import { useScroll } from "../../hooks/scroll";
import { RiSearchLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import clsx from "clsx";
import { useAtom } from "jotai";
import { mobileMenuAtom } from "../../atoms/sidebar";

export const Header = () => {
  return (
    <div className="fixed top-0 w-full flex flex-col items-center z-40">
      <HeaderMain />
      <HeaderMenu />
    </div>
  );
};

const HeaderMain = () => {
  return (
    <div className="bg-woodsmoke bg-opacity-70 w-full flex items-center justify-center p-2 gap-4">
      <NavLink to="/">
        <img src="/images/logo.png" className="w-6 h-6" alt="logo" />
      </NavLink>
      <div>
        <form className="relative">
          <RiSearchLine className="absolute text-[#EBEBF5] opacity-60 top-2 lg:top-3 2xl:top-4 left-4 text-lg lg:text-lg" />
          <input
            type="text"
            className="bg-[#202020] outline-none py-1 lg:py-2 2xl:py-3 pl-12 pr-4 rounded-3xl text-[#EBEBF5]"
            placeholder="Search"
          />
        </form>
      </div>
      <div>
        <FaUser className="text-[#EBEBF5] opacity-60 text-xl" />
      </div>
    </div>
  );
};

const HeaderMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);
  const { directionY } = useScroll();

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav
      className={clsx(
        "bg-woodsmoke bg-opacity-60 w-full flex items-center justify-center p-1 transition",
        directionY === "bottom" ? "opacity-0" : "opacity-80"
      )}
    >
      <ul className="flex items-center gap-3">
        <NavLink
          to="/series"
          className={({ isActive }) =>
            clsx(
              "py-1 px-4 md:text-lg font-semibold",
              isActive ? "text-white" : "text-[#EBEBF5] opacity-60"
            )
          }
        >
          <p>Series</p>
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            clsx(
              "py-1 px-4 md:text-lg font-semibold",
              isActive ? "text-white" : "text-[#EBEBF5] opacity-60"
            )
          }
        >
          <p>Películas</p>
        </NavLink>

        <button
          onClick={toggleMenu}
          className="py-1 px-4 hover:text-white md:text-lg font-semibold flex items-center gap-2 text-[#EBEBF5] text-opacity-60"
        >
          <p>Categorías</p>
          <GoTriangleDown className="text-[#EBEBF5]" />
          {showMobileMenu}
        </button>
      </ul>
    </nav>
  );
};
