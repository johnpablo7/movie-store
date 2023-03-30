// import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { images } from "../../data/images";
import ArrowIcon from "../../Svg/ArrowIcon";
import { Slide } from "./Slide";

export const Main = () => {
  return (
    <main className="lg:pl-[275px] 2xl:pl-72 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-6 2xl:grid-cols-5 md:gap-2 2xl:gap-4">
        <div className="relative aspect-[3/2] xl:aspect-[2/1] md:col-span-5 2xl:col-span-4">
          <img
            src="/images/diablo.png"
            alt="img"
            className="w-full h-full object-cover md:rounded-xl xl:rounded-tr-none xl:rounded-br-none"
          />
          <h1 className="absolute top-4 left-4 md:left-10 lg:left-8 2xl:left-16 2xl:top-8 text-sm md:text-xl text-white font-bold">
            Diablo 3
          </h1>
          <div className="absolute left-0 bottom-0 p-5 md:px-10 md:py-10 lg:p-8 2xl:p-16 max-w-xs md:max-w-md lg:max-w-md 2xl:max-w-xl">
            <p className="text-gray-200 text-sm mb-2 font-semibold">Update</p>
            <h2 className="text-sm md:text-xl text-white font-extrabold mb-4 lg:mb-8">
              Season 28, Rites of Sanctuary, is now available
            </h2>
            <button className="flex items-center lg:gap-3 bg-[#0061FD] text-white p-1 md:py-2 md:px-4 lg:py-4 lg:px-8 rounded-xl text-xs md:text-lg lg:text-lg">
              Play for free
              <ArrowIcon className="fill-current" />
            </button>
          </div>
        </div>
        {/* Games */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 2xl:col-span-1 relative">
          <ul className="absolute w-full flex flex-col h-full overflow-y-scroll">
            {images.map((game) => (
              <li key={game.id}>
                <NavLink
                  to="/"
                  className="flex items-center md:justify-center lg:justify-start gap-4 lg:gap-4 text-white text-base md:text-xl lg:text-sm 2xl:text-xl p-4 hover:bg-[#202020] rounded-xl"
                >
                  <img
                    src={game.img}
                    alt="img"
                    className="w-16 h-20 md:w-20 md:h-24 lg:w-16 lg:h-20 2xl:w-28 2xl:h-32 object-cover object-center rounded-xl flex-none"
                  />
                  <span className="md:hidden lg:block">{game.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Slide />
    </main>
  );
};
