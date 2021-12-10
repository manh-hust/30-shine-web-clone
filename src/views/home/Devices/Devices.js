import style from './Devices.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardL from '../../../components/Card-L/CardL'
import CardS from '../../../components/Card-S/CardS'
function Devices() {

    const list = [
        {
            title:'Salon rộng lớn dễ tìm',
            para:'Không gian mở & kết nối',
            img:'https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shinecon-cept-khong-gian-rong-lon-1.jpg',
        },
        {
            title:'Trang thiết bị 30Shine SET™',
            para:'Nâng cấp trải nghiệm làm đẹp',
            img:'https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shinecon-cept-khong-gian-rong-lon-2.jpg',
        },
        {
            title:'Làm chủ thời gian',
            para:'Đặt lịch & các tiện ích 30Shine App',
            img:'https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shinecon-cept-khong-gian-rong-lon-3.jpg',
        },
        {
            title:'Trải nghiệm âm nhạc',
            para:'Năng lượng & Cảm xúc',
            img:'https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shinecon-cept-khong-gian-rong-lon-4.jpg',
        },
    ]

    return (
        <div className={style.devices}>
            <ContentCard
            title={'Không gian & thiết bị'}
            note={'Nạp năng lượng với trải nghiệm không gian mở'}
            />
            <CardL
            img={'https://storage.30shine.com/ResourceWeb/data/images/home/30shine-banner-khong-gian-salon.jpg'}
            para={'Phá vỡ giới hạn của một tiệm tóc truyền thống, 30Shine mang đến không gian trải nghiệm hoàn toàn mới với diện tích lớn trên 200m2/ 16 ghế cắt. Tất cả đều được đặt tại vị trí dễ tìm trên những con phố lớn, hòa vào cuộc sống sôi động của người đàn ông hiện đại.'}
            />
            <div className={style.cardGroup}>
                {list.map(item => (
                    <CardS
                    key={item.title}
                    title={item.title}
                    para={item.para}
                    img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default Devices