import '../App.css';
import logo from '../Logo.svg'

function Nav() {
return(
    <nav id='mainNav'>
  <img src={logo}/>
<ul>
    <li>
   <a href="">
Home
  </a>
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
   <a href="">
Reservation
   </a>
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