import React, { useState } from 'react';
import '../styles/Stack.css';

import {  FaGit,FaDatabase, FaCss3Alt, FaBootstrap, FaPhp, FaHtml5, FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Stack = () => {
  const [techs, setTechs] = useState([
    { name: 'CSS', img: <FaCss3Alt color="#264de4" />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', img: <IoLogoJavascript color="#f0db4f" />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Html', img: <FaHtml5 color="#e44b23" />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'PHP', img: <FaPhp color="#4f5b93" />, link: 'https://www.php.net/' },
    { name: 'Bootstrap', img: <FaBootstrap color="#563d7c" />, link: 'https://getbootstrap.com/' },
    { name: 'React', img: <FaReact color="#61dafb" />, link: 'https://reactjs.org/' },
    { name: 'NodeJS', img: <FaNodeJs color="#3c873a" />, link: 'https://nodejs.org/' },
    { name: 'SQL', img: <FaDatabase color="purple" />, link: 'https://aws.amazon.com/es/what-is/sql/'},
    { name: 'Github', img: <FaGithub  color='#ffffff'/>, link:'https://docs.github.com/en'},
    { name: 'Git', img: <FaGit  color='#ffffff'/>, link:'https://git-scm.com/doc'},
    { name: 'Figma', img: <FaFigma color='#E2BFD9'/>, link:'https://help.figma.com/hc/en-us'}


  ]);

  return (
    <div className="tech-stack" id='Skills'>
      {techs.map((tech, index) => (
        <a 
          key={index} 
          href={tech.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="tech-item"
        >
          <div className="tech-logo">
            {tech.img}
          </div>
          <p>{tech.name}</p>
        </a>
      ))}
    </div>
  );
};

export default Stack;
