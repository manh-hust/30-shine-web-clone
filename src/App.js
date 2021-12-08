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
      slidesPerView={1}  slidesPerGroupSkip={1} 
      grabCursor={true} keyboard={{
        "enabled": true
      }} 
      spaceBetween={24}
      breakpoints={{
        "769": {
          "slidesPerView": 2.5,
          "slidesPerGroup": 1
        }
      }} 
      navigation={true} 
      className="mySwiper">
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
        </Swiper>
    </div>
  );
}

export default App;
