import { useContext, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { CartContext } from "../../Layout/FavoriteContext/FavoriteContext";
import { AuthContext } from "../../Layout/AuthLayout/AuthLayout";
import Swal from "sweetalert2";

const Categories = () => {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState("all");
  const [visible, setVisible] = useState(8);

  const { addtoFavorite } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("recipes.json")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  // unique categories 
  const uniqueCategories = ["all", ...new Set(recipes.map(r => r.category))];

  // filtered recipes
  const filteredRecipes =
    selected === "all"
      ? recipes
      : recipes.filter(r => r.category === selected);

     const handleFavorite = (recipe) => {
         if (!user) {
        Swal.fire("Please Login First to add favorite recipe");
      return;
         }
         addtoFavorite(recipe);
               };

              const handleSeeMore = () => {
                  setVisible(prev => prev + 4);
                               };

  return (
    <div className="max-w-11/12 mx-auto px-4 md:px-8">
      <div className="mt-24">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">New Recipes</h1>
          <p className="mt-2 text-sm md:text-lg">
            Explore our latest recipes, from quick snacks to hearty meals.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {uniqueCategories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelected(category);
                setVisible(8);
              }}
              className={`px-5 py-2 rounded-full border font-bold capitalize transition-all
                ${
                  selected === category
                    ? "bg-emerald-500 text-white"
                    : "bg-white hover:bg-emerald-600 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
          {filteredRecipes.slice(0, visible).map(recipe => (
            <div key={recipe.id} className="bg-white overflow-hidden">
              {/* Image */}
              <div className="relative">
                <Link to={`recipes/${recipe.id}`}>
                  <img
                    src={recipe.image}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </Link>

                <span className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                  <IoMdStar className="text-yellow-500" />
                  {recipe.rating}
                </span>

                <button
                  onClick={() => handleFavorite(recipe)}
                  className="absolute top-4 right-4 bg-white p-3 rounded-full"
                >
                  <FaHeart className="text-red-500" />
                </button>
              </div>

              {/* Details */}
              <div className="mt-4">
                <h3 className="font-semibold text-red-500">
                  {recipe.foodName}
                </h3>
                <h2 className="text-xl font-bold hover:text-red-500">
                  {recipe.title}
                </h2>

                <div className="flex gap-4 mt-2 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <CiClock2 />
                    {recipe.duration}
                  </div>
                  <div>{recipe.country}</div>
                  <div className="flex items-center gap-1">
                    <SlCalender />
                    {recipe.date}
                  </div>
                </div>
              </div>
              </div>
                ))}
             </div>

        {/* See More */}
        {visible < filteredRecipes.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleSeeMore}
              className="px-5 py-2 border rounded-lg font-bold hover:bg-emerald-600 hover:text-white"
            >
              See More
            </button>
          </div>
        )}
           </div>
              </div>
  );
};

export default Categories;
