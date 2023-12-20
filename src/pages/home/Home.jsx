
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import './styleSwiper.scss';
import style from "./Home.module.scss"

import FirstSlide from '../../components/FirstSlide/FirstSlide'
import mainLogo from '../../assets/imgs/mainLogo.svg'
import {Redsquere} from "../../components/Redsquere";




const Home = () => {

    return(
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><FirstSlide/></SwiperSlide>
            <SwiperSlide><img src={mainLogo} alt="logo"/></SwiperSlide>
            <SwiperSlide><Redsquere/></SwiperSlide>
        </Swiper>
    )
}


export default Home;
