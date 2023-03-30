import ArrowIcon from "../../Svg/ArrowIcon";
import { Slide } from "./Slide";

export const Main = () => {
  return (
    <main className="md:px-16">
      <div className="grid grid-cols-1 md:gap-2 2xl:gap-4">
        <div className="relative aspect-[3/2] xl:aspect-[2/1] md:col-span-5 2xl:col-span-4">
          <img
            src="/images/img-major.png"
            alt="img"
            className="w-full h-full object-cover md:rounded-xl xl:rounded-tr-none xl:rounded-br-none"
          />
          <div className="absolute left-0 bottom-0 p-5 md:px-10 md:py-10 lg:p-8 2xl:p-16 max-w-xs md:max-w-md lg:max-w-md 2xl:max-w-xl">
            <button className="flex items-center lg:gap-3 bg-[#0061FD] text-white p-1 md:py-2 md:px-4 lg:py-4 lg:px-8 rounded-xl text-xs md:text-lg lg:text-lg">
              Ver
              <ArrowIcon className="fill-current" />
            </button>
          </div>
        </div>
      </div>
      <Slide />
    </main>
  );
};
