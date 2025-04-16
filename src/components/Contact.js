import React, { useState } from 'react';
import '../styles/Contact.css';
const Contact = () => {
    const [projects, setProjects] = useState([
        {
            name: 'Secure Worker Management System',
            description: 'Developed using PHP, HTML, JavaScript, CSS, Bootstrap, and PhpMyAdmin. Implemented Regex and prepared statements to prevent SQL injection attacks on inputs. The system allows you to add, delete, modify, and view each worker through an intuitive management panel.',
            img: 'https://res.cloudinary.com/dmro9tys5/image/upload/f_auto,q_auto/v1/portfolio/e0ymgzifogjbcr2ujsvx',
            link: 'https://github.com/raulreyes666/Mvp_workers'
        },
        {
            name: 'Coordenada 9 Web Site',
            description: 'The site allows users to place orders via phone, browse the virtual menu, and enjoy a beautifully designed interface crafted with pure CSS and Bootstrap, enhancing the user experience (UX).',
            img: 'https://res.cloudinary.com/dmro9tys5/image/upload/f_auto,q_auto/v1/portfolio/smg6tqjshryznahqzzpy',
            url: '#'
        },
        {
            name: 'Mexican Products Online Store',
            description: 'Built with Shopify, this e-commerce store sells traditional Mexican products. It includes integrated auto-invoicing and automates shipping processes using Skydropx, ensuring a smooth customer experience.',
            img: 'https://res.cloudinary.com/dmro9tys5/image/upload/f_auto,q_auto/v1/portfolio/zeo4otemklycpmmx8dwn',
            link: 'https://marea.pw/'
        },
        {
            name: 'Consultant Web Page',
            description: 'Developed using WordPress in collaboration with Optinpress. The website presents professional consulting services with a clean and modern design tailored to client needs.',
            img: 'https://res.cloudinary.com/dmro9tys5/image/upload/f_auto,q_auto/v1/portfolio/eacmkz51bbiboczki1cb',
            link: 'https://consultorsin.com/'
        },
        {
            name: 'Dental Website with Cloud Services',
            description: 'A website for dentists that uses Google Cloud Platform (GCP) to send emails securely. It also integrates ReCaptcha V3 to prevent spam and enhance security for patient interactions. BackEnd is hosted by Amazon Web Services.',
            img: 'https://res.cloudinary.com/dmro9tys5/image/upload/f_auto,q_auto/v1/portfolio/akn58r0l1zjvgax8c9s5',
            link: '#',
            
        }, {
            name: 'Automated Business Web Platform',
            description: 'Fully developed in WordPress using the OptimizePress plugin. This website integrates several automation tools for invoicing, and connects directly to Pipedrive CRM to register leads generated through Meta and Google Ads campaigns. The system ensures that every incoming visitor from ad traffic is tracked, captured, and stored as a lead for later follow-up, streamlining the client acquisition process.',
            img: 'https://res.cloudinary.com/dmro9tys5/image/upload/f_auto,q_auto/v1/portfolio/kubg1ijvepqddctgahq0', 
            link: 'https://tecnocible.net'
        }
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
