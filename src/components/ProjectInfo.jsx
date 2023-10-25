import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import ImageSlideshow from './ImageSlideshow';
import PortfolioSlider from './PortfolioSlider';

import ibwc from './../images/Projects/IBWC.png';
import bchs from './../images/Projects/BCHS_cropped.png';
import buckeye from './../images/Projects/Buckeye_Blueprint.png';
import chemours from './../images/Projects/Chemours.png';
import titanium from './../images/Projects/Titanium_Yoga.png';
import jpl from './../images/Projects/JPL_Blog.png';
import culliton from './../images/Projects/Culliton Channel Consulting.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDirections: "Project Directions",
            projectInfo: "Project Info",
            projectTagline: "Project Tagline"
        };
    }
    static getDerivedStateFromProps(props, state) {
        return {
            projectDirections: props.directions, projectInfo: props.text, projectTagline: props.tagline
        };
    }
    render() {
        let portfolio_images = [{ id: 0, imageName: ibwc, link: "/ibwc", alt: "International Boundary and Water Commission mockup" }, { id: 1, imageName: bchs, link: "/bchs", alt: "Wildcat Football Booster Club mockup" }, { id: 2, imageName: buckeye, link: "/buckeye" }, { id: 3, imageName: chemours, link: "/chemours" }, { id: 4, imageName: titanium, link: "/titanium" }, { id: 5, imageName: jpl, link: "/jpl" }, { id: 6, imageName: culliton, link: "/culliton" }];
        // console.log("this is props length: " + this.props.length);
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <h1>{this.props.project}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            {this.props.images.length > 1 ? <ImageSlideshow images={this.props.images} /> : <img src={this.props.images[0].imageName} alt={this.props.images[0].alt} />}
                        </div>
                        <div className="col-sm-6">
                            <h4>Languages & Tools</h4>
                            <ul>{this.props.languages && this.props.languages.map(language => <li key={language}>{language}</li>)}</ul>
                            <h4>Features</h4>
                            <ul>{this.props.features && this.props.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                            <a className='btn-theme px-3' target='_blank' href={this.props.url}>View Website <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="project-info">
                        <div className="project-p">
                            {/* <div className="tagline">{this.state.projectTagline}<br /></div> */}
                            <p><em>{this.state.projectDirections}</em></p>
                            <p className="info">{this.state.projectInfo}</p>




                            <button className="lets-talk p-0"><Link className="btn-theme px-3" to="/contact">Let's Talk</Link></button>

                        </div>
                    </div>
                </div>
                <PortfolioSlider images={portfolio_images} start={this.props.start} />
            </React.Fragment>
        );

    }
}

export default ProjectInfo;