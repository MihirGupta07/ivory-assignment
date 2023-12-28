import React from 'react'
import { IoSearch } from "react-icons/io5";
import { HiViewGrid } from "react-icons/hi";
import imgg from "../../assets/ivory-logo-dark.png.png"
import "./style.css"

const Navbar = () => {
  return (
      <div className='NavbarContainer'>
          <HiViewGrid className='icons' />
          <img className="logoImage" src={imgg} alt='img' />
          <IoSearch className='icons' />
      </div>
  )
}

export default Navbar