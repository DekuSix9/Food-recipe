import { useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoFishOutline } from "react-icons/io5";
import { LuLeafyGreen } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";
import { PiBowlFoodBold } from "react-icons/pi";





const CategoryName = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // Unique categories
  const uniqueCategories = [...new Set(recipes.map((item) => item.category))];

  const categoryIcons = {
  "Fast food": <IoFastFoodOutline className="text-4xl" />,
  "Healthy": <PiBowlFoodBold className="text-4xl" />,
  "Sea food": <IoFishOutline className="text-4xl" />,
  "Drink": <RiDrinks2Line className="text-4xl" />,
  "Desserts": <LuDessert className="text-4xl" />,
  "Vegetarian": <LuLeafyGreen className="text-4xl" />,
};
  

  return (
    <div className="max-w-11/12 mx-auto px-8">
         <div className="flex mt-12 gap-8  justify-center flex-wrap">
            {uniqueCategories.map((food) => (
               <div
            key={food}
            className="bg-white px-5 py-4 rounded-xl shadow-md border border-gray-300
             hover:shadow-lg hover:bg-gray-100 transition cursor-pointer w-48 text-center"
          >
             {/* ICON */}
            <div className="flex justify-center mb-2">
              {categoryIcons[food] }
            </div>
            <h2 className="text-xl font-semibold">{food}</h2>

            {/* category length */}
            <p className="text-gray-600 mt-1">
                  {recipes.filter((item) => item.category === food).length} Recipes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryName;
