import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {
    render() {
        const { url, path, image, title } = this.props;
        return (
            <div className="col-md-6 col-lg-4 project">
                {/* <a target="_blank" rel="noopener noreferrer" href={url}> */}
                {/* <Link className="btn-theme px-3" to="/contact">Let's Talk</Link> */}
                <Link to={path}>
                    {/* <a href={`/portfolio-app-2/${path}`}> */}
                    <img className="project-img" alt={image} src={image} />
                    <div className="overlay">
                        <div className="text font-weight-bold">{title}</div>
                    </div>
                    {/* </a> */}
                </Link>
            </div>
        );

    }
}

export default Project;