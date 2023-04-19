import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
      <div className='navbar'>
     <ul>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      <Link to='/'> <li>Home</li></Link>
      <Link to='/about'> <li>About</li></Link>
      <Link to='/movies'> <li>Movies</li></Link>
      
      <Link to='/sign' ><li className='si'>sign in </li></Link>
      <Link to='/login' ><li className='si' >log in </li></Link>
      
      </ul>
     
    </div>
   
  )
}

export default NavBar
