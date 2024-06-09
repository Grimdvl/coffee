import CardsListItem from '../cards-list-item/cards-list-item';

import './cards-list.css';

const CardsList = ({data, showCountry = true})  => {
    const elements = data.map((item, index) => {
        const {id, ...itemProps} = item;

        return (
            <CardsListItem key={id || index}
            {...itemProps}
            showCountry={showCountry} />
        );
    });

    return (
        <div className="cards">
            {elements}
        </div>
    );
}

export default CardsList;