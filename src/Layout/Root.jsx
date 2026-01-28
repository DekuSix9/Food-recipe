
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from './ScrollTop/ScrollToTop';


const Root = () => {
    return (
        <div className=' font-poppins'>
                <ScrollToTop/>
                <Navbar></Navbar>
                 
                <Outlet></Outlet>
                <Footer></Footer>
           
            
        </div>
    );
};

export default Root;