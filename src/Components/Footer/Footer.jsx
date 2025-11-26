import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const Footer = () => {

   
    return (
        <footer className=" bg-gray-100 mt-22">
            <div className=" flex flex-col items-center justify-center py-12">
                {/* title and text */}
                <div>
               <h1 className=" text-center text-4xl font-bold">Explore Our Recipes</h1>
               <p className=" mt-2">From quick meals to healthy dishes,
                 our popular tags make it easy to explore delicious options with one click.</p>
                </div>

                <div className=" flex mt-8 gap-12 items-center">
                    {/* social icons */}
                    <div className="  space-x-3">
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
                    <div className=" flex items-center gap-4">
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