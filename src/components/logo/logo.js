import beans from '../../assets/icon/beans.svg';
import './logo.css';

const Logo = ({className}) => {
    return (
        <div className={`logo ${className}`}><img src={beans} alt="beans" /></div>
    );
}

export default Logo;