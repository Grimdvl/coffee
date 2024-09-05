import React, { Component } from 'react';
import CardsListItem from './cards-list-item/cards-list-item.js';
import './cards-list.css';

class CardsList extends Component {
    render() {
        const { data, showCountry = true, className, itemClassName } = this.props;
        
        const elements = data.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <div key={id} className={itemClassName}>
                    <CardsListItem id={id} {...itemProps} showCountry={showCountry} />
                </div>
            );
        });

        return <div className={`cards ${className}`}>{elements}</div>;
    }
}

export default CardsList;
