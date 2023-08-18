import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import {showModalContext} from '../../context/modal-context'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
          <a href="index.html" className="nav__logo">
          &lt; <strong class="color">G</strong>r/ &gt;
          </a>
          <ul className="nav__menu">
            {
              data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
            }
          </ul>
          <button id="theme__icon"><IoIosColorPalette/></button>
        </div>
    </nav>
  )
}

export default Navbar