import './portfolio.css'
import ProjectsCategories from './ProjectsCategories'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects ] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["todos", ...new Set(categories)];
  
  const filterProjectsHandler = (category) => {
    if(category === "todos") {
      setProjects(data)
      return;
    }
    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  return (
    <section id="portfolio">
        <h2>Projetos Recentes</h2>
        <p>Confira alguns dos projetos em que trabalhei recentemente. 
          Use os botões para alternar entre as diferentes categorias.
        </p>
        <div className="container portfolio__container">
          <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
          <Projects projects={projects}/>
        </div>
    </section>
  )
}

export default Portfolio