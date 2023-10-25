import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

export default class Image extends React.Component {
    render() {
        return (
            <SplideSlide key={this.props.id}>
                <img src={this.props.image} key={this.props.id} alt={this.props.alt} />
            </SplideSlide>
        );

    }
}