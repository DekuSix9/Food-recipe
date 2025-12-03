import { useContext } from "react";
import { IoMdStar } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CartContext } from "../../Layout/FavoriteContext/FavoriteContext";
import { Link } from 'react-router-dom';

const Favorite = () => {
    const{favorites,removeFromCart}=useContext(CartContext)
    return (
        <div className=" max-w-11/12 mx-auto px-8">
                    <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-5 my-10'>
               {
          favorites.map(recipe=>(
            
            <div key={recipe.id} className=" overflow-hidden  bg-white">
              {/* image section */}
              <div className='  relative'  >
                <Link to={`recipes/favorites/${recipe.id}`}>
                   <img src={recipe.image} className="w-full h-80 object-cover rounded-2xl" >
                </img>
                </Link>
               
               <button className=' bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4'>
                 <IoMdStar className=' text-yellow-500 h-6 w-6'></IoMdStar>
                   <p>{recipe.rating}</p>
               </button>

                <button onClick={()=>removeFromCart(recipe.id)} className=' group bg-white flex items-center px-3 py-3
                                    rounded-full absolute top-4 right-4'>
            <MdDelete className='  h-6 w-6 text-red-500 '></MdDelete>
                                                    
         </button>
                
              
              </div>
            {/* details section */}
              <div>
                 <h2 className=' mt-4  font-semibold text-red-500 '>{recipe.foodName}</h2>
                 <h1 className=' mt-2 text-xl font-bold hover:text-red-500'>{recipe.title}</h1>
                 <div className=' flex gap-4 mt-4 text-gray-500'>
                  <div className=' flex items-center gap-1 '>
                    <CiClock2></CiClock2>
                   <p className=' hover:text-red-500'>{recipe.duration}</p>
                  </div>
                  <div className=' flex items-center gap-1'>
                    <p className=' hover:text-red-500'>{recipe.country}</p>
                  </div> 
                  <div className=' flex items-center gap-1'>
                    <SlCalender></SlCalender>
                     <p className=' hover:text-red-500'>{recipe.date}</p>
                  </div>
      
                   </div>
      
              </div>
      </div>
          ))
        }
         </div>
        </div>
       
    );
};

export default Favorite;