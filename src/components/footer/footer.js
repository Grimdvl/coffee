import './footer.css';
import logo from '../../assets/icon/coffee-beans35.svg';
import Logo from '../logo/logo.js';


const Footer = () => {
    return (
        <footer className="footer">
            <ul className='navigation'>
                <li className='navigation-link footer-link'><img src={logo} alt="logo" />Coffee house</li>
                <li className='navigation-link'>Our coffee</li>
                <li className='navigation-link'>For your pleasure</li>
            </ul>
            <Logo/>
        </footer>
    );
}

export default Footer;