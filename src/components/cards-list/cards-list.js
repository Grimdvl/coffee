import CardsListItem from './cards-list-item/cards-list-item.js';

import './cards-list.css';

const CardsList = ({data, showCountry = true, className, itemClassName})  => {
    const elements = data.map((item, index) => {
        const {id, ...itemProps} = item;

        return (
            <CardsListItem key={id || index}
            {...itemProps}
            showCountry={showCountry} 
            className={itemClassName}/>
        );
    });

    return (
        <div className={`cards ${className}`}>
            {elements}
        </div>
    );
}

export default CardsList;