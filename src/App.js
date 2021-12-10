import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Service from './views/service/Service';
import Hear from './views/hear/Hear'
import Journey from './views/journey/Journey';
import Devices from './views/devices/Devices'
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import SwiperCore, {
//   Keyboard,Scrollbar,Navigation,Pagination, Autoplay
// } from 'swiper';

// SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);


function App() {
  
  return (
    <div className="app">
      <Service/>
      <Hear/>
      <Journey/>
      <Devices/>
    </div>
  );
}

export default App;

      // <Swiper 
      // slidesPerView={2.5}
      // grabCursor={true} keyboard={{
      //   "enabled": true
      // }} 
      // spaceBetween={24}
      // navigation={true} 
      // autoHeight={true}
      // speed={600}
      // // autoplay={{
      // //   delay: 2000,
      // // }}
      // className="mySwiper">
      //     <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-5.jpg' alt='img'/></SwiperSlide>
      //     <SwiperSlide><img src={img} alt='img'/></SwiperSlide>
      //     <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-3.jpg' alt='img'/></SwiperSlide>
      //     <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-4.jpg' alt='img'/></SwiperSlide>
      //     <SwiperSlide><img src='https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_8_110c5a4cbb.png' alt='img'/></SwiperSlide>
      //     <SwiperSlide><img src={img} alt='img'/></SwiperSlide>
      //     <SwiperSlide><img src={img} alt='img'/></SwiperSlide>
      //   </Swiper>