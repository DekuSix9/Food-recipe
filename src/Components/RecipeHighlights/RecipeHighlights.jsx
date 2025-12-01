
import LeftImg from '../../assets/recipeHiglight/leftImg.jpg'
import RightImg from '../../assets/recipeHiglight/rightImg.jpg'
import { IoMdStar } from "react-icons/io";





const RecipeHighlights = () => {
    return (
        <div className=" max-w-11/12 mx-auto px-4 md:px-8 mt-22">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                {/* left content */}
              

                <div  className=' w-full h-[500px] md:h-[600px]  bg-cover rounded-2xl flex flex-col'

                style={{backgroundImage:`url(${LeftImg})`}}>
                     <div className=' max-w-lg px-4 md:px-8 pt-10 md:pt-14'>
                         {/* rating */}
                    <div className=' flex gap-4 items-center'>
                         <button className="bg-white flex gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                <p>4.7</p>
                </button>
                <p className="text-black text-sm md:text-lg ">score from 5 rating</p>
                    </div>
                      {/* title  */}
                    <div >
               <h1 className=' mt-10 text-3xl md:text-5xl text-black font-bold leading-tight'>Learn from the best and create culinary magic at home.</h1>
                    </div>

                    {/* text */}

                    <div>
                        <p className=' mt-8 text-black text-sm md:text-lg leading-relaxed'>Get inspired by expert tips and techniques to perfect your skills. 
                            Explore recipes that help you master new dishes,
                             adding confidence and creativity to your home cooking experience.</p>
                         </div>
                         {/* button */}
                         <div >
                             <button className="mt-8 bg-emerald-600 hover:bg-black transition
                              text-white font-semibold rounded-lg px-5 py-2 ">
                       View Recipes
                         </button>
                         </div>
                     </div>
                     </div>

               
               {/* right content */}
                 <div
                  className=' w-full h-[500px] md:h-[600px]  bg-cover rounded-2xl flex flex-col'
                   style={{backgroundImage:`url(${RightImg})`}} >

                       <div className=' max-w-lg px-4 md:px-8 pt-10 md:pt-14'>
                         {/* rating */}
                    <div className=' flex gap-4 items-center'>
                         <button className="bg-white flex gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                <p>4.7</p>
                </button>
                <p className="text-white text-sm md:text-lg">score from 5 rating</p>
                    </div>
                      {/* title  */}
                    <div >
               <h1 className=' mt-10 text-3xl md:text-5xl text-white font-bold leading-tight'>Learn from the best and create culinary magic at home.</h1>
                    </div>

                    {/* text */}

                    <div >
                        <p className='mt-8 text-white text-sm md:text-lg leading-relaxed'>Get inspired by expert tips and techniques to perfect your skills. 
                            Explore recipes that help you master new dishes,
                             adding confidence and creativity to your home cooking experience.</p>
                         </div>
                         {/* button */}
                         <div >
                             <button className="mt-8 bg-emerald-600 hover:bg-black transition
                              text-white font-semibold rounded-lg px-5 py-2 ">
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