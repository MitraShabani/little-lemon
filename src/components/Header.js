import '../App.css';
import logo from '../Logo.svg'
import Nav from './Nav.js';
import hamburgerMenu from '../images/hamburgerMenu.svg';

function Header() {
 return(
    <header id='header' className='container'>
      <img src={logo} className='logo'/>
      <Nav/>
      <button className='hamburgerMenu'>
      <img src={hamburgerMenu} />
      </button>
    </header>
 );
}
export default Header;