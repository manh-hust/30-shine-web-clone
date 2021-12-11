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
            name:'Sáp vuốt tóc Glanzen Fox',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30SSLKF4-XMAS%20Key%20-%209.png',
            newPrice: '169.000đ',
            oldPrice: '239.000đ'
        },
        {
            name:'Gôm Xịt Tóc Lady Killer - Thách thức nón bảo hiểm',
            img: 'https://static.30shine.com/shop-admin/2021/09/29/30SCP59E-G%C3%B4m%20LadyKiller%20-%20USP.png',
            newPrice: '130.000đ',
            oldPrice: ''
        },
        {
            name:'Máy sấy tóc Furin - Mạnh gấp 10 máy sấy bạn có',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30SBZNJS-XMAS%20Key%20-%2010.png',
            newPrice: '389.000đ',
            oldPrice: '3990.000đ'
        },
        {
            name:'Máy sấy tóc tạo kiểu chuyên nghiệp Sharkway Limited 1600W',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30S222OP-XMAS%20Key%20-%2011.png',
            newPrice: '299.000đ',
            oldPrice: '350.000đ'
        },
        {
            name:'Sữa Rửa Mặt Tràm Trà Skin&Dr Tea tree - Khắc Tinh Của Mụn - Trị Mụn',
            img: 'https://static.30shine.com/shop-admin/2021/12/06/30SHW37R-XMAS%20Key%20-%204.png',
            newPrice: '199.000đ',
            oldPrice: '230.000đ'
        },
        {
            name:'Sáp vuốt tóc Glanzen Fox',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30SSLKF4-XMAS%20Key%20-%209.png',
            newPrice: '169.000đ',
            oldPrice: '239.000đ'
        },
        {
            name:'Gôm Xịt Tóc Lady Killer - Thách thức nón bảo hiểm',
            img: 'https://static.30shine.com/shop-admin/2021/09/29/30SCP59E-G%C3%B4m%20LadyKiller%20-%20USP.png',
            newPrice: '130.000đ',
            oldPrice: ''
        },
        {
            name:'Máy sấy tóc Furin - Mạnh gấp 10 máy sấy bạn có',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30SBZNJS-XMAS%20Key%20-%2010.png',
            newPrice: '389.000đ',
            oldPrice: '3990.000đ'
        },
        {
            name:'Máy sấy tóc tạo kiểu chuyên nghiệp Sharkway Limited 1600W',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30S222OP-XMAS%20Key%20-%2011.png',
            newPrice: '299.000đ',
            oldPrice: '350.000đ'
        },
        {
            name:'Sữa Rửa Mặt Tràm Trà Skin&Dr Tea tree - Khắc Tinh Của Mụn - Trị Mụn',
            img: 'https://static.30shine.com/shop-admin/2021/12/06/30SHW37R-XMAS%20Key%20-%204.png',
            newPrice: '199.000đ',
            oldPrice: '230.000đ'
        },
        {
            name:'Sáp vuốt tóc Glanzen Fox',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30SSLKF4-XMAS%20Key%20-%209.png',
            newPrice: '169.000đ',
            oldPrice: '239.000đ'
        },
        {
            name:'Gôm Xịt Tóc Lady Killer - Thách thức nón bảo hiểm',
            img: 'https://static.30shine.com/shop-admin/2021/09/29/30SCP59E-G%C3%B4m%20LadyKiller%20-%20USP.png',
            newPrice: '130.000đ',
            oldPrice: ''
        },
        {
            name:'Máy sấy tóc Furin - Mạnh gấp 10 máy sấy bạn có',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30SBZNJS-XMAS%20Key%20-%2010.png',
            newPrice: '389.000đ',
            oldPrice: '3990.000đ'
        },
        {
            name:'Máy sấy tóc tạo kiểu chuyên nghiệp Sharkway Limited 1600W',
            img: 'https://static.30shine.com/shop-admin/2021/12/04/30S222OP-XMAS%20Key%20-%2011.png',
            newPrice: '299.000đ',
            oldPrice: '350.000đ'
        },
        {
            name:'Sữa Rửa Mặt Tràm Trà Skin&Dr Tea tree - Khắc Tinh Của Mụn - Trị Mụn',
            img: 'https://static.30shine.com/shop-admin/2021/12/06/30SHW37R-XMAS%20Key%20-%204.png',
            newPrice: '199.000đ',
            oldPrice: '230.000đ'
        }
    ]

    return (
        <div className={style.shop}>
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
                slidesPerView={4.5}
                grabCursor={true} keyboard={{
                    "enabled": true
                }} 
                spaceBetween={28}
                navigation={true} 
                speed={400}
                height={300}
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