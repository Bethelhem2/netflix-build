import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useNavigate  } from "react-router-dom"

function Nav() {
  const [show, handleshow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const handleAvatarClick = () => {
    navigate('/profile');
  }
  const handleNetflixLogo = () => {
    navigate('/');
  }
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
        <img onClick={handleNetflixLogo} className="nav__logo" src="https://cdn.worldvectorlogo.com/logos/netflix-4.svg" 
        alt='netflix_logo'/>
        <img onClick={handleAvatarClick} className="nav__avatar"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuv_89dQV4F_8TqeGgd2YfxGlN3I5vllGxb3jfJu7cg&s"/>
        </div>
      
    </div>
  )
}

export default Nav
