import { Link } from 'react-router-dom';
import logo from '../../assets/icon/coffee-beans35.svg';

import './navigation.css';

const Navigation = ({ logoClass = '', linkClass = '' }) => {
    return (
        <ul className='navigation'>
            <img className={logoClass} src={logo} alt="logo"/>
            <li className='navigation-link'>
                <Link className={`navigation-link-item ${linkClass}`} to="/coffee">Coffee house</Link>
            </li>
            <li className='navigation-link'>
                <Link className={`navigation-link-item ${linkClass}`} to="/our-coffee">Our coffee</Link>
            </li>
            <li className='navigation-link'>
                <Link className={`navigation-link-item ${linkClass}`} to="/for-your-pleasure">For your pleasure</Link>
            </li>
        </ul>
    );
}

export default Navigation;
