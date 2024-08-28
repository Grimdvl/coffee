import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/header.js';
import CoffeeHouse from '../coffee-house/coffee-house.js';
import OurCoffee from '../our-coffee/our-coffee.js';
import CoffeeItem from '../our-coffee/our-coffee-item/our-coffee-item.js';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure.js';
import Footer from '../footer/footer.js';

import './app.css';

const App = () => (
    <Router>
        <div>
            <header className='header'>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path="/coffee" element={<CoffeeHouse />} />
                    <Route path="/our-coffee" element={<OurCoffee />} />
                    <Route path="/our-coffee-item/:id" element={<CoffeeItem />} />
                    <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </Router>
);

export default App;
