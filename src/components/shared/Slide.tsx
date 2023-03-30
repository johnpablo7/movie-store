import { NavLink } from "react-router-dom";
import { imagesonsale } from "../../data/images";
import LeftArrowIcon from "../../Svg/LeftArrowIcon";
import RightArrowIcon from "../../Svg/RightArrowIcon";

export const Slide = () => {
  return (
    <div className="p-4 drop-shadow-2xl 2xl:py-10">
      <div className="flex items-center justify-between pb-2 md:px-0 md:mb-5 2xl:mb-8">
        <div className="text-[#EBEBF5] text-lg md:text-2xl font-semibold">
          Tendencias
        </div>
        <div className="items-center hidden md:hidden lg:flex gap-4">
          <LeftArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
          <RightArrowIcon className="text-[#EBEBF5] text-opacity-60 hover:text-[#EBEBF5] cursor-pointer fill-current transition-colors" />
        </div>
      </div>

      {/* Tendencias */}
      <div className="overflow-x-auto">
        <div className="flex items-center w-auto scrollbar-hide gap-x-2">
          {imagesonsale.map((game) => (
            <NavLink key={game.id} to="/" className="w-1/3 flex-none">
              <img
                src={game.img}
                alt="img"
                className="object-cover object-center rounded-sm"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
