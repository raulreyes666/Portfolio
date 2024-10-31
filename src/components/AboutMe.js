import React from 'react'
import '../styles/AboutMe.css'
import Photo from '../media/pic.jpg'
import { FaLinkedin, FaInstagram, FaSquareGithub} from "react-icons/fa6";




const AboutMe = () => {
  return (
    <div className='aboutMeContainer' id='Me'>
        <div className='pictureSection'>
            <img src={Photo} className='photoMe'/>
        </div>
        <div className='descriptionSection'>
            <h1 className='titleAboutMe'>
                Who am I?   {'\u{1F604}'}
            </h1>
            <p className='textAboutMe'>
            I'm Raúl Pandur, a 21-year-old Software Engineering student at the University of Colima in Mexico. I am currently focusing on frontend development using React. ⚛️


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
