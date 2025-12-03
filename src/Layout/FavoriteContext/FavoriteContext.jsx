/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const CartContext=createContext()

const FavoriteContext = ({children}) => {
    const [favorites,setFavorites]=useState(()=>{
        const storedFavorites=localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites):[];
    });

    useEffect(()=>{

        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addtoFavorite=(recipe)=>{
        const alreadyAdded=favorites.find(item=>item.id===recipe.id)
          if(!alreadyAdded){
              setFavorites([...favorites,recipe])
          }
          else{
            alert("Recipe already in favorites")
          }
            
    }

    const removeFromCart = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };


    const cartInfo={addtoFavorite,favorites,removeFromCart}


    return (
       <CartContext.Provider value={cartInfo}>
                {children}

       </CartContext.Provider>
    );
};

export default FavoriteContext;