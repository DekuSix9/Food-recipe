
import Image from '../../assets/Banner/promoImg.png'
import { IoMdStar } from "react-icons/io";
const PromoBanner = () => {
    return (
        <div className=' max-w-11/12 mx-auto '>
             <div className="w-full  min-h-[350px]  md:min-h-[450px]  lg:min-h-[550px]  xl:min-h-[600px]   rounded-2xl
             bg-cover bg-center bg-no-repeat flex flex-col justify-start items-end  font-bold shadow-md"
             style={{backgroundImage:`url(${Image})`}} >

              <div className=' max-w-2xl py-32 px-4 md:px-0'>
                {/* rating button */}
                <div className= "flex items-center gap-2 md:gap-4">
            <button className="bg-white flex items-center gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                  <p>4.7</p>
               </button>
             <p className="text-white text-sm md:text-lg ">score from 5 rating</p>
              </div>
              {/* heading */}
         <h1 className=' text-white font-bold mt-2 md:mt-4  text-2xl
                               md:text-4xl lg:text-5xl'>
                    Discover fresh and easy recipes 
                   to inspire your meals every day.</h1>
        <p className=' text-white mt-4 md:mt-6 
                        text-sm md:text-lg  '>
                          Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners
                           and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable
                          for any occasion or gathering!</p>

            <button 
          className="bg-white hover:bg-emerald-600 rounded-lg text-black font-semibold
             mt-4 px-5 py-2 ">
           View Recipes
        </button>

     

              </div>





             </div>
        </div>
    );
};

export default PromoBanner;