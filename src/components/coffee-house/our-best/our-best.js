/* eslint-disable no-unused-vars */

import ourBestImg from '../../../assets/img/our-best.jpg';
import CardsList from '../../cards-list/cards-list.js';
import { Component } from 'react';

import './our-best.css';
import solimo from '../../../assets/img/solimo.jpg';
import presto from '../../../assets/img/presto.jpg';
import aromistico from '../../../assets/img/aromistico.jpg';

class OurBest extends Component {
    constructor(props) {
		super(props);
		this.state = {
			data: [
				{imgSrc: solimo, name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 10.73, id: 1},
				{imgSrc: presto, name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: 15.99, id: 2},
				{imgSrc: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, id: 3},
			],
			term: '',
			filter: 'all'
		}
		this.maxId = 3;
	}

    render() {
        const {data, term, filter} = this.state;
        return (
            <section className='our-best'>
                <div className='our-best-bg'><img src={ourBestImg} alt="" /></div>
                <h2 className='our-best-subtitle subtitle'>Our best</h2>
                <CardsList data={data}
                showCountry={false}/>
            </section>
        );
    }
}

export default OurBest;