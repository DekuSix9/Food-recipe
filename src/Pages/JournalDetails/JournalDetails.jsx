import { useLoaderData, useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const JournalDetails = () => {
    const {id}=useParams();
    const journalId=parseInt(id);
    const data=useLoaderData();
    const JournalDetails=data.find(journal=>journal.id===journalId)
    return (
        <div className=" max-w-11/12 mx-auto  py-4 md:py-8 font-poppins">
             <div className=" grid grid-cols-1 md:grid-cols-[70%_30%] gap-8" >

            {/* left side content */}
            <div className=" ">
                <div >
                    {/* category */}
               <button className=" bg-red-500  px-3 py-1 text-white
                        font-semibold rounded-lg ">
                {JournalDetails.category}
               </button>
                <h1 className=" text-2xl md:text-4xl font-bold mt-2 md:mt-4">{JournalDetails.title}</h1>
                  <div className="flex flex-wrap gap-4   items-center
                   text-gray-500 mb-2 md:mb-4">
                    <p className="hover:text-red-500 text-black">
                       {JournalDetails.author}
                    </p>
                  
               
                 {/* readingTime */}
                 <div>
                <p className="hover:text-red-500 text-black">
                       {JournalDetails.readingTime}
                </p>
                </div>
               
                 {/* Date */}
                 <div className="flex items-center gap-2">
                     <SlCalender />
                    <p className="hover:text-red-500 text-black">
                        {JournalDetails.postDate}
                    </p>
                  </div>
               
             </div>
             </div>
             {/* image & text content */}
             <div>
                <img className="w-full h-80 md:h-[450px] object-cover rounded-2xl" src={JournalDetails.photo}></img>
                <h2 className=" mt-2 md:mt-4 text-lg">{JournalDetails.blog}</h2>
             </div>
            </div>

            {/* right side content */}
            <div className="flex flex-col   rounded-2xl  items-center justify-center  gap-2">

             {/* Author Image */}
             <div className="w-full flex justify-center">
            <img className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
            src={JournalDetails.authorImage}
              alt={JournalDetails.author}
             />
            </div>

           {/* Author image */}
       <div className="text-center ">
          <h2 className="text-xl font-semibold text-gray-800">
          {JournalDetails.author}
         </h2>
         
     </div>
     {/* author info */}
     <div>
        <p className="text-gray-600 ">
           {JournalDetails.aboutAuthor}
        </p>
     </div>
     

         {/* Social Icons */}
     <div className="flex gap-3 mt-2">
        <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition shadow-sm">
           <CiFacebook className="text-lg" />
      </button>
       <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition shadow-sm">
          <FaInstagram className="text-lg" />
      </button>
      <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition shadow-sm">
         <CiYoutube className="text-lg" />
     </button>
     <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition shadow-sm">
       <CiTwitter className="text-lg" />
     </button>
   </div>

     </div>

      </div>

        </div>
       
    );
};

export default JournalDetails;