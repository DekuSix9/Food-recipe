import { useContext, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { CartContext } from '../../Layout/FavoriteContext/FavoriteContext';

const Categories = () => {
    const [recipes,setRecipes]=useState([]);
    const [displayRecipes,setDisplayRecipes]=useState([])
    const [activeCategories,setActiveCategories]=useState("all");
    const [visible,setVisible]=useState(8);
      const{addtoFavorite}=useContext(CartContext);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>{setRecipes(data)
            setDisplayRecipes(data)
        })
    },[]);
   
    // filter category
    const categories=recipes
          .map(item => item.category)
        .filter((category, index, self) => self.indexOf(category) === index);
          
        // show recipes function
    const handleCategory=(category)=>{

        setActiveCategories(category);
        setVisible(8);
        
          if (category === "all") {
            setDisplayRecipes(recipes);
        } else {
            setDisplayRecipes(recipes.filter(r => r.category === category));
        }
     }
        //  see more 
     const handleSeeMore=()=>{
        setVisible(next=>next+4);
     }




    return (
        <div className=" max-w-11/12 mx-auto px-4 md:px-8">
            <div className=" mt-24 ">
              <div className=" text-center">
               <h1 className=" text-3xl md:text-5xl font-bold">New Recipes</h1>
                    <p className=" mt-2 text-sm md:text-lg">Explore our latest recipes, from quick snacks to hearty meals
                         and indulgent desserts.</p>
              </div>
                
                    
                

                {/* category button */}

               <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-10 px-2">
                {/* All button */}
                       <button
          
           onClick={()=>{handleCategory('all');
                       
                }}
             className={`border border-gray-400 rounded-full px-5 py-2 capitalize
         hover:bg-emerald-600 cursor-pointer text-lg font-bold
        ${activeCategories==="all"?'bg-emerald-500 ':' bg-white'}
        
        `} >

       All
      </button>
                
        {
            categories .map((category, index) => (
                <button
        key={index}
        onClick={()=>{handleCategory(category);
                       
        }}
        className={`border border-gray-400 rounded-full px-5 py-2 capitalize
        hover:bg-emerald-600 cursor-pointer text-lg font-bold
        ${activeCategories===category?'bg-emerald-500 ':' bg-white'}
        
        `} >

        {category}
      </button>
          ))}
         </div>

     {/* category Recipers  */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-12 gap-4 gap-y-8 ">
                {
                    displayRecipes.slice(0,visible).map(recipe=>
                           <div key={recipe.id} className=" overflow-hidden  bg-white">
                                {/* image section */}
                                <div className='  relative'  >
                                  <Link to={`recipes/${recipe.id}`}>
                                    <img src={recipe.image} className="w-full h-80 object-cover rounded-2xl" >
                                  </img>
                                  </Link>
                                 
                                 <button className=' bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4'>
                                   <IoMdStar className=' text-yellow-500 h-6 w-6'></IoMdStar>
                                     <p>{recipe.rating}</p>
                                 </button>
                                  <button onClick={()=>addtoFavorite(recipe.id)} className=' group cursor-pointer bg-white flex items-center px-3 py-3
                                   rounded-full absolute top-4 right-4'>
                                   <FaHeart className='  h-6 w-6 text-red-500 '></FaHeart>
                                     
                                 </button>
                                
                                </div>
                              {/* details section */}
                                <div>
                                   <h2 className=' mt-4  font-semibold text-red-500 '>{recipe.foodName}</h2>
                                   <h1 className=' mt-2 text-xl font-bold hover:text-red-500'>{recipe.title}</h1>
                                   <div className=' flex gap-4 mt-1 text-gray-500'>
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
                        
                    )
                }
               
             </div>
             {/* see more button */}
             {
                visible<displayRecipes.length &&(
                     <div className=" flex items-center justify-center mt-12">
                <button onClick={handleSeeMore} className=" px-4 py-2  border border-gray-400 rounded-lg
                 hover:bg-emerald-600 font-bold">
                    See More</button>
                </div>

                )
             }
            








            </div>
            
        </div>
    );
};

export default Categories;