import { RiPlayFill } from "react-icons/ri";
import { Trending } from "./Trending";
import { Latest } from "./Latest";
import { CategoryList } from "./CategoryList";

export const Main = () => {
  return (
    <main className="bg-black">
      <div className="grid grid-cols-1">
        <div className="relative aspect-[5/7] xl:aspect-[4/3]">
          <img
            src="/images/img-major.png"
            alt="img"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-32 bottom-4 max-w-xs md:max-w-md lg:max-w-md 2xl:max-w-xl">
            <button className="flex items-center gap-1 lg:gap-3 bg-[#EBEBF5] px-3 py-1 md:py-2 md:px-4 lg:py-4 lg:px-8 rounded-sm text-xs md:text-lg lg:text-lg">
              <RiPlayFill className="text-lg" />
              <p className="font-bold">Reproducir</p>
            </button>
          </div>
        </div>
      </div>

      <Trending />
      <Latest />
      <CategoryList />
    </main>
  );
};
