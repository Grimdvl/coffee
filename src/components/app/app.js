import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/header.js';
import CoffeeHouse from '../coffee-house/coffee-house.js';
import OurCoffee from '../our-coffee/our-coffee.js';
import CoffeeItem from '../our-coffee/our-coffee-item/our-coffee-item.js';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure.js';
import Footer from '../footer/footer.js';
import AboutOurBeans from '../our-coffee/about-our-beans/about-our-beans.js';
import OurCoffeeFilters from '../our-coffee/our-coffee-filters/our-coffee-filters.js';

import './app.css';

const App = () => (
    <Router>
        {/* <div> */}
            <header className='header'>
                <Header />
            </header>
            {/* <main> */}
                <Routes>
                    <Route path="/coffee" element={<CoffeeHouse />} />
                    <Route path="/our-coffee" element={<OurCoffee />}>
                        <Route index element={<><AboutOurBeans /><OurCoffeeFilters /></>} />
                        <Route path=":id" element={<CoffeeItem />} />
                    </Route>
                    <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
                </Routes>
            {/* </main> */}
            <Footer />
        {/* </div> */}
    </Router>
);

export default App;
