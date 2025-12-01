import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {

   
    return (
        <footer className=" bg-gray-100 mt-22">
            <div className=" flex flex-col items-center justify-center py-12">
                {/* title and text */}
                <div className=" text-center">
               <h1 className=" text-3xl md:text-4xl font-bold">Explore Our Recipes</h1>
               <p className=" mt-2 text-gray-700 text-sm md:text-base">From quick meals to healthy dishes,
                 our popular tags make it easy to explore delicious options with one click.</p>
                </div>

                <div className=" flex mt-8 gap-12 items-center flex-wrap justify-center ">
                    {/* social icons */}
                    <div className="  flex gap-3 justify-center items-center ">
                       <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
                     <CiFacebook className=" text-xl " />
                       </button>
                       <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
                     <FaInstagram className=" text-xl " />
                       </button>
                       <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
                     <CiYoutube className=" text-xl " />
                       </button>
                       <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
                     <CiTwitter className=" text-xl " />
                       </button>
                    </div>

                    {/* link items */}
                    <div className=" flex items-center gap-3 md:gap-4 mt-4 md:mt-0 flex-wrap">
                      <button className="bg-gray-200 rounded-full 
                      px-4 py-2 hover:text-red-600 font-bold ">
                         All Recipes
                       </button>
                        <button className="bg-gray-200 rounded-full 
                      px-4 py-2 hover:text-red-600 font-bold ">
                         Video Recipes
                       </button>
                        <button className="bg-gray-200 rounded-full 
                      px-4 py-2 hover:text-red-600 font-bold ">
                         Refund Policy
                       </button>
                        <button className="bg-gray-200 rounded-full 
                      px-4 py-2 hover:text-red-600 font-bold">
                           Terms and Conditions   
                    </button>
                        <button className="bg-gray-200 rounded-full 
                      px-4 py-2 hover:text-red-600 font-bold ">
                        Contact Us
                       </button>


                    </div>
                


                </div>

              



            </div>        
        </footer>
    );
};

export default Footer;