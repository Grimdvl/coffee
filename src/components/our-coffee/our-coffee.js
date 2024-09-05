import { Outlet } from 'react-router-dom';
import ourCoffeeBg from '../../assets/img/our-coffee-bg.jpg';

import './our-coffee.css';

const OurCoffee = () => {
    return (
        <main className="our-coffee">
            <head className="our-coffee-head">
                <div className="our-coffee-img"><img src={ourCoffeeBg} alt="our-coffee" /></div>
                <h1 className='our-coffee-title title'>Our coffee</h1>
            </head>
            <Outlet />
        </main>
    );
}

export default OurCoffee;
