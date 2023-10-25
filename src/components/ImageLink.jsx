import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

export default class ImageLink extends React.Component {
    render() {
        return (
            <SplideSlide key={this.props.id}>
                <Link onClick={() => this.props.onClick(this.props.start)} to={this.props.link}>
                    <img src={this.props.image} key={this.props.id} alt={this.props.alt} />
                </Link>
            </SplideSlide>
        );

    }
}