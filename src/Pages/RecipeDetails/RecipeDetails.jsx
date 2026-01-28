import { useLoaderData, useParams } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";


const RecipeDetails = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const recipeId =parseInt(id);
    const RecipeDetails=data.find(recipe=>recipe.id===recipeId);
    return (
             <div className=" relative">
              {/* bg color */}
               <div className="absolute top-0 left-0 w-full h-[25%] bg-gray-100 -z-10"></div>
             
                     {/* main content */}
            <div className=" max-w-11/12 mx-auto py-8 font-poppins">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            {/* left content */}
            <div>
                <img src={RecipeDetails.image} className="w-full h-[300px] md:h-[500px]  object-cover rounded-2xl">
                </img>
            </div>

            {/* right content */}
            <div >
              <div >
                 <h2 className=" text-md md:text-lg font-bold text-red-600 ">{RecipeDetails.foodName}</h2>
                <h1 className=" text-2xl md:text-4xl font-bold ">{RecipeDetails.title}</h1>
                  <div className="flex flex-wrap gap-4 md:gap-6 mt-1  items-center text-gray-500 ">

                      {/* Duration */}
                      <div className="flex items-center ">
                      <CiClock2 />
                     <p className="hover:text-red-500 text-black">
                      {RecipeDetails.duration}
                   </p>
                       </div>

                   {/* Country */}
               <div>
             <p className="hover:text-red-500 text-black">
                 {RecipeDetails.country}
              </p>
             </div>

                {/* Date */}
           <div className="flex items-center gap-2">
               <SlCalender />
              <p className="hover:text-red-500 text-black">
                  {RecipeDetails.date}
                    </p>
                  </div>

           {/* Difficulty */}
          <h2 className="text-black">
             {RecipeDetails.details.difficulty}
          </h2>

              </div>
              </div>
                
           
        {/* ingredients */}
                    <div className=" pt-4 md:pt-8">
                          <h1 className="  text-gray-500 text-2xl">Ingredients <span className=" text-black font-bold" >(1 Person)</span></h1>
                          <ul className=" list-disc list-inside ">
                            
                                  {RecipeDetails.details.ingredients.map((item,index)=>(
                                    <li className=" text-md md:text-lg font-bold" key={index} >{item}</li>
                                  ))}
                            
                               </ul>
                                  </div>

                     {/* steps */}

                      <div className=" mt-4">
                          <h1 className=" text-2xl font-bold">Directions</h1>
                          <ul className="  ">
                            
                                  {RecipeDetails.details.steps.map((item,index)=>(
                                    <li className=" text-md md:text-lg " key={index}>{item}</li>
                                  ))}
                             </ul>
                               </div>

                     {/* button */}
                       <button 
                     className="bg-emerald-600 hover:bg-emerald-700 rounded-lg text-black font-semibold mt-2 md:mt-4 px-5 py-2 ">
                                 Add to Favorite
                           </button>


            </div>

          </div>
        </div>
             </div>
     
       
    );
};

export default RecipeDetails;