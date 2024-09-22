import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoMdPerson } from "react-icons/io";

export const Nav = () => {
  return (
    <div className='hi'>
      <img id='logo' src="khajaghar.jpg" alt="" />
      <ul className='nav-ul'>

        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/meun'><li>
          
          <select id="select-1" >
          <option >Menu</ option>
          <option >2</ option>
          <option >3</ option>
        </select>
        </li></NavLink>
        <NavLink to='/service'><li>
        <select  id="select-2">
          <option >Services</ option>
          <option >2</ option>
          <option >3</ option>
        </select>
          </li></NavLink>
        <form action="">
          <IoSearchOutline className='search-icon'/>
          <input type="text" id='search' placeholder='Search a food,restaurant...' />
        </form>
<div className='icons-coll'>
        <NavLink to='/' id='shop'><li><AiOutlineShoppingCart/></li></NavLink>
        
        <NavLink to='/'id='person-log' ><li> <span><IoMdPerson/> </span><pre id='login'>Log in</pre></li></NavLink>
        
       
        <NavLink to='/EN'><li>
        <select  id="select-3">
          <option >EN</ option>
          <option >Spanish</ option>
          
        </select>
          </li></NavLink>
          </div>


      </ul>


    </div>
  )
}