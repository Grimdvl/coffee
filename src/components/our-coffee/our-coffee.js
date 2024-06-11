import ourCoffeeBg from '../../assets/img/our-coffee-bg.jpg';

import './our-coffee.css';

const OurCoffee = () => {
    return (
        <section className="our-coffee">
            <div className="our-coffee-img"><img src={ourCoffeeBg} alt="our-coffee" /></div>
            <h1 className='main-title'>Our coffee</h1>
        </section>
    );
}

export default OurCoffee;