import ourCoffeeBg from '../../assets/img/our-coffee-bg.jpg';
import AboutOurBeans from './about-our-beans/about-our-beans.js';
import OurCoffeeFilters from './our-coffee-filters/our-coffee-filters.js';

import './our-coffee.css';

const OurCoffee = () => {
    return (
        <main className="our-coffee">
            <section className="our-coffee-head">
                <div className="our-coffee-img"><img src={ourCoffeeBg} alt="our-coffee" /></div>
                <h1 className='our-coffee-title title'>Our coffee</h1>
            </section>
            <AboutOurBeans/>
            <OurCoffeeFilters/>
        </main>
    );
}

export default OurCoffee;