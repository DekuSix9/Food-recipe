import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";





const ExploreRecipes = () => {
  const[recipes,setRecipe]=useState([]);
   
  useEffect(()=>{
    fetch('recipes.json')
    .then(res=>res.json())
    .then(data=>setRecipe(data))
  },[])
// sorting
const latestRecipes=[...recipes].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,5);
const topRatedRecipes=[...recipes].sort((a,b)=>parseFloat(b.rating)-parseFloat(a.rating)).slice(0,5);
const fastestRecipes =[...recipes].sort((a,b)=>parseInt(a.duration)-parseInt(b.duration)).slice(0,5);



    return (
        <div className=' px-3 py-16'>
            <Tabs>
    <TabList className=' flex gap-8 items-center justify-center border-b border-gray-200 '>
      <Tab className="text-xl font-semibold text-gray-400 pb-2 cursor-pointer"
         selectedClassName='font-semibold text-gray-800  '
      >Latest Recipes
      </Tab>
      <Tab className="text-xl font-semibold text-gray-400 pb-2 cursor-pointer"
       selectedClassName='font-semibold text-gray-800 '
      >Top Rated Recipes
        </Tab>
       <Tab className="text-xl font-semibold text-gray-400 pb-2 cursor-pointer"
          selectedClassName='font-semibold text-gray-800 '
       >Fastest Recipes</Tab>
      
    </TabList>
    {/* latestRecipes */}
   <TabPanel >
    {/* card */}
      <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-5 my-12'>
         {
    latestRecipes.map(recipe=>(
      
      <div key={recipe.id} className=" overflow-hidden  bg-white">
        {/* image section */}
        <div className='  relative'  >
          <img src={recipe.image} className="w-full h-80 object-cover rounded-2xl" >
          </img>
         <button className=' bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4'>
           <IoMdStar className=' text-yellow-500 h-6 w-6'></IoMdStar>
             <p>{recipe.rating}</p>
         </button>
          <button className=' group bg-white flex items-center px-3 py-3
           rounded-full absolute top-4 right-4'>
           <FaHeart className='  h-6 w-6 text-red-500 '></FaHeart>
             
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
  } </div>
 </TabPanel>

 {/* TopRatedRecipe */}
    <TabPanel >
    {/* card */}
      <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-5 my-12'>
         {
    topRatedRecipes.map(recipe=>(
      
      <div key={recipe.id} className=" overflow-hidden  bg-white">
        {/* image section */}
        <div className='  relative'  >
          <img src={recipe.image} className="w-full h-80 object-cover rounded-2xl" >
          </img>
         <button className=' bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4'>
           <IoMdStar className=' text-yellow-500 h-6 w-6'></IoMdStar>
             <p>{recipe.rating}</p>
         </button>
          <button className=' group bg-white flex items-center px-3 py-3
           rounded-full absolute top-4 right-4'>
           <FaHeart className='  h-6 w-6 text-red-500 '></FaHeart>
             
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
  } </div>
 </TabPanel>
     
     {/* Fastest Recipes */}
    <TabPanel >
    {/* card */}
      <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-5 my-12'>
         {
    fastestRecipes.map(recipe=>(
      
      <div key={recipe.id} className=" overflow-hidden  bg-white">
        {/* image section */}
        <div className='  relative'  >
          <img src={recipe.image} className="w-full h-80 object-cover rounded-2xl" >
          </img>
         <button className=' bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4'>
           <IoMdStar className=' text-yellow-500 h-6 w-6'></IoMdStar>
             <p>{recipe.rating}</p>
         </button>
          <button className=' group bg-white flex items-center px-3 py-3
           rounded-full absolute top-4 right-4'>
           <FaHeart className='  h-6 w-6 text-red-500 '></FaHeart>
             
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
  } </div>
 </TabPanel>


    
  </Tabs> 
        </div>
    );
};

export default ExploreRecipes;