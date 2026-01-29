
import Image from '../../assets/Banner/promoImg.png'
import { IoMdStar } from "react-icons/io";
const PromoBanner = () => {
    return (
        <div className=' max-w-11/12 mx-auto '>
             <div className=" relative w-full  h-[450px]  md:h-[500px]  rounded-2xl
             bg-cover bg-center bg-no-repeat flex flex-col justify-start items-end  font-bold shadow-md"
             style={{backgroundImage:`url(${Image})`}} >
           {/* dark overlay */}
                 <div className="absolute sm:hidden inset-0 bg-black/60 sm:bg-black/50 rounded-2xl"></div>
              <div className=' max-w-2xl py-22 px-4 md:px-0'>
                {/* rating button */}
                <div className= "flex items-center gap-2 md:gap-4">
            <button className="bg-white drop-shadow-lg md:drop-shadow-none flex items-center gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                  <p>4.7</p>
               </button>
             <p className="text-white text-sm md:text-lg drop-shadow-lg md:drop-shadow-none">score from 5 rating</p>
              </div>
              {/* heading */}
         <h1 className=' text-white font-bold mt-2 md:mt-4  text-2xl
                               md:text-4xl lg:text-5xl drop-shadow-lg md:drop-shadow-none'>
                    Discover fresh and easy recipes 
                   to inspire your meals every day.</h1>
        <p className=' text-white mt-4 md:mt-6 
                        text-sm md:text-lg  drop-shadow-lg md:drop-shadow-none'>
                          Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners
                           and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable
                          for any occasion or gathering!</p>

            <button 
          className="bg-white hover:bg-emerald-600 rounded-lg text-black font-semibold
             mt-4 px-5 py-2 drop-shadow-lg md:drop-shadow-none">
           View Recipes
        </button>

     

              </div>





             </div>
        </div>
    );
};

export default PromoBanner;