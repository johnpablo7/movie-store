import { NavLink } from "react-router-dom";
import { buttons } from "../../data/buttons";
import { RiSearchLine } from "react-icons/ri";
import NotificationIcon from "../../Svg/NotificationIcon";
import clsx from "clsx";

export const Header = () => {
  return (
    <div className="bg-woodsmoke sticky top-0 lg:pl-64 2xl:pl-72 w-full flex-col md:flex-row flex items-center justify-between gap-6 lg:pt-5 p-6 md:p-6 lg:p-5 2xl:p-7 z-40">
      <nav className="order-1 md:order-none w-full lg:pl-5 2xl:pl-0">
        <ul className="flex items-center justify-self-start gap-3">
          {buttons.map((list) => (
            <li key={list.id}>
              <NavLink
                to={list.path}
                className={({ isActive }) =>
                  clsx(
                    "py-2 px-4 rounded-full md:text-lg",
                    isActive
                      ? "bg-[#0061FD] text-white"
                      : "text-[#EBEBF5] opacity-60"
                  )
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-center md:justify-end gap-8 w-full">
        <div>
          <NotificationIcon className="text-[#EBEBF5] opacity-60 fill-current" />
        </div>
        <div>
          <form action="" className="relative">
            <RiSearchLine className="absolute text-[#EBEBF5] opacity-60 top-2 lg:top-3 2xl:top-4 left-4 text-xl lg:text-lg" />
            <input
              type="text"
              className="bg-[#202020] outline-none py-1 lg:py-2 2xl:py-3 pl-12 pr-4 rounded-3xl text-lg lg:text-lg text-[#EBEBF5]"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
