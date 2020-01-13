import React from 'react';
import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const options = {
    items: 1,
    nav: false,
    dots: false,
    rewind: true,
    autoplay: true
};

const MiniBanner = () => (
    <div className="mini-banner-config">
        <Carousel options={options} showThumbs={false} >
            <div className="mini-banner">
                <a href="https://www.primevideo.com/" target="_blank"> <img src="/images/primevideo.png" alt="Prime Video"/> </a>
                <a href="https://www.netflix.com/" target="_blank"> <img src="/images/netflix.png" alt="Netflix"/> </a>
                <a href="https://preview.disneyplus.com/br" target="_blank"> <img src="/images/disney.png" alt="Disney Plus"/> </a>
                <a href="https://play.hbogo.com/" target="_blank"> <img src="/images/hbo.png" alt="HBO Plus"/> </a>
                <a href="https://www.hulu.com/" target="_blank"> <img src="/images/youtube.png" alt="Youtube TV" /> </a> 
            </div>
        </Carousel>
    </div>
);

export default MiniBanner;