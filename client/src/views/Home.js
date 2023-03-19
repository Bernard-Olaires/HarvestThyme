import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sign from '../images/sign.jpeg'
import farm from '../images/farm-aerial.jpg'
import scooby from '../images/scooby2.jpeg'
import barn from '../images/barn.jpeg'
import goat from '../images/christmasGoat.jpeg'
import './Home.css'

import { Navigation, Pagination } from "swiper";
const Home = () => {
    const navigate = useNavigate()


        return(
        <div>
        <div className='container'>
            <div className='hero'>
                <Swiper
                    spaceBetween={30}

                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='img-box'>
                        <img src={sign} alt='sign' />
                    </SwiperSlide>
                    <SwiperSlide className='img-box'>
                        <img src={barn} alt='barn'/>
                    </SwiperSlide>
                    <SwiperSlide className='img-box'>
                        <img src={farm}  alt='aerial farm'/>
                    </SwiperSlide>
                    <SwiperSlide className='img-box'>
                        <img src={scooby} alt='scooby the horse'/>
                    </SwiperSlide>
                </Swiper>
                <div className='even-columns hero-text'>
                    <div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, sequi neque, alias molestias dolore odio, quae cupiditate magnam nemo quas eos officia explicabo veniam soluta mollitia temporibus quisquam itaque!</p>
                    </div>
                    <div className='hero-text-right'>
                        <img className='text-img' src={goat} alt="cute goat" />
                        <button className='register-btn' onClick={()=>navigate('/register')}>Join our Community</button>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
}

export default Home;
