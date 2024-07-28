import CV from "../../assets/CV-GustavoRene.pdf";
import AboutImage from "../../assets/fotopessoal.jpeg";
import { AiOutlineDownload } from "react-icons/ai";
import data from "./data";
import Card from "../../components/Card";
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
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Olá, sou Gustavo! Atualmente, sou desenvolvedor .NET Júnior na
            Redeservice e estudante de Análise e Desenvolvimento de Sistemas na
            FIAP. Moro em São Paulo, capital, e estou sempre em busca de
            aprender mais e criar novos projetos inovadores.
          </p>

          <p>
            Minhas habilidades abrangem diversas áreas: <br />
            <strong>Front-end:</strong> React com JavaScript, TypeScript e
            Tailwind CSS.
            <br />
            <strong>Back-end:</strong> C#, Java, e frameworks como .NET Core e
            Spring Boot. <br />
            <strong>Banco de Dados:</strong> PL/SQL, SQL (SQL Server, MySQL e
            Oracle SQL). <br />
            <strong>Arquitetura de Projetos:</strong> API Rest, Microsserviços,
            Serviço de Mensageria, MVC e Repository. <br />
            <strong>DevOps Tools:</strong> Azure, Docker e Serviços em Nuvem.
            <br />
            <strong>Controle de Versão:</strong> Git e GitHub.
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
