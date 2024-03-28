import React from "react";



const ProjectsContainer = () => {
    const handleClick = () => {
        alert('Ainda não há projetos neste canal !')
    }
    
    return <section className="projects-container">
        <h2>Projetos</h2>
        <p>Veja os Principais projetos que desenvolvi utilizando algumas dessas tecnologias!</p>
        <a href="#" className="btn" onClick={handleClick}>
            Ver Projetos
        </a>
    </section>


}



export default ProjectsContainer