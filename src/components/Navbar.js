import React from 'react';
import {useState} from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import Logo from '../assets/pizzaLogo.png';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const[openLinks,setOpenLinks] = useState(false)

    const toggleNavbar = () => {

        setOpenLinks(!openLinks)

    }

  return (
    <div className='navbar'>

        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={Logo} alt="Logo" />
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
        

        <div className='rightSide'>

            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <button onClick={toggleNavbar}>
                <AppsIcon />
            </button>

        </div>
      
    </div>
  )
}

export default Navbar
