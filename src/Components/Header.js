import { Fragment } from "react";
import Navbar from './Navbar';
import Nav from './Nav';


const Header = () => {
    return ( 
        <Fragment>
        <Navbar/>
        <Nav/>
        </Fragment>
     );
}; 

export default Header;