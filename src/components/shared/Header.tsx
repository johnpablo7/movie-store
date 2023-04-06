import { NavLink } from "react-router-dom";
import { useScroll } from "../../hooks/scroll";
import { RiSearchLine, RiArrowDownSFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import clsx from "clsx";
import { useAtom } from "jotai";
import { mobileMenuAtom } from "../../atoms/sidebar";
import { navbar } from "../../data/navbar";

export const Header = () => {
  return (
    <div className="fixed top-0 w-full flex flex-col items-center z-40">
      <HeaderMain />
      <HeaderMenu />
    </div>
  );
};

const HeaderMain = () => {
  const { directionY } = useScroll();

  return (
    <nav
      className={clsx(
        "bg-black bg-opacity-70 w-full flex justify-between py-2 px-4 md:py-5 md:px-12 transition",
        directionY === "bottom" ? "opacity-0" : "opacity-80"
      )}
    >
      <div className="flex items-center gap-8">
        <NavLink to="/">
          <img src="/images/logo.png" className="w-8 h-8" alt="logo" />
        </NavLink>
        <ul className="md:flex items-center justify-center gap-2 hidden">
          {navbar.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="hover:text-white hover:opacity-70 text-white opacity-100 transition p-2"
            >
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <NavLink to="/search">
          <RiSearchLine className="hover:text-white hover:opacity-70 text-white opacity-100 transition text-2xl" />
        </NavLink>

        <NavLink to="/user" className="flex items-center gap-1">
          <FaUser className="hover:text-white hover:opacity-70 text-white opacity-100 transition text-2xl" />
          <RiArrowDownSFill className="hover:text-white hover:opacity-70 text-white opacity-100 transition" />
        </NavLink>
      </div>
    </nav>
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
        "bg-black bg-opacity-70 w-full flex items-center justify-center pt-1 pb-2 transition md:hidden",
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
