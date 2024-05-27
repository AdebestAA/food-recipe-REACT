import React from 'react'
import Search from './Search'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MdOutlineFavorite } from "react-icons/md";
import { MdHome } from "react-icons/md";

const Navbar = () => {
  // window.location
   const location = useLocation();
  const { hash, pathname, search } = location;
  // console.log(pathname);
  
  // console.log(window.location.href);
  return (
    <nav className='font-semibold  flex items-center justify-between py-4 md:px-8 px-2  text-slate-600'>
      <NavLink to={"/"}>
        {/* <h1 className={"text-[12px]sm:text-lg"}>Food Recipe</h1> */}
        <img src='/food-logo.png' alt='food logo' className='md:w-[5rem] w-[4rem]'/>
      </NavLink>
   
<div className='flex space-x-3 ml-[4px] md:w-[8%] justify-between '>
    <NavLink to={"/"} className={`${pathname === "/" ? "text-cardColor md:text-2xl text-[23px]":"md:text-2xl text-[23px] "}`}>< MdHome/></NavLink>
    <NavLink to={"/favorites"}className={`${pathname === "/favorites" ? "text-cardColor md:text-2xl text-[23px]":"md:text-2xl text-[23px] "}`}>< MdOutlineFavorite/></NavLink>
</div>
    </nav>
  )
}

export default Navbar
