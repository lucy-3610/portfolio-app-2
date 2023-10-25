import React from 'react';

class Footer extends React.Component {
    render() {
        var d = new Date();
        var n = d.getFullYear();
        return <p className="footer text-center mt-3">&copy; {n} by Lucy Swett</p>;
    }
}

export default Footer;