import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import img from './assets/imgM/1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination
} from 'swiper';
SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination]);



function App() {
  
  return (
    <div className="app">
      <Swiper 
      slidesPerView={2.5}
      slidesPerGroupSkip={4} 
      grabCursor={true} keyboard={{
        "enabled": true
      }} 
      spaceBetween={24}
      navigation={true} 
      autoHeight={true}
      speed={600}
      preloadImages={true}
      className="mySwiper">
        <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-5.jpg'/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-3.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-4.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_8_110c5a4cbb.png'/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        {/* <div className='swiper-button-prev'></div> */}
        {/* <div className='swiper-button-next'></div> */}
        </Swiper>
    </div>
  );
}

export default App;
