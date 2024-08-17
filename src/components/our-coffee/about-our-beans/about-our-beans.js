import Logo from '../../logo/logo.js';
import AboutOurBeansImg from '../../../assets/img/AboutOurBeans.jpg';

import './about-our-beans.css';

const AboutOurBeans = () => {
    return (
        <section className='about__beans'>
            <div className="about__beans-img">
                <img src={AboutOurBeansImg} alt="about our beans" />
            </div>
            <div className="about__beans-descr">
                <div className="descr-title subtitle">About our beans</div>
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
            <div className="divider"></div>
        </section>
    );
}

export default AboutOurBeans;