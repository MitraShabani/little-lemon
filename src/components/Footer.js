import logo from '../Logo.svg'
import '../App.css';


function Footer() {
    return(
<footer id='pageFooter' className='container'>

<img src={logo}  width={200} height={100}/>

<ul>
    <li>
        Doormat Navigation
        {/* <ul> */}
            <li className='footerList'>
            <a href=''>About</a>
            <a href=''>Menu</a>
            <a href=''>Order Online</a>
            <a href=''>Login</a>
            </li>
        {/* </ul> */}
    </li>

    <li>
        Contact
        {/* <ul> */}
            <li className='footerList'>
            <a href=''>Adress</a>
            <a href=''>Phone number</a>
            <a>email</a>
            </li>
        {/* </ul> */}
    </li>

    <li>
        Social media
        {/* <ul> */}
            <li className='footerList'>
            <a>Instagram</a>
            <a>Facebook</a>
            </li>
        {/* </ul> */}
    </li>
</ul>

</footer>
    );
}
export default Footer;