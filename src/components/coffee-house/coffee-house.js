import About from './about/about.js';
import Logo from '../logo/logo.js';
import OurBest from './our-best/our-best.js';

import './coffee-house.css';
import bg from '../../assets/img/coffee-house.jpg';

const CoffeeHouse = () => {
    return (
        <main className='coffee-house'>
            <section className='coffee-house-main'>
                <img className='main-bg' src={bg} alt="main-bg" />
                <h1 className='main-title'>Everything You Love About Coffee</h1>
                <Logo className='main-logo'/>
                <h2 className='main-subtitle subtitle'>We makes every day full of energy and taste <br /> Want to try our beans?</h2>
                <button className='main-button'>More</button>
            </section>
            <About/>
            <OurBest/>
        </main>
    );
}

export default CoffeeHouse;