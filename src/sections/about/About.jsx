import CV from "../../assets/CV-GustavoRené.pdf";
import AboutImage from '../../assets/fotopessoal.jpeg'
import { AiOutlineDownload } from "react-icons/ai";
import data from './data'
import Card from '../../components/Card'
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
            <div className="about__portrait">
                <img src={AboutImage} alt="About Image" />
            </div>
        </div>
        <div className="about__right">
          <h2>Sobre mim</h2>
          <div className="about__cards">
              {
                  data.map(item => (
                      <Card key={item.id} className="about__card">
                          <span className="about__card-icon">{item.icon}</span>
                          <h5>{item.title}</h5>
                          <small>{item.desc}</small>
                      </Card>
                  ))
              }
          </div>
          <p>
            Tenho 19 anos, sou técnico em TI pelo SENAC, e no momento curso
            Análise e Desenvolvimento de Sistemas na FIAP. Possuo
            disponibilidade de horários, perfil persistente para aprender novos
            conceitos em pouco tempo e comprometimento para novas oportunidades.
          </p>
          <p>
            Possuo conhecimentos na parte de Front-end: HTML, CSS, JavaScript,
            Bootstrap e em Back-end: Java e MySQL. Atualmente sigo estudando as
            tecnologias com foco em Back-end: React, JavaScript, NodeJS e
            Python.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <AiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
