import BannerImg from '../../assets/Banner/banner.jpg'
import { LuCookingPot } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 py-3">
      <div
        className="relative h-[380px] sm:h-[450px] md:h-[600px] lg:h-[700px] w-full rounded-2xl bg-cover bg-center flex items-center text-white shadow-md"
        style={{ backgroundImage: `url(${BannerImg})` }}>
        {/*  Dark Overlay */}
        <div className="absolute inset-0 sm:hidden bg-black/60 sm:bg-black/50 rounded-2xl"></div>

        {/* Content */}
        <div className="relative px-4 sm:px-8 lg:px-16 max-w-xl sm:max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
            Thinking of Something Delicious?
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-100 drop-shadow-md">
            Don't just dream it — discover the perfect recipe that turns your craving into a masterpiece.
          </p>

          {/* Search Bar */}
          <div className="relative mt-6 sm:mt-8 w-full">
            <LuCookingPot className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700 h-6 w-6 md:h-7 md:w-7" />

            <input
              type="text"
              placeholder="Find what you want to cook today"
              className="w-full bg-white rounded-2xl pl-14 pr-14 py-3 sm:py-4 md:py-5 text-black placeholder-gray-500 placeholder:text-sm sm:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-gray-900 p-2.5 rounded-xl transition"
            >
              <CiSearch className="text-white h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
