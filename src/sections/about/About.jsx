import CV from "../../assets/CV-GustavoRené.pdf";
import AboutImage from '../../assets/fotopessoal.jpeg'
import { AiOutlineDownload } from "react-icons/ai";
import data from './data'
import Card from '../../components/Card'
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
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
          Com 19 anos, sou técnico em TI pelo SENAC e estudo Análise e Desenvolvimento de Sistemas na FIAP. 
          Minha flexibilidade de horários me permite abraçar novas oportunidades de aprendizado. 
          Tenho determinação para absorver conceitos rapidamente e encarar desafios com comprometimento.
          </p>
          <p>
          Em Front-end, domino HTML, CSS, JavaScript e Bootstrap, enquanto em Back-end, possuo experiência em NodeJS, Java, 
          Python, JavaScript e banco de dados SQL e NoSQL para fortalecer meu repertório técnico.
          </p>
          <p>
          Tenho muita facilidade no desenvolvimento web, especialmente no back-end, possuo habilidades nessa área e 
          busco contribuir em projetos inovadores, criando soluções sólidas para as demandas do mercado.
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
