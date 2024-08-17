import './cards-list-item.css';

const CardsListItem = (props)  => {
    const {imgSrc, name, country, price, showCountry, className} = props;

    return (
        <div className={`cards-item ${className}`}>
            <img className="cards-item-img" src={imgSrc} alt="coffee" />
            <p className='cards-item-name'>{name}</p>
            {showCountry && <p className='cards-item-country'>{country}</p>}
            <span className='cards-item-price'>{price}$</span>
        </div>
    );
}

export default CardsListItem;