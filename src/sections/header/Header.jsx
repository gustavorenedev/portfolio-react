import { useEffect } from 'react'
import HeaderImage from '../../assets/pictureHeader.svg'
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
          Olá! Sou Gustavo René, desenvolvedor .NET Júnior com especialidade em C#, JavaScript e SQL. 
          Transformo ideias em soluções práticas para pequenos negócios e designers. 
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