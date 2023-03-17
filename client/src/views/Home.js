import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper-bundle.min.css";
import sign from '../images/sign.jpeg'
import farm from '../images/farm-aerial.jpg'
import scooby from '../images/scooby1.jpeg'
import sunflower from '../images/sunflowers.jpeg'
import goat from '../images/christmasGoat.jpeg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='hero'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        speed={500}
                        loop={true}
                        autoplay={true}
                        height={200}
                    >
                        <SwiperSlide><img className='slide-img' src={sign} alt="1" /></SwiperSlide>
                        <SwiperSlide><img className='slide-img' src={farm} alt="2" /></SwiperSlide>
                        <SwiperSlide><img className='slide-img' src={scooby} alt="3" /></SwiperSlide>
                        <SwiperSlide><img className='slide-img' src={sunflower} alt="4" /></SwiperSlide>
                        ...
                    </Swiper>
                    <div className='even-columns hero-text'>
                        <div>
                            <h2>Lorem ipsum dolor</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, sequi neque, alias molestias dolore odio, quae cupiditate magnam nemo quas eos officia explicabo veniam soluta mollitia temporibus quisquam itaque!</p>
                        </div>
                        <div className='hero-text-right'>
                            <img className='text-img' src={goat} alt="cute goat" />
                            <button>Join our Community</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
