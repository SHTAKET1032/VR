
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import './styleSwiper.scss';
// import style from "./Home.module.scss"

import FirstSlide from '../../components/FirstSlide/FirstSlide'
import SecondSlide from '../../components/SecondSlide/SecondSlide'
import {Redsquere} from "../../components/Redsquere";




const Home = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return(
        <Swiper
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><FirstSlide/></SwiperSlide>
            <SwiperSlide><SecondSlide/></SwiperSlide>
            <SwiperSlide><Redsquere/></SwiperSlide>
        </Swiper>
    )
}


export default Home;
