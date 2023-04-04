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
    <div className="bg-black bg-opacity-70 w-full flex justify-between py-2 px-4">
      <NavLink to="/">
        <img src="/images/logo.png" className="w-8 h-8" alt="logo" />
      </NavLink>
      <div className="flex items-center gap-6">
        <NavLink to="/search">
          <RiSearchLine className="text-[#EBEBF5] opacity-60 text-2xl" />
        </NavLink>

        <NavLink to="/user">
          <FaUser className="text-[#EBEBF5] opacity-60 text-2xl" />
        </NavLink>
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
        "bg-black bg-opacity-70 w-full flex items-center justify-center pt-1 pb-2 transition",
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
          <p>Movies</p>
        </NavLink>

        <button
          onClick={toggleMenu}
          className="py-1 px-4 hover:text-white md:text-lg font-semibold flex items-center gap-2 text-[#EBEBF5] text-opacity-60"
        >
          <p>Categories</p>
          <GoTriangleDown className="text-[#EBEBF5]" />
          {showMobileMenu}
        </button>
      </ul>
    </nav>
  );
};
