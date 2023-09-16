import React from 'react'
import { useGlobalContext } from './utils/global.context'
import { Link } from "react-router-dom"
import "../Styles/navbarStyles.css"


const Navbar = () => {
  const {stateTheme, dispatchTheme} = useGlobalContext();

  const changeTheme = () => {
    if (stateTheme.t) {
      dispatchTheme({type: "SWITCH_DARK"})
    } else {
       dispatchTheme({type: "SWITCH_LIGHT"})
      }
  }

  return (

    <div className='navbar'>
      <div className='odonto'>
          <h4 className='title'> ODONTOLOGÍA </h4>
          <img className='footer-logo' src="/images/DH.png" alt="" width={300} />
      </div>
      <nav>
        <Link to="/"> <p className='nav-h3'> Home </p> </Link>
        <Link to="/contact"> <p className='nav-h3'> Contacto </p> </Link>
        <Link to="/favs"> <p className='nav-h3'> Favoritos </p> </Link>

        <button className='theme-btn' onClick={changeTheme}> 
        {
          stateTheme.t ? "Light Mode" : "Dark Mode"
        } 
        </button>
      </nav>
    </div>
  )
}

export default Navbar