import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import Image from './Image';

class ImageSlideshow extends React.Component {
    constructor(props) {
        super(props);

        // this.primaryRef = React.createRef();
    }
    render() {
        let primaryOptions = {
            type: 'loop',
            width: '440px',
            perPage: `${this.props.perPage}`,
            perMove: 1,
            gap: '1rem',
            pagination: false
        };
        console.log("you are in imageslideshow", this.props.images);
        let imageItems = this.props.images.map(
            value => <Image key={value.id} image={value.imageName} />
        );
        if (this.props.images.length === 1) {
            primaryOptions.type = "slide";
            imageItems = <img src={this.props.images.imageName} />
            console.log("More than 1 image")
        }
        return (
            <Splide options={primaryOptions} >
                {imageItems}
            </Splide>
        );

    }
}

export default ImageSlideshow;