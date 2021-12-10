import style from './Inspirer30Shine.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardSlider from '../../../components/Card-M/CardSlider/CardSlider'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination, Autoplay
} from 'swiper';


SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);
function Inspirer30Shine() {
    const list = [
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-ca-si-le-bao-binh.jpg',
            title: 'Ca sĩ Lê Bảo Bình: Thay đổi để không phải “Bỏ lỡ một người”'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-ca-si-lk.jpg',
            title: 'Kiểu tóc khiến LK Thoát ly chiếc mũ huyền thoại'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-ca-si-hoang-dung.jpg',
            title: 'Hoàng Dũng: “Ngoại hình hết sức quan trọng, chỉ sau tài năng”'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-dien-vien-thanh-son.jpg',
            title: 'Diễn viên Thanh Sơn “Cả Một Đời Ân Oán” tìm lại phong cách trẻ trung đúng tuổi thật'
        }
    ]
    return (
        <div>
            <ContentCard
            title={'Người truyền cảm hứng và 30Shine'}
            note={'Cùng lan tỏa thông điệp thay đổi để tỏa sáng'}
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

export default Inspirer30Shine