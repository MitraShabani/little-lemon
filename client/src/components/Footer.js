import logo from '../Logo.svg'
import '../App.css';


function Footer() {
    return(
<footer id='pageFooter' className='container'>

<img src={logo}  width={200} height={100}/>

<ul>
    <h5>
    Doormat Navigation
    </h5>
            <li className='footerList'>
            <a href=''>About</a>
            <a href=''>Menu</a>
            <a href=''>Order Online</a>
            <a href=''>Login</a>
    </li>
</ul>


<ul>
    <h5>
    Contact
    </h5>
            <li className='footerList'>
            <a href=''>Adress</a>
            <a href=''>Phone number</a>
            <a>email</a>
            </li>
</ul>

<ul>
    <h5>
    Social media
    </h5>
            <li className='footerList'>
            <a>Instagram</a>
            <a>Facebook</a>
            </li>
</ul>

</footer>);
}
export default Footer;