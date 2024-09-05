import { useLocation } from 'react-router-dom';
import Logo from '../../logo/logo';
import './our-coffee-item.css';

const CoffeeItem = () => {
    const location = useLocation();
    const { id, imgSrc, name, country, price } = location.state || {};

    if (!location.state) {
        return <p>No data found!</p>;
    }

    return (
        <section className='about__it' key={id}>
            <div className="about__it-img">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="about__it-descr">
                <div className="descr-title subtitle">About it</div>
                <Logo />
                <div className='descr-country'>Country: {country}</div>
                <div className="descr-text about-text">
                    <span className='descr-text-about'>Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className='descr-price'>
                    <span className='descr-price-num'>{price}$</span>
                </div>
            </div>
        </section>
    );
};

export default CoffeeItem;
