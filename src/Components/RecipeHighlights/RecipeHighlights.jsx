
import LeftImg from '../../assets/recipeHiglight/leftImg.jpg'
import RightImg from '../../assets/recipeHiglight/rightImg.jpg'
import { IoMdStar } from "react-icons/io";





const RecipeHighlights = () => {
    return (
        <div className=" max-w-11/12 mx-auto px-4 md:px-8 mt-16 ">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                {/* left content */}
              

                <div  className=' w-full min-h-[350px]  md:min-h-[450px]  lg:min-h-[550px]  xl:min-h-[600px] 
                bg-cover bg-center bg-no-repeat rounded-2xl flex flex-col'

                style={{backgroundImage:`url(${LeftImg})`}}>
                     <div className=' max-w-lg px-4 md:px-8 pt-6 md:pt-8 mt-2 md:mt-16'>
                         {/* rating */}
                    <div className=' flex gap-2 md:gap-4 items-center'>
                         <button className="bg-white flex gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                <p>4.7</p>
                </button>
                <p className="text-black text-sm md:text-lg ">score from 5 rating</p>
                    </div>
                      {/* title  */}
                    <div >
               <h1 className='  font-bold mt-4 md:mt-4  text-2xl
                               md:text-4xl  '>Learn from the best and create culinary magic at home.</h1>
                    </div>

                    {/* text */}

                    <div>
                        <p className=' text-black mt-2 md:mt-4 
                        text-sm md:text-lg '>Get inspired by expert tips and techniques to perfect your skills. 
                            Explore recipes that help you master new dishes,
                             adding confidence and creativity to your home cooking experience.</p>
                         </div>
                         {/* button */}
                         <div >
                             <button className="mt-4 bg-emerald-600 hover:bg-black transition
                              text-white font-semibold rounded-lg px-5 py-2 ">
                       View Recipes
                         </button>
                         </div>
                     </div>
                     </div>

               
               {/* right content */}
                 <div
                  className=' w-full min-h-[350px]  md:min-h-[450px]  lg:min-h-[550px]  xl:min-h-[600px] 
                bg-cover bg-center bg-no-repeat rounded-2xl flex flex-col'
                   style={{backgroundImage:`url(${RightImg})`}} >

                       <div className=' max-w-lg px-4 md:px-8 pt-6 md:pt-8 mt-2 md:mt-16'>
                         {/* rating */}
                    <div className=' flex gap-2 md:gap-4 items-center'>
                         <button className="bg-white flex gap-2 px-3 py-1 rounded-full">
                <IoMdStar className="text-yellow-500 h-6 w-6" />
                <p>4.7</p>
                </button>
                <p className="text-white text-sm md:text-lg">score from 5 rating</p>
                    </div>
                      {/* title  */}
                    <div >
               <h1 className=' text-white font-bold mt-4 md:mt-4  text-2xl
                               md:text-4xl'>Learn from the best and create culinary magic at home.</h1>
                    </div>

                    {/* text */}

                    <div >
                        <p className='text-white mt-2 md:mt-4 
                        text-sm md:text-lg '>Get inspired by expert tips and techniques to perfect your skills. 
                            Explore recipes that help you master new dishes,
                             adding confidence and creativity to your home cooking experience.</p>
                         </div>
                         {/* button */}
                         <div >
                             <button className="mt-4 bg-emerald-600 hover:bg-white hover:text-black transition
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