import { useContext, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { CartContext } from "../../Layout/FavoriteContext/FavoriteContext";
import { AuthContext } from "../../Layout/AuthLayout/AuthLayout";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Recipes = () => {

  const [allRecipes, setallRecipes] = useState([]);
  const { addtoFavorite } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  // handle favorite
  const handleFavorite = (recipe) => {
    if (!user) {
      Swal.fire("Please Login First to add favorite recipe");
      return;
    }

    addtoFavorite(recipe);
    Swal.fire("Added to Favorites!");
  };

  // fetch videos
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setallRecipes(data));
  }, []);

  return (
    <div className="max-w-11/12 mx-auto ">
      <div className="mt-4 md:mt-8">
        <div className="text-center ">
          <h1 className="text-2xl md:text-5xl font-bold">Recipes</h1>
          <p className="mt-2 md:text-lg">
            Browse a wide variety of recipes designed for every taste and skill level. 
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-16 gap-4 gap-y-6 md:gap-y-8">
          {allRecipes.map((recipe) => (
            <div key={recipe.id} className="overflow-hidden bg-white relative rounded-2xl">

              {/* CLICK -> Go to details */}
              <Link to={`/recipes/${recipe.id}`} className="block cursor-pointer">
                <img
                  src={recipe.image}
                  className="w-full h-68 md:h-80 object-cover rounded-2xl"
                />

                {/* Rating */}
                <button className="bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4 z-20">
                  <IoMdStar className="text-yellow-500 h-6 w-6" />
                  <p>{recipe.rating}</p>
                </button>
              </Link>

              {/* Favorite Button */}
              <button
                onClick={() => handleFavorite(recipe)}
                className="bg-white cursor-pointer flex items-center px-3 py-3 rounded-full absolute top-4 right-4 z-30"
              >
                <FaHeart className="h-6 w-6 text-red-500" />
              </button>

              {/* Details */}
              <div>
                <h2 className="mt-2 md:mt-4 font-semibold text-red-500">{recipe.foodName}</h2>
                <h1 className="text-xl font-bold hover:text-red-500">{recipe.title}</h1>

                <div className="flex gap-4  text-gray-500">
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

export default Recipes;
