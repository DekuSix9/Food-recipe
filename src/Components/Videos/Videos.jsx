import { useContext, useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { CartContext } from '../../Layout/FavoriteContext/FavoriteContext';
import  { AuthContext } from "../../Layout/AuthLayout/AuthLayout";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Videos = () => {

    const [videos, setvideos] = useState([]);
    const{addtoFavorite}=useContext(CartContext);
    const{user}=useContext(AuthContext);

    
  const handleFavorite = (recipe) => {
    if (!user) {
     Swal.fire("Please Login First to add favotite recipe");
      return;
    }

    addtoFavorite(recipe); 
  };


  useEffect(() => {
    fetch("videos.json")
      .then((res) => res.json())
      .then((data) => setvideos(data));
  }, []);

 
    return (
        <div className="max-w-11/12 mx-auto px-8">
      <div className="mt-24">
        <div className=" text-center">
          <h1 className="text-5xl font-bold">Video Recipes</h1>
          <p className="mt-2 text-lg">
           Watch our latest recipe videos and learn step-by-step cooking tips and techniques!
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-4 gap-y-8">
          {videos.map((video) => (
           <div key={video.id} className="overflow-hidden bg-white relative">

     {/* CLICK Go to details */}
     <Link to={`/videos/${video.id}`} className="block cursor-pointer">
     <img
      src={video.image}
      className="w-full h-80 object-cover rounded-2xl"
     />

      {/* Play Icon */}
     <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-white/80 p-4 rounded-full transition-all duration-300 hover:scale-125">
        <FaPlay className="text-red-500 w-8 h-8" />
      </div>
    </div>

    {/* Rating */}
    <button className="bg-white flex items-center gap-1 px-2 py-1 rounded-full absolute top-4 left-4 z-20">
      <IoMdStar className="text-yellow-500 h-6 w-6" />
      <p>{video.rating}</p>
    </button>
  </Link>

  {/*  Favorite */}
  <button
    onClick={() => handleFavorite(video)}
    className="bg-white cursor-pointer flex items-center px-3 py-3 rounded-full absolute top-4 right-4 z-30"
  >
    <FaHeart className="h-6 w-6 text-red-500" />
  </button>

  {/* Details */}
  <div>
    <h2 className="mt-4 font-semibold text-red-500">{video.foodName}</h2>
    <h1 className="mt-2 text-xl font-bold hover:text-red-500">{video.title}</h1>

    <div className="flex gap-4 mt-1 text-gray-500">
      <div className="flex items-center gap-1">
        <CiClock2 />
        <p className="hover:text-red-500">{video.duration}</p>
      </div>

      <div className="flex items-center gap-1">
        <p className="hover:text-red-500">{video.country}</p>
      </div>

      <div className="flex items-center gap-1">
        <SlCalender />
        <p className="hover:text-red-500">{video.date}</p>
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

export default Videos;