import React from 'react';
import {Link} from "react-router-dom";
import Pizza from "../assets/pizza.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Pizza})`}}>
        <div className='headerContainer'>
            <h1>Sani's PizzaHome</h1>
            <h1>EVERYDAY IS PIZZA DAY</h1>
            <Link to="/menu">
            <button>ORDER NOW!</button>
            </Link>
        </div>
      
    </div>
  )
}

export default Home;
