import CV from "../../assets/CV-GustavoReneDias.pdf";
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
            Olá, sou Gustavo! Atualmente, sou desenvolvedor .NET Júnior e
            estudante de Análise e Desenvolvimento de Sistemas na FIAP. Moro em
            São Paulo, capital, e estou sempre em busca de aprender mais e criar
            novos projetos inovadores.
          </p>

          <p>
            Minhas habilidades abrangem diversas áreas: <br />
            <strong>Front-end:</strong> React, JavaScript, TypeScript e Tailwind
            CSS. <br />
            <strong>Back-end:</strong> C#, .NET Core, APIs RESTful,
            microsserviços, Clean Code. <br />
            <strong>Banco de Dados:</strong> PL/SQL, SQL (SQL Server, MySQL,
            Oracle SQL), e DbBeaver. <br />
            <strong>ORM e Consultas:</strong> Entity Framework, LINQ e Dapper.
            <br />
            <strong>Arquitetura e Padrões:</strong> Clean Architecture, Onion,
            MVC, 3 camadas, Swagger, Repository.
            <br />
            <strong>Testes Unitários:</strong> xUnit com AutoBogus e Microsoft
            Test Framework.
            <br />
            <strong>DevOps Tools:</strong> Azure DevOps, Docker e serviços em
            nuvem.
            <br />
            <strong>Controle de Versão:</strong> Git e GitHub. <br />
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
