import { Component } from 'react';
import Header from '../header/header.js';
import CoffeeHouse from '../coffee-house/coffee-house.js';
import Footer from '../footer/footer.js';

import './app.css';

class App extends Component {
	render() {
		return (
			<>
				<header className='header'>
					<Header/>
				</header>
				<CoffeeHouse/>
				<Footer/>
			</>
		);
	}
}

export default App;
