
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    return (
        <div className=' font-poppins'>
                <nav >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </nav>
            
        </div>
    );
};

export default Root;