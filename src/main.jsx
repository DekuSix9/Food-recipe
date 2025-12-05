import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthLayout from './Layout/AuthLayout/AuthLayout';
import RecipeDetails from './Pages/RecipeDetails/RecipeDetails';
import Favorite from './Pages/Favorite/Favorite';
import FavoriteContext from './Layout/FavoriteContext/FavoriteContext';
import PrivateLayout from './Layout/PrivateLayout/PrivateLayout';
import VideoDetail from './Pages/VideoDetails/VideoDetail';
import JournalDetails from './Pages/JournalDetails/JournalDetails';
import CategoryDetails from './Pages/CategoryDetails/CategoryDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>

      },
       {
        path:'register',
        element:<Register></Register>

      },
      {
        path:'recipes/:id',
        element:<RecipeDetails></RecipeDetails>,
        loader: async()=>{
          const res=await fetch('/recipes.json');
          return res.json();
        }
      },
      {
        path:'/favorites',
        element:<PrivateLayout><Favorite></Favorite></PrivateLayout>  
      },
      
       {
        path:'videos/:id',
        element:<VideoDetail></VideoDetail>,
         loader: async()=>{
          const res=await fetch('/videos.json');
          return res.json();
        }

       },
       {
        path:'journal/:id',
        element:<JournalDetails></JournalDetails>,
        loader:async()=>{
          const res=await fetch('/journal.json');
          return res.json();
        }
       },
       {
  path: "/category/:category",
  element:<CategoryDetails></CategoryDetails>,
  loader: async() =>{
       const res=await fetch("/recipes.json");
       return res.json();
 
  } 
}

     


    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthLayout> 
      <FavoriteContext>
        <RouterProvider router={router} />
      </FavoriteContext>
       </AuthLayout>
    
  </StrictMode>,
)
