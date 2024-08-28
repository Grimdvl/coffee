import { Link } from 'react-router-dom';
import './cards-list-item.css';

const CardsListItem = ({ id, imgSrc, name, country, price, showCountry, className }) => {
    return (
        <Link to={`/our-coffee-item/${id}`} className={`cards-item ${className}`}>
            <img className="cards-item-img" src={imgSrc} alt={name} />
            <p className='cards-item-name'>{name}</p>
            {showCountry && <p className='cards-item-country'>{country}</p>}
            <span className='cards-item-price'>{price}$</span>
        </Link>
    );
}

export default CardsListItem;
