import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <div className='containerNav'>
      <button className='navElement' id='clicks' onClick={() => scrollToElement('Me')}>About me</button>
      <button className='navElement' onClick={() => scrollToElement('Skills')}>Skills</button>
      <button className='navElement' onClick={() => scrollToElement('Experience')}>Projects</button>
      <button className='navElement' onClick={() => scrollToElement('Contact')}>Contact me</button>  

    </div>
    
  )
}

export default NavBar
