import style from './Moment.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardNoTextSlider from '../../../components/Card-M/CardNoTextSlider/CardNoTextSlider'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination, Autoplay
} from 'swiper';

SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);

function Moment() {
    
    const list = [
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A1.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A2.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A3.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A4.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A5.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A6.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A7.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A8.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A9.jpg'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/feedback/A10.jpg'
        },
    ]

    return (
        <div>
            <ContentCard
            title={'Shine Moment'}
            note={'Cùng lan tỏa những phút giây tỏa sáng tại 30Shine'}
            />
            <div className={style.swiper}>
                <Swiper 
                slidesPerView={4}
                grabCursor={true} keyboard={{
                    "enabled": true
                }} 
                spaceBetween={28}
                navigation={true} 
                speed={400}
                height={160}
                className="mySwiper">
                    {list.map( (item, index) => (
                        <SwiperSlide
                        key={index}
                        >
                            <CardNoTextSlider
                            img={item.img}
                            />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Moment