import React from 'react';
import Slider from "react-slick";
import bannerData from '../../utils/banner-data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerList = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      };

    return (<div className="container-promo swiper-container">

    <ul className="swiper-wrapper">

        <Slider {...settings}>

            {bannerData.map(banner => {

                const {id, title, text, img, type} = banner;
                const url = require(`./../../assets/${img}`).default;

                return <li key={id}>
                    <div className={`swiper-slide promo ${type}`} style={{ backgroundImage: `url(${url})`}}>
                        <h1 className="promo-title">{title}</h1>
                        <p className="promo-text">{text}</p>
                    </div>
                </li>
            })}

        </Slider>

      </ul>
    </div>
    )
}

export default BannerList;