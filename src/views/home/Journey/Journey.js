import ContentCard from '../../../components/ContentCard/ContentCard'
import style from './Journey.module.scss'
import CardSlider from '../../../components/Card-M/CardSlider/CardSlider'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination, Autoplay
} from 'swiper';


SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);

function Journey(){
    
    const list = [
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-thay-doi-ngoai-hinh.jpg',
            title: 'Thay đổi ngoại hình, chàng trai ít nói khiến cô hoa khôi rung động'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-nam-sinh-kien-truc-lot-xac.jpg',
            title: 'Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột xác kiểu tóc mới cực đẹp'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-lot-xac-thanh-hot-boy.jpg',
            title: 'Bạn sinh viên IT lột xác thành hot boy vạn người mê'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-toc-mullet.jpg',
            title: 'Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút'
        }
    ]

    return (
        <div>
            <ContentCard
            title={'Hành trình tỏa sáng'}
            note={'Câu chuyện chân thực từ hàng chục ngàn khách hàng'}
            path={'/journey'}
            all={true}
            />
            <div className={style.swiper}>
            <Swiper 
            slidesPerView={2}
            grabCursor={true} keyboard={{
                "enabled": true
            }} 
            spaceBetween={28}
            navigation={true} 
            speed={600}
            height={160}
            className="mySwiper">
                {list.map( item => (
                    <SwiperSlide
                    key={item.title}
                    >
                        <CardSlider
                        img={item.img}
                        title={item.title}
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
            </div>         
        </div>
    )
}

export default Journey