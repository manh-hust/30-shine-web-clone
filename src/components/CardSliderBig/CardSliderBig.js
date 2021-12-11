import style from './CardSliderBig.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination, Autoplay
} from 'swiper';

SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);


function CardSliderBig() {

    const list = [
        {
            img: 'https://storage.30shine.com/banner/210814_Banner_SC_10_BC_w.jpg'
        },
        {
            img: 'https://storage.30shine.com/banner/210814_Banner_toa_sang_w.jpg'
        },
        {
            img: 'https://storage.30shine.com/banner/210814_Banner_an_toan_w.jpg'
        },
        {
            img: 'https://storage.30shine.com/banner/210814_Banner_an_toan_w.jpg'
        },

    ]

    return (
        <div className={style.cardSliderBig}>
            <div className={style.swiper}>
                <Swiper 
                slidesPerView={1}
                grabCursor={true} keyboard={{
                    "enabled": true
                }} 
                navigation={true} 
                speed={300}
                height={160}
                loop={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper">
                    {list.map( (item, index) => (
                        <SwiperSlide
                        key={index}
                        >
                            <img src={item.img}/>
                        </SwiperSlide>

                    ))}
                </Swiper>
                <div className={style.formSDT}>
                    <div className={style.title}>ĐẶT LỊCH GIỮ CHỖ CHỈ 30 GIÂY</div>
                    <span className={style.note}>Cắt xong trả tiền, hủy lịch không sao</span>
                    <div className={style.groupBtn}>
                        <div className={style.input}>
                            <input placeholder='Nhập SDT để đặt lịch' className={style.inputElement}/>
                        </div>
                        <div className={style.button}>
                            <button>ĐẶT LỊCH NGAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSliderBig
