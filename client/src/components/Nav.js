import '../App.css';
import {BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage.js';

function Nav() {
return(
<nav id='mainNav'>

   <ul>
      <li>
         <Link to="/">Home</Link>
      </li>
      <li>
         <a href="">
            About
         </a>
      </li>
      <li>
         <a href="">
            Menu
         </a>
      </li>
      <li>
         <Link to="/booking">Reservation</Link>
      </li>
      <li>
         <a href="">
            Order online
         </a>
      </li>
      <li>
         <a href="">
         Login
         </a>
      </li>
   </ul>

</nav>
);
}
export default Nav;