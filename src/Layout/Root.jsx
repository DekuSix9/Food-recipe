
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className=' font-poppins'>
                <nav >
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </nav>
            
        </div>
    );
};

export default Root;