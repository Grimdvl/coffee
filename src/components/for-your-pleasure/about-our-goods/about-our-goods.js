import Logo from '../../logo/logo.js';
import AboutOurGoodsImg from '../../../assets/img/AboutOurGoods.jpg';

import './about-our-goods.css';

const AboutOurGoods = () => {
    return (
        <section className='about__goods'>
            <div className="about__goods-img">
                <img src={AboutOurGoodsImg} alt="about our goods" />
            </div>
            <div className="about__goods-descr">
                <div className="descr-title subtitle">About our Goods</div>
                <Logo/>
                <div className="descr-text about-text">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions.
                <br />
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                </div>
            </div>
            <div className="divider second__divider"></div>
        </section>
    );
}

export default AboutOurGoods;