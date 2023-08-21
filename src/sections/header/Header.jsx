import { useEffect } from 'react'
import HeaderImage from '../../assets/fotopessoal.jpeg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

  return (
    <header id="header">
        <div className="container header__container">
          <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="personal photo" />
          </div>
          <h3 data-aos="fade-up">Gustavo René</h3>
          <p data-aos="fade-up">
          Olá! Sou Gustavo René, desenvolvedor Back-end com especialidade em JavaScript, NodeJS e SQL. 
          Ajudo pequenos negócios e designers a colocarem em prática boas ideias. 
          </p>
          <div className="header__cta" data-aos="fade-up">
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