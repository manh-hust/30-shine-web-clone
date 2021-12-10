import style from './Sale.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardTextM from '../../../components/Card-M/CardText/CardTextM';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination, Autoplay
} from 'swiper';

SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);

function Sale() {
    const list = [
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_4_47c796f756.png',
            title:'Da trắng bật tông'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_20_679432550c.png',
            title:'Da đẹp toàn diện'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_24_3a9fbdbe34.png',
            title:'Tái sinh làn da mụn'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_18_ef146c6484.png',
            title:'7 Ngày hết mụn'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_6_e7c8f7cce4.png',
            title:'Tóc đẹp 24h'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_7_36ec13fe69.png',
            title:'Tóc đẹp hương hoa'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_8_110c5a4cbb.png',
            title:'Tóc đẹp hương gỗ'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_CTBH_Vuong_9_f842658a62.png',
            title:'Giữ nếp 12h'
        },
        {
            img:'https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Camp_11_thang_11_Gom_Lady_Killer_804af42447.jpg',
            title:'Tóc đẹp bất chấp mũ bảo hiểm'
        },
    ]
    return (
        <div>
            <ContentCard
            title={'Ưu đãi'}
            note={'Quà tặng, chiết khấu đặc biệt cập nhật liên tục'}
            all={true}
            />
            <div className={style.swiper}>
                <Swiper 
                slidesPerView={3.5}
                grabCursor={true} keyboard={{
                    "enabled": true
                }} 
                spaceBetween={28}
                navigation={true} 
                speed={400}
                height={160}
                className="mySwiper">
                    {list.map( item => (
                        <SwiperSlide
                        key={item.title}
                        >
                            <CardTextM
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

export default Sale