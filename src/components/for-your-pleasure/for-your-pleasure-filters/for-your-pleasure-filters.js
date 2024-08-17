import CardsList from '../../cards-list/cards-list.js';
import { Component } from 'react';

import './for-your-pleasure-filters.css';
import aromistico from '../../../assets/img/aromistico.jpg';
import solimo from '../../../assets/img/solimo.jpg';
import presto from '../../../assets/img/presto.jpg';

class ForYourPleasureFilters extends Component {
    constructor(props) {
		super(props);
		this.state = {
			data: [
				{imgSrc: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 1},
				{imgSrc: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, id: 2},
				{imgSrc: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, id: 3},
				{imgSrc: solimo, name: 'Solimo Coffee Beans 2 kg', country: 'Columbia', price: 6.99, id: 4},
				{imgSrc: solimo, name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 6.99, id: 5},
				{imgSrc: presto, name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 6.99, id: 6},
				{imgSrc: presto, name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 6.99, id: 7},
			],
			term: '',
			filter: 'all'
		}
		this.maxId = 7;
	}

	searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

	onUpdateSearch = (term) => {
        this.setState({term});
    }

	filterCountry = (items, filter) => {
		if (filter === 'all') {
			return items;
		}
	
		return items.filter(item => item.country === filter);
	}

	onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
		const visibleData = this.filterCountry(this.searchEmp(data, term), filter);
        return (
            <section className='filters__wrapper'>
                <CardsList 
					data={visibleData}
                	showCountry={true}
					className="for-your-pleasure__cards"
					itemClassName="our-coffee__cards-item"/>
            </section>
        );
    }
}

export default ForYourPleasureFilters;