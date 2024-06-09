import './header.css';
import logo from '../../assets/icon/coffee-beans35.svg';

const Header = () => {
    return (
        <ul className='navigation'>
            <li className='navigation-link'><img src={logo} alt="logo" />Coffee house</li>
            <li className='navigation-link'>Our coffee</li>
            <li className='navigation-link'>For your pleasure</li>
        </ul>
    );
}

export default Header;