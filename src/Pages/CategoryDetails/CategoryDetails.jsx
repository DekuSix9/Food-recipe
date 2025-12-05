import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CartContext } from '../../Layout/FavoriteContext/FavoriteContext';
import  { AuthContext } from "../../Layout/AuthLayout/AuthLayout";
import { useContext } from "react";

const CategoryDetails = () => {
    const { category } = useParams();
    const recipeCategory=useLoaderData();
       const{addtoFavorite}=useContext(CartContext);
        const{user}=useContext(AuthContext);
    
        
      const handleFavorite = (recipe) => {
        if (!user) {
          alert("Please login first!");
          return;
        }
    
        addtoFavorite(recipe); 
      };
     
    const filteredRecipes=recipeCategory.filter((item)=>item.category.toLowerCase()===category.toLowerCase());
    const categoryDescription = filteredRecipes[0]?.categoryDescription

    return (
         <div className="max-w-11/12 mx-auto px-8">
      <div className="mt-24">
        <div className=" text-center">
          <h1 className="text-5xl font-bold">{category}</h1>
          <p className="mt-2 text-lg">{categoryDescription} </p>
          <button className=" border border-gray-200 mt-4 rounded-2xl px-3 py-1">Total {filteredRecipes.length} Recipes</button>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-4 gap-y-8">
          {filteredRecipes.map((item) => (
            <div key={item.id} className="overflow-hidden bg-white">
              {/* Image */}
             <Link to={`/recipes/${item.id}`} className="relative block cursor-pointer">
               <img
                src={item.image}
              className="w-full h-80 object-cover rounded-2xl"
               />


                 {/* Rating */}
                  <button className="bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4">
                    <IoMdStar className="text-yellow-500 h-6 w-6" />
                 <p>{item.rating}</p>
                  </button>

                  {/* Favorite */}
                     <button
                     onClick={() => {
                       handleFavorite(item);
                         }}
                   className="bg-white cursor-pointer flex items-center px-3 py-3 rounded-full absolute top-4 right-4 z-20"
                >
            <FaHeart className="h-6 w-6 text-red-500" />
               </button>
          </Link>


              {/* Details */}
              <div>
                <h2 className="mt-4 font-semibold text-red-500">{item.foodName}</h2>
                <h1 className="mt-2 text-xl font-bold hover:text-red-500">
                  {item.title}
                </h1>

                <div className="flex gap-4 mt-1 text-gray-500">
                  <div className="flex items-center gap-1">
                    <CiClock2 />
                    <p className="hover:text-red-500">{item.duration}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="hover:text-red-500">{item.country}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <SlCalender />
                    <p className="hover:text-red-500">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
          
      </div>
    </div>
    );
};

export default CategoryDetails;