import Logo from '../logo/logo.js';
import aromisticoItem from '../../assets/img/Aromistico-item.jpg';
import { useParams } from 'react-router-dom';
import './coffee-item.css';

const CoffeeItem = ({ data }) => {
    const { id } = useParams();
    const item = data.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>Coffee not found</div>;
    }

    return (
        <section className='about__it'>
            <div className="about__it-img">
                <img src={aromisticoItem} alt="about it" />
            </div>
            <div className="about__it-descr">
                <div className="descr-title subtitle">About it</div>
                <Logo/>
                <div className='descr-country'>Country: {item.country}</div>
                <div className="descr-text about-text">
                    <span className='descr-text-about'>Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='descr-price'>
                    <span className='descr-price-num'>{item.price}$</span>
                </div>
            </div>
        </section>
    );
};

export default CoffeeItem;