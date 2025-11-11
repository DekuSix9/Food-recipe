import BannerImg from '../../assets/Banner/banner.jpg'
import { LuCookingPot } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";



const Banner = () => {
  return (
   <div className='px-3 py-2'>
        <div
      className="   h-[400px] md:h-[700px] w-full rounded-2xl bg-cover items-start justify-center bg-center flex flex-col  text-white font-bold  shadow-md"
      style={{ backgroundImage: `url(${BannerImg})` }} >

           {/* title,subtitle and search bar */}
        <div className=' pl-4  md:pl-8 lg:pl-16 max-w-2xl'>
               <h2 className=' text-2xl text-gray-900  md:text-3xl lg:text-5xl font-bold'>Thinking of Something  Delicious? </h2>
      <p className=' mt-2 md:mt-4 text-black text-lg'>Don't just dream it — discover the perfect recipe that turns your  craving into a masterpiece.</p>
      <div className=' relative'>
     <LuCookingPot className=' h-8 w-8 absolute left-3 top-12 text-emerald-700'></LuCookingPot>

     <input
  type="text"
  placeholder="Find what you want to cook today"
  className="w-full md:w-full bg-white mt-6  md:mt-8  rounded-2xl px-14 py-5 text-black placeholder-gray-600   ">
   
  </input>
   <button className=" absolute right-2 bottom-3   bg-emerald-600 rounded-lg hover:bg-gray-900 px-4 py-2 flex items-center justify-center transition duration-200">
      <CiSearch className="text-white h-6 w-6" />
    </button>
    
      </div>
  

        </div>
        
       
     
        </div>
    
      </div>
       

  );
};

export default Banner;
