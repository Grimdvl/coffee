import CardsListItem from './cards-list-item/cards-list-item.js';
import './cards-list.css';

const CardsList = ({ data, showCountry = true, className, itemClassName }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <div 
                key={id} 
                className={itemClassName}
            >
                <CardsListItem 
                    {...itemProps} 
                    showCountry={showCountry}
                />
            </div>
        );
    });

    return (
        <div className={`cards ${className}`}>
            {elements}
        </div>
    );
}

export default CardsList;
