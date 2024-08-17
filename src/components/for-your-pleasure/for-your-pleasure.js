import forYourPleasureBg from '../../assets/img/for-your-pleasure-bg.jpg';
import AboutOurGoods from './about-our-goods/about-our-goods.js';
import ForYourPleasureFilters from './for-your-pleasure-filters/for-your-pleasure-filters.js';

import './for-your-pleasure.css';

const ForYourPleasure = () => {
    return (
        <main className="for-your-pleasure">
            <section className="for-your-pleasure-head">
                <div className="for-your-pleasure-img"><img src={forYourPleasureBg} alt="our-coffee" /></div>
                <h1 className='for-your-pleasure-title title'>For your pleasure</h1>
            </section>
            <AboutOurGoods/>
            <ForYourPleasureFilters/>
        </main>
    );
}

export default ForYourPleasure;