import Logo from '../logo/logo.js';
import Navigation from '../navigation/navigation.js';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Navigation
                logoClass="footer-logo"
                linkClass='footer-link'/>
            <Logo/>
        </footer>
    );
}

export default Footer;