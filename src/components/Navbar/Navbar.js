import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
      <Link to={"/"}>
        <h1>Mfidi.V</h1>
        </Link>  
    </div>
  )
}

export default Navbar
