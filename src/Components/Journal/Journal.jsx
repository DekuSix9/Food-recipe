import { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";




const Journal = () => {
    const [journal,setJournal]=useState([]);


    useEffect(()=>{
         fetch('journal.json')
         .then(res=>res.json())
         .then(data=>setJournal(data))
    },[])

    return (
         <div className="max-w-11/12 mx-auto px-8">
             <div className="mt-24">
               <div className="flex items-center justify-center flex-col">
                 <h1 className="text-5xl font-bold">Our Journal</h1>
                 <p className="mt-2 text-lg">
                  Discover stories, tips, and trends to inspire your culinary journey and creativity!
                 </p>
               </div>
       
               {/* Recipes Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 ">
                 {journal.map((news) => (
                   <div key={news.id} className="overflow-hidden bg-white">
                     {/* Image */}
                     <div className="relative">
                       <img
                         src={news.photo}
                         className="w-full h-80 object-cover rounded-2xl"
                       />
       
                       <button className=" bg-red-500  
                        px-3 py-1 text-white font-semibold rounded-lg absolute top-4 left-4">
                        
                         <p>{news.category}</p>
                       </button>     
        
                     </div>
       
                     {/* Details */}
                     <div>
                       
                       <h1 className="mt-2 text-xl font-bold hover:text-red-500">
                         {news.title}
                       </h1>
       
                       <div className="flex gap-4 mt-2 text-gray-500">
                         <div className="flex items-center gap-1">
                          
                           <p className="hover:text-red-500">{news.author}</p>
                         </div>
       
                         <div className="flex items-center gap-1">
                            <CiClock2 />
                           <p className="hover:text-red-500">{news.postedAgo}</p>
                         </div>
       
                         <div className="flex items-center gap-1">
                          
                           <p className="hover:text-red-500">{news.readingTime}</p>
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

export default Journal;