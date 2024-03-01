import React from 'react'
import investmentImg from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <div id='header'>
        <img src={investmentImg}/>
        <h1>Investment Calculator</h1>
    </div>
  )
}

export default Header