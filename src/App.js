import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import img from './assets/imgM/1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination, Autoplay
} from 'swiper';
SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);



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
      // autoplay={{
      //   delay: 2000,
      // }}
      loop={true}
      className="mySwiper">
          <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-5.jpg'/></SwiperSlide>
          <SwiperSlide><img src={img}/></SwiperSlide>
          <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-3.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-4.jpg'/></SwiperSlide>
          <SwiperSlide><img src='https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_8_110c5a4cbb.png'/></SwiperSlide>
          <SwiperSlide><img src={img}/></SwiperSlide>
          <SwiperSlide><img src={img}/></SwiperSlide>
        </Swiper>
    </div>
  );
}

export default App;
