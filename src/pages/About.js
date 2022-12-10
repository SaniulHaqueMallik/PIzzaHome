import React from 'react'
import Pizza from "../assets/pizza.png"

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Pizza})`}}>

      </div>
      <div className='aboutButton' >
        <h1>About Us</h1>
        <p>Pizza Home is an Indian multinational restaurant chain and international franchise founded in 1958 in Bangalore by Sani and Sam. They serve their signature pan pizza and other dishes including pasta, breadsticks and dessert at dine-in, take-out and delivery chain locations</p>

      </div>
    </div>
  )
}

export default About
