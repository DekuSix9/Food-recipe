import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Layout/AuthLayout/AuthLayout";


const Register = () => {
   const{register,handleSubmit,formState:{errors}}=useForm();
   const {createUser}=useContext(AuthContext)
   const navigate=useNavigate();
   const onSubmit=(data)=>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
         navigate('/login')
         console.log(result.user)
        })
        .catch(error=>{
         console.log(error.message)
        })

    }
    return (
         <div className=" flex items-center justify-center py-12">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8  w-96">
               <h2 className=" font-bold text-2xl text-center mb-6">Create Account</h2>
                <div className=" mb-6">
                <input
             className=" w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             {...register('name',{required:true})}
                type="text" placeholder="Username">
                    </input>
                    
               </div>

               <div className=" mb-6">
                <input
             className=" w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
             {...register('email',{required:true})}
                type="email" placeholder="Enter your email">

                </input>
                 {
                    errors.email?.type==='required'&& <p className=" text-red-500">Email is required</p>
                }
                  
               </div>

                <div className=" mb-6">
                <input
             className=" w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" 
              {...register('password',{required:true,minLength:6})}
                type="password" placeholder="Enter your password">

                </input>
                {
                    errors.password?.type==='required'&& <p className=" text-red-500">Password is required</p>
                }
                {
                    errors.password?.type==='minLength' && <p className=" text-red-500">password must be 6 characters or longer.</p>
                }
               </div>

               <div>
                 <button className=" w-full bg-emerald-600 py-3 rounded hover:bg-black text-white">Sign up</button>
               </div>
             
             <p className="mt-4 text-sm text-gray-600 text-center">
           Already have an account? <Link to="/login" className=" text-emerald-600 hover:underline hover:text-red-600 font-medium">Login</Link>
        </p>

            </form>
             
            
        </div>
    );
};

export default Register;