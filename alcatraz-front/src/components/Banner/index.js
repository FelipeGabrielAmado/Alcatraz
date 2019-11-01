import React from 'react';
import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const Banner = () => (
    <Carousel showThumbs={ false } autoPlay={ true } >
        <div className="banner">
            <img src="images/banner-joker.png" />
        </div>
    </Carousel>
);

export default Banner;