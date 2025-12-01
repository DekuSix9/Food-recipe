
import Image from '../../assets/Banner/one-pot-chicken-orzo-skillet.jpg'
import { IoMdStar } from "react-icons/io";
const PromoBanner = () => {
    return (
        <div className=' max-w-11/12 mx-auto mb-2 px-3 md:px-8'>
             <div className="w-full h-[500px] md:h-[650px] bg-top bg-cover  rounded-2xl
              flex flex-col justify-start items-end  font-bold shadow-md"
             style={{backgroundImage:`url(${Image})`}} >

              <div className='mt-20 md:mt-24 max-w-2xl px-4 md:px-8 '>
                {/* rating button */}
                <div className= "flex items-center gap-3">
  <button className="bg-white flex items-center gap-2 px-3 py-1 rounded-full">
    <IoMdStar className="text-yellow-500 h-6 w-6" />
    <p>4.7</p>
    </button>
      <p className="text-white text-sm md:text-lg ">score from 5 rating</p>
     </div>
     {/* heading */}
     <h1 className=' text-white font-bold mt-6 leading-tight text-2xl
      md:text-4xl lg:text-5xl'>
        Discover fresh and easy recipes 
        to inspire your meals every day.</h1>
        <p className=' text-white mt-6 leading-relaxed
                        text-sm md:text-lg  '>Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners
             and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable
     for any occasion or gathering!</p>

     <button 
  className="bg-white hover:bg-emerald-600 rounded-lg text-black font-semibold
             mt-6 px-5 py-2 ">
  View Recipes
</button>

     

              </div>





             </div>
        </div>
    );
};

export default PromoBanner;