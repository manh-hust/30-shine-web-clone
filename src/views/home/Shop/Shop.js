import style from './Shop.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardL from '../../../components/Card-L/CardL'
import CardBtnM from '../../../components/Card-M/CardBtn/CardBtnM'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Keyboard,Scrollbar,Navigation,Pagination, Autoplay
} from 'swiper';

SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination, Autoplay]);

function Shop() {

    const list = [
        {
            name:'Gôm Xịt Tóc Lady Killer - Thách thức nón bảo hiểm',
            img: 'https://static.30shine.com/shop-admin/2021/09/29/30SCP59E-G%C3%B4m%20LadyKiller%20-%20USP.png',
            newPrice: '130.000đ',
            oldPrice: ''
        }
    ]

    return (
        <div>
            <ContentCard
            title={'30Shine Shop'}
            note={'Mỹ phẩm nam cao cấp chính hãng'}
            all={true}
            />
            <CardL
            img={'https://storage.30shine.com/ResourceWeb/data/images/home/30shine-banner-shop-1.jpg'}
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
                        key={item.name}
                        >
                            <CardBtnM
                            img={item.img}
                            name={item.name}
                            newPrice={item.newPrice}
                            oldPrice={item.oldPrice}
                            />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Shop