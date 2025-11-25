
import LeftImg from '../../assets/recipeHiglight/leftImg.jpg'
import RightImg from '../../assets/recipeHiglight/rightImg.jpg'
import { IoMdStar } from "react-icons/io";




const RecipeHighlights = () => {
    return (
        <div className=" max-w-11/12 mx-auto px-8 mt-22">
            <div className=" flex justify-between gap-8 ">
                {/* left content */}
                <div  className=' w-full h-[600px]  bg-cover rounded-2xl flex flex-col'

                style={{backgroundImage:`url(${LeftImg})`}}>
                     <div className=' max-w-lg px-8 pt-12'>
                         {/* rating */}
                    <div className=' flex gap-4 items-center'>
                         <button className="bg-white flex gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                <p>4.7</p>
                </button>
                <p className="text-black text-lg ">score from 5 rating</p>
                    </div>
                      {/* title  */}
                    <div className=' mt-12'>
               <h1 className=' text-5xl text-black leading-12 font-bold'>Learn from the best and create culinary magic at home.</h1>
                    </div>

                    {/* text */}

                    <div className=' mt-12'>
                        <p className=' text-black text-lg  leading-6'>Get inspired by expert tips and techniques to perfect your skills. 
                            Explore recipes that help you master new dishes,
                             adding confidence and creativity to your home cooking experience.</p>
                         </div>
                         {/* button */}
                         <div className=' mt-8'>
                             <button className="bg-emerald-600 hover:bg-black rounded-lg
                              text-white font-semibold    mt-6 px-5 py-2 ">
                       View Recipes
                         </button>
                         </div>
                     </div>
                     </div>

               
               {/* right content */}
                 <div
                  className=' w-full h-[600px] bg-cover rounded-2xl flex flex-col'
                   style={{backgroundImage:`url(${RightImg})`}} >

                       <div className=' max-w-lg px-8 pt-12'>
                         {/* rating */}
                    <div className=' flex gap-4 items-center'>
                         <button className="bg-white flex gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                <p>4.7</p>
                </button>
                <p className="text-white text-lg ">score from 5 rating</p>
                    </div>
                      {/* title  */}
                    <div className=' mt-12'>
               <h1 className=' text-5xl text-white leading-12 font-bold'>Learn from the best and create culinary magic at home.</h1>
                    </div>

                    {/* text */}

                    <div className=' mt-12'>
                        <p className=' text-white text-lg  leading-6'>Get inspired by expert tips and techniques to perfect your skills. 
                            Explore recipes that help you master new dishes,
                             adding confidence and creativity to your home cooking experience.</p>
                         </div>
                         {/* button */}
                         <div className=' mt-8'>
                             <button className="bg-emerald-600  rounded-lg
                              text-white font-semibold    mt-6 px-5 py-2 ">
                       View Recipes
                         </button>
                         </div>
                     </div>

                 

                    
                </div>

           







            </div>
              </div>

    );
};

export default RecipeHighlights;