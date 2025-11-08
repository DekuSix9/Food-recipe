
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    return (
        <div className=' font-poppins'>
                <nav className=" w-11/12 mx-auto py-4">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </nav>
            
        </div>
    );
};

export default Root;