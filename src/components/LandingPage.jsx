import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';

import lp_img from '../images/Lucy Swett Portfolio LP BG.png';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <Header />
                <div className="lp-bg" style={{ opacity: "60%" }}></div>

                <div className="container z-1">
                    <div className="row">
                        <div className="col-auto">
                            <h2>Hi, I'm</h2>
                            <h1>Lucy Swett</h1>
                            <h3>Web Developer</h3>
                            <p>Motivated young professional seeking to<br className="d-none d-lg-block d-xl-none" /> empower people through technology.</p>
                            <Link className="btn-theme" to="/portfolio">PORTFOLIO</Link>
                        </div>
                    </div>
                </div>
                <img className="lp-img" src={lp_img} />
            </div>
        );

    }
}

export default LandingPage;