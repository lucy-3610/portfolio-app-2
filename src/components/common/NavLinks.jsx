import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (<React.Fragment>
        <Link to={"portfolio"}>
            Portfolio
        </Link>
        <Link to={"about"}>
            About
        </Link>
        <Link to={"contact"}>
            Contact
        </Link>
    </React.Fragment>);
}

export default NavLinks;