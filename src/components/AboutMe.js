import React from 'react'
import '../styles/AboutMe.css'
import { FaLinkedin, FaInstagram, FaSquareGithub} from "react-icons/fa6";




const AboutMe = () => {
  return (
    <div className='aboutMeContainer' id='Me'>
        <div className='pictureSection'>
            <img src='https://res.cloudinary.com/dmro9tys5/image/upload/f_auto,q_auto/v1/portfolio/i7kqon6asc4249sdnaxs' alt='Imagen de Raul' className='photoMe'/>
        </div>
        <div className='descriptionSection'>
            <h1 className='titleAboutMe'>
                Who am I?   {'\u{1F604}'}
            </h1>
            <p className='textAboutMe'>
            Hey, I'm Raúl Pandur – 21 years old, soon to graduate in Software Engineering from the University of Colima, Mexico (graduating in June). I create scalable solutions and have experience working with technologies like WordPress, Shopify, WooCommerce, PHP, JavaScript (React), and cloud platforms like GCP and AWS.
            </p>
            <div className='iconsSocialMedia'>
            <a href='https://www.linkedin.com/in/raul-pandur-6b0073256' target='_blank' rel='noopener noreferrer'> <FaLinkedin id='linkedIn' /></a>                
            <a href='https://www.instagram.com/raulreyes999_/' target='_blank' rel='noopener noreferrer'><FaInstagram id='ig'/></a>
                <a href='https://github.com/raulreyes666' target='_blank' rel='noopener noreferrer'><FaSquareGithub id='gitHub'/></a>
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
