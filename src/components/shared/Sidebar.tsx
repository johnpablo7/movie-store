import { useAtom } from "jotai";
import { mobileMenuAtom } from "../../atoms/sidebar";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { links, linksbottom } from "../../data/store";
import LogoIcon from "../../Svg/LogoIcon";
import profile from "../../assets/profile.svg";
import clsx from "clsx";

export const Sidebar = () => {
  const [showMobileMenu, setShowMobileMenu] = useAtom(mobileMenuAtom);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div
      className={clsx(
        // Mobile
        `bg-woodsmoke fixed top-0 w-64 h-full flex flex-col border-r border-[#38383A] px-4 py-7 md:py-8 2xl:py-10 transition-all z-50`,
        showMobileMenu ? "left-0" : "-left-full",
        // Destok
        `lg:left-0`
      )}
    >
      <div className="flex items-center justify-center mb-6 md:mb-8">
        <NavLink to="/" className="cursor-pointer">
          <LogoIcon />
        </NavLink>
      </div>

      <div className="flex flex-col flex-1 items-center justify-between">
        <div className="w-full">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="text-[#EBEBF5] opacity-60 flex items-center gap-4 hover:bg-[#202020] hover:text-white text-xl py-4 px-8 rounded-xl hover:opacity-100 fill-current"
                >
                  <div>{link.icon}</div>
                  <p>{link.name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <ul>
            {linksbottom.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="text-[#EBEBF5] opacity-60 flex items-center gap-4 hover:bg-[#202020] hover:text-white text-xl py-4 px-8 rounded-xl hover:opacity-100 fill-current"
                >
                  <div>{link.icon}</div>
                  <p>{link.name}</p>
                </NavLink>
              </li>
            ))}
            <NavLink
              to="/perfil"
              className="text-[#EBEBF5] opacity-60 flex items-center gap-4 hover:bg-[#202020] hover:text-white text-xl py-4 px-8 rounded-xl hover:opacity-100 fill-current"
            >
              <img src={profile} />
              <p className="text-xl">Tung Tran</p>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* Btn menu movil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden bg-[#0061FD] text-white fixed bottom-8 right-6 p-2 text-lg rounded-full z-50"
      >
        {showMobileMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </div>
  );
};
