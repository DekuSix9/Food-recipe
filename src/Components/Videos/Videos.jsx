import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";

const Videos = () => {

    const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    fetch("videos.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

 
    return (
        <div className="max-w-11/12 mx-auto px-8">
      <div className="mt-24">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold">Video Recipes</h1>
          <p className="mt-2 text-lg">
           Watch our latest recipe videos and learn step-by-step cooking tips and techniques!
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-4 gap-y-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="overflow-hidden bg-white">
              {/* Image */}
              <div className="relative">
                <img
                  src={recipe.image}
                  className="w-full h-80 object-cover rounded-2xl"
                />

                <button className="bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4">
                  <IoMdStar className="text-yellow-500 h-6 w-6" />
                  <p>{recipe.rating}</p>
                </button>

                <button className="bg-white flex items-center px-3 py-3 rounded-full absolute top-4 right-4">
                  <FaHeart className="h-6 w-6 text-red-500" />
                </button>
                 {/*  Play Icon  */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className= "bg-white/80  p-4 rounded-full transition-all duration-300 hover:scale-125">
      <FaPlay className="text-red-500 w-8 h-8" />
    </div>
  </div>
              </div>

              {/* Details */}
              <div>
                <h2 className="mt-4 font-semibold text-red-500">{recipe.foodName}</h2>
                <h1 className="mt-2 text-xl font-bold hover:text-red-500">
                  {recipe.title}
                </h1>

                <div className="flex gap-4 mt-1 text-gray-500">
                  <div className="flex items-center gap-1">
                    <CiClock2 />
                    <p className="hover:text-red-500">{recipe.duration}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="hover:text-red-500">{recipe.country}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <SlCalender />
                    <p className="hover:text-red-500">{recipe.date}</p>
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

export default Videos;