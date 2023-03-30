import { NavLink } from "react-router-dom";
import { imagesonsale } from "../../data/images";
import LeftArrowIcon from "../../Svg/LeftArrowIcon";
import RightArrowIcon from "../../Svg/RightArrowIcon";

export const Slide = () => {
  return (
    <div className="py-6 2xl:py-10">
      <div className="flex items-center justify-between px-6 md:px-0 md:mb-5 2xl:mb-8">
        <div className="text-[#EBEBF5] text-lg md:text-2xl font-semibold">
          Games On Sale
        </div>
        <div className="items-center hidden md:hidden lg:flex gap-4">
          <LeftArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
          <RightArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
        </div>
      </div>
      {/* Videogames */}
      <div className="grid grid-cols-1 p-6 md:p-0 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-6">
        {imagesonsale.map((game) => (
          <div
            key={game.id}
            className="bg-[#202020] md:bg-woodsmoke rounded-xl md:aspect-[1/1]"
          >
            <NavLink to="/">
              <img
                src={game.img}
                alt="img"
                className="object-cover object-center w-full"
              />
              <div className="flex flex-col items-start justify-center p-4 md:py-4 md:px-0 md:gap-1">
                <h3 className="text-xl text-white">{game.name}</h3>
                <p className="text-lg text-[#EBEBF5] text-opacity-60 mb-1 md:mb-2">
                  {game.mode}
                </p>
                <div className="flex items-center gap-2">
                  {game.dsct && (
                    <span className="bg-[#B1DD8B] py-1 px-3 text-[#38571A] rounded-lg">
                      {game.dsct}
                    </span>
                  )}
                  {game.pricesub && (
                    <span className="text-[#EBEBF5] text-opacity-60 ">
                      {game.pricesub}
                    </span>
                  )}
                  <span className="text-lg text-white">{game.price}</span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
