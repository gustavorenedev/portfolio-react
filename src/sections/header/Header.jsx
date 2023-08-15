import HeaderImage from '../../assets/fotopessoal.jpeg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
        <div className="container header__container">
          <div className="header__profile">
            <img src={HeaderImage} alt="personal photo" />
          </div>
          <h3>Gustavo René</h3>
          <p>
          Olá! Sou Gustavo René, desenvolvedor Back-end com especialidade em JavaScript, NodeJS e SQL. 
          Ajudo pequenos negócios e designers a colocarem em prática boas ideias. 
          </p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Vamos conversar ?</a>
            <a href="#portfolio" className='btn light'>Meu trabalho</a>
          </div>
          <div className="header__socials">
            {
              data.map(item => <a key={item.id} href={item.link} target="_blank"
              rel="nooper noreferrer">{item.icon}</a>)
            }
          </div>
        </div>
    </header>
  )
}

export default Header