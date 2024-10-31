import React, { useState } from 'react';
import '../styles/Contact.css';
import Coordenada from '../media/Coordenada.png';
import Workers from '../media/Workers.png';

const Contact = () => {
    const [projects, setProjects] = useState([
        { name: 'Coordenada 9 Web page', description: 'The site allows users to place orders via phone, browse the virtual menu, and enjoy a beautifully designed interface crafted with pure CSS and Bootstrap, enhancing the user experience (UX).', img: Coordenada, url: '' },
        { name: 'Secure Worker Management System', description: ' Developed using PHP, HTML, JavaScript, CSS, Bootstrap, and PhpMyAdmin. Implemented Regex and prepared statements to prevent SQL injection attacks on inputs. The system allows you to add, delete, modify, and view each worker through an intuitive management panel.', img: Workers, link: 'https://github.com/raulreyes666/Mvp_workers' }
        
    ]);


   

    return (
        <div className='contactContainer' id='Experience'>
            <h1 className='TitleProjects'>My projects</h1>
            <div className='projects'>
                {
                    projects.map((project, index) => (
                        <div key={index} className='projectx'>
                            <div className='projects-items'>
                                <h1 className='projectName'>{project.name}</h1>
                                <p className='projectText'>{project.description}</p>
                                {project.img && <img src={project.img} alt={project.name} className='img-project' />}
                                <div className='overlay' >
                                    <a
                                     className='text'
                                     href={project.link} 
                                     target="_blank" 
                                     rel="noopener noreferrer">View project</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Contact;
