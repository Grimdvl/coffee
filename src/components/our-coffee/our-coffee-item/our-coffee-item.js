import { useParams } from 'react-router-dom';
import Logo from '../../logo/logo';
import aromisticoItem from '../../../assets/img/Aromistico-item.jpg';
import './our-coffee-item.css';

const CoffeeItem = () => {
    const { id } = useParams();
    const coffeeData = [
        { imgSrc: aromisticoItem, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 1 },
        { imgSrc: aromisticoItem, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 7.99, id: 2 },
        { imgSrc: aromisticoItem, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 8.99, id: 3 },
        { imgSrc: aromisticoItem, name: 'Solimo Coffee Beans 2 kg', country: 'Columbia', price: 12.99, id: 4 },
        { imgSrc: aromisticoItem, name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 4.99, id: 5 },
        { imgSrc: aromisticoItem, name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 2.99, id: 6 },
        { imgSrc: aromisticoItem, name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 5.99, id: 7 },
    ];
    
    const coffee = coffeeData.find(item => item.id === parseInt(id));

    if (!coffee) {
        return <div>Coffee not found</div>;
    }

    const { imgSrc, name, country, price } = coffee;

    return (
        <section className='about__it'>
            <div className="about__it-img">
                <img src={imgSrc} alt="about it" />
            </div>
            <div className="about__it-descr">
                <div className="descr-title subtitle">About it</div>
                <Logo />
                <div className='descr-country'>Country: {country}</div>
                <div className="descr-text about-text">
                    <span className='descr-text-about'>Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='descr-price'>
                    <span className='descr-price-num'>{price}$</span>
                </div>
            </div>
        </section>
    );
};

export default CoffeeItem;
