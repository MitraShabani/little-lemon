import restauranfood from '../images/restauranfood.jpg'
import '../App.css';
import Nav from './Nav.js';

function Header() {
 return(
    <header id='pageHeader' className='container'>
    <Nav/>

   <section className='header-description'>

   <div>
    <h1>
      Little Lemon
    <br/>
    <span>chicago</span>
    </h1>
    <p> description ...</p>
    <button>Reserve a Table</button>
    </div>

    <img src={restauranfood}></img>
    </section>

    </header>
 );
}
export default Header;