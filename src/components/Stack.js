import React, { useState } from 'react';
import '../styles/Stack.css';

import {
  FaGit,
  FaDatabase,
  FaCss3Alt,
  FaPhp,
  FaHtml5,
  FaReact,
  FaGithub,
  FaFigma,
  FaWordpress,
  FaShopify,
  FaAws
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiGooglecloud } from "react-icons/si";

const Stack = () => {
  const [techs] = useState([
    { name: 'CSS', img: <FaCss3Alt color="#264de4" />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', img: <IoLogoJavascript color="#f0db4f" />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML', img: <FaHtml5 color="#e44b23" />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'PHP', img: <FaPhp color="#4f5b93" />, link: 'https://www.php.net/' },
    { name: 'React', img: <FaReact color="#61dafb" />, link: 'https://reactjs.org/' },
    { name: 'SQL', img: <FaDatabase color="purple" />, link: 'https://aws.amazon.com/es/what-is/sql/' },
    { name: 'GitHub', img: <FaGithub color="#ffffff" />, link: 'https://docs.github.com/en' },
    { name: 'Git', img: <FaGit color="#ffffff" />, link: 'https://git-scm.com/doc' },
    { name: 'Figma', img: <FaFigma color="#E2BFD9" />, link: 'https://help.figma.com/hc/en-us' },
    { name: 'WordPress', img: <FaWordpress color="#ffffff" />, link: 'https://wordpress.com/' },
    { name: 'Shopify', img: <FaShopify color="#008f39" />, link: 'https://www.shopify.com/' },
    { name: 'AWS', img: <FaAws color="#d31e1e" />, link: 'https://aws.amazon.com/' },
    { name: 'Google Cloud', img: <SiGooglecloud color="#ffffff" />, link: 'https://cloud.google.com/' }
  ]);

  return (
    <div className="tech-stack" id="Skills">
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
