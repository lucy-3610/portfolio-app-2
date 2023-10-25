import React, { Component } from 'react';
import lucy_swett_monogram from '../../images/Lucy_Swett_Monogram.png';
import { Link } from 'react-router-dom';
import $ from "jquery";
import NavLinks from './NavLinks';

class Header extends Component {
    componentDidMount() {
        $('.navbar-toggler').on('click', function () {
            $('.animated-icon2').toggleClass('open');
        });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm container justify-content-between align-items-start align-items-sm-center py-3 py-sm-5 z-1">
                <Link to="/">
                    <img id="monogram" alt="Lucy Swett Monogram" src={lucy_swett_monogram} />
                </Link>

                <button className="navbar-toggler px-0" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="animated-icon2"><span></span><span></span><span></span><span></span></div>
                </button>
                <div className="collapse navbar-collapse col-auto text-uppercase font-weight-bold my-3 my-sm-0 px-0" id="navbarCollapse">
                    <NavLinks />
                </div>
            </nav >
        );
    }
}

export default Header;