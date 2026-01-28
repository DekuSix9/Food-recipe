import { useContext, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { CartContext } from "../../Layout/FavoriteContext/FavoriteContext";
import { AuthContext } from "../../Layout/AuthLayout/AuthLayout";

const ExploreRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [activeTab, setActiveTab] = useState("latest");

  const { addtoFavorite } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  // fetch data
  useEffect(() => {
    fetch("recipes.json")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  // favorite handler
  const handleFavorite = (recipe) => {
    if (!user) {
      Swal.fire("Please Login First to add favorite recipe");
      return;
    }
    addtoFavorite(recipe);
  };

  // sorting
  const latestRecipes = [...recipes]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const topRatedRecipes = [...recipes]
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 4);

  const fastestRecipes = [...recipes]
    .sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
    .slice(0, 4);

  const displayedRecipes =
    activeTab === "latest"
      ? latestRecipes
      : activeTab === "top"
      ? topRatedRecipes
      : fastestRecipes;

  return (
    <div className="px-3 py-6 md:py-12">

     
      <div className="flex justify-center gap-8">
        <button
          onClick={() => setActiveTab("latest")}
          className={`text-xl font-semibold pb-2 transition
            ${activeTab === "latest"
              ? "text-gray-800"
              : "text-gray-400 hover:text-gray-600"}`}
        >
          Latest Recipes
        </button>

        <button
          onClick={() => setActiveTab("top")}
          className={`text-xl font-semibold pb-2 transition
            ${activeTab === "top"
              ? "text-gray-800"
              : "text-gray-400 hover:text-gray-600"}`} >
          Top Rated Recipes
        </button>

        <button
          onClick={() => setActiveTab("fast")}
          className={`text-xl font-semibold pb-2 transition
            ${activeTab === "fast"
              ? "text-gray-800"
              : "text-gray-400 hover:text-gray-600"}`}
        >
          Fastest Recipes
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {displayedRecipes.map(recipe => (
          <div key={recipe.id} className="bg-white overflow-hidden">

            {/* Image */}
            <div className="relative">
              <Link to={`recipes/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-68 md:h-80 object-cover rounded-2xl"/>
              </Link>

              <button className="bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4">
                <IoMdStar className="text-yellow-500 w-6 h-6" />
                <p>{recipe.rating}</p>
              </button>

              <button
                onClick={() => handleFavorite(recipe)}
                className="bg-white p-3 rounded-full absolute top-4 right-4"
              >
                <FaHeart className="text-red-500 w-6 h-6" />
              </button>
            </div>

            {/* Details */}
            <div>
              <h2 className=" mt-2 md:mt-4 font-semibold text-red-500">
                {recipe.foodName}
              </h2>

              <h1 className="text-xl font-bold hover:text-red-500">
                {recipe.title}
              </h1>

              <div className="flex gap-4  text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <CiClock2 />
                  <p>{recipe.duration}</p>
                </div>

                <div>
                  <p>{recipe.country}</p>
                </div>

                <div className="flex items-center gap-1">
                  <SlCalender />
                  <p>{recipe.date}</p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ExploreRecipes;
