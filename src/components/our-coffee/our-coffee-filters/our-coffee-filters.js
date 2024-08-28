import CardsList from '../../cards-list/cards-list.js';
import { Component } from 'react';
import AppFilter from '../../app-filter/app-filter.js';
import SearchPanel from '../../search-panel/search-panel.js';
import './our-coffee-filters.css';
import aromistico from '../../../assets/img/aromistico.jpg';
import solimo from '../../../assets/img/solimo.jpg';
import presto from '../../../assets/img/presto.jpg';

class OurCoffeeFilters extends Component {
    state = {
        data: [
            { imgSrc: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: 1 },
            { imgSrc: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 7.99, id: 2 },
            { imgSrc: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 8.99, id: 3 },
            { imgSrc: solimo, name: 'Solimo Coffee Beans 2 kg', country: 'Columbia', price: 12.99, id: 4 },
            { imgSrc: solimo, name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 4.99, id: 5 },
            { imgSrc: presto, name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 2.99, id: 6 },
            { imgSrc: presto, name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 5.99, id: 7 },
        ],
        term: '',
        filter: null,
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (items, filter) => {
        if (filter) {
            return items.filter(item => item.country === filter);
        }
        return items;
    }

    onFilterSelect = (selectedFilter) => {
        this.setState(({ filter }) => ({
            filter: filter === selectedFilter ? null : selectedFilter
        }));
    }

    render() {
        const { data, term, filter } = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <section className='filters__wrapper'>
                <div className='our-coffee__filters'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <CardsList 
                    data={visibleData}
                    showCountry={true}
                    className="our-coffee__cards"
                    itemClassName="our-coffee__cards-item"
                />
            </section>
        );
    }
}

export default OurCoffeeFilters;
