import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import ImageLink from './ImageLink';


class PortfolioSlider extends React.Component {
    state = {
        firstSlide: 1,
        primaryOptions: {
            type: 'loop',
            fixedWidth: 350,
            height: 350,
            gap: 10,
            // rewind: true,
            cover: true,
            perMove: 1,
            pagination: false,
            start: `${this.props.start}`
        }
    }

    constructor(props) {
        super(props);

        // this.primaryRef = React.createRef();
        // this.secondaryRef = React.createRef();
    }

    componentDidMount() {
        // Set the sync target right after the component is mounted.
        // this.primaryRef.current.sync(this.secondaryRef.current.splide);
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("PrevState first slide", prevState.firstSlide)
        // if (prevState.firstSlide !== this.state.firstSlide)
        //     this.setState({firstSlide: this.props.start})
        // console.log("Component did update. Start:", this.props.start);
    }

    handleClick = firstSlide => {
        const primaryOptions = { ...this.state.primaryOptions }
        console.log("First Slide", firstSlide)
        console.log("Primary options", primaryOptions.start)
        primaryOptions.start = this.props.start
        this.setState({ primaryOptions })
        console.log("Primary options after state change", this.state.primaryOptions.start)
    }

    render() {
        // const primaryOptions = {
        //     type: 'loop',
        //     fixedWidth: 350,
        //     height: 350,
        //     gap: 10,
        //     // rewind: true,
        //     cover: true,
        //     perMove: 1,
        //     pagination: false,
        //     start: `${this.state.firstSlide}`
        // };
        console.log("you are in portfolio slider. Start:", this.props.start);
        // const imageItems = ;

        return (
            // <Splide options={secondaryOptions} ref={this.secondaryRef}>
            <Splide className="portfolio-slider mt-5 mb-3" options={this.state.primaryOptions}>
                {this.props.images.map(
                    value => <ImageLink start={this.props.start} onClick={this.handleClick} key={value.id} image={value.imageName} link={value.link} alt={value.alt} />
                )}
            </Splide>
        );
    }
}

export default PortfolioSlider;