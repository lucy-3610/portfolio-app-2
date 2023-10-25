import React from 'react';
import Header from './common/Header';

import about_img from './../images/Lucy_Swett_About.jpg';
import resume from './../images/Resume.pdf';
import Footer from './common/Footer';

class About extends React.Component {
    render() {
        return (
            <div className="about mb-5">
                <Header />
                <div className="container mb-5">
                    <div className="row">
                        <div className='col-12 d-block d-sm-flex justify-content-between mb-4'>
                            <h1>About</h1>
                            <div>
                                <a href="https://www.linkedin.com/in/lucy-swett" rel="noreferrer" target="_blank"><div className="btn-theme px-3 ml-0 ml-sm-3 mr-3 my-2 my-sm-0">Connect on LinkedIn</div></a>
                                <a href={resume} rel="noreferrer" target="_blank"><div className="btn-theme px-3">View My Resume</div></a>
                            </div>
                        </div>
                        <div className='col-lg-6 order-lg-3'>
                            <img alt="Lucy Swett" src={about_img} />
                        </div>
                        <div className='col-lg-6 order-lg-2 mt-3 mt-lg-0'>
                            <p>
                                Hi, I’m Lucy. I am a web developer in Jacksonville, Florida. In 2019, I graduated with a BA in Computer Science and minors in Graphic Design and Chinese from Lehigh University in Bethlehem, Pennsylvania. I enjoy helping improve customer engagement with products and services through my unique combination of technical and design skills.

                                <br />
                                <br />

                                In addition, I am more than just my technical and creative skills. I love the theater. It was love at first sight when I got to hear Idina Menzel sing on Broadway. I love to travel. I love learning about myself from being around different cultures. I love to read. Books transport me to a new world or someone else’s life, and I can learn from a new perspective. These passions help me bring new ideas and techniques to my professional life.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );

    }
}

export default About;