import style from './Devices.module.scss'
import ContentCard from '../../components/ContentCard/ContentCard'
import CardL from '../../components/Card-L/CardL'
function Devices() {

    return (
        <div>
            <ContentCard
            title={'Không gian & thiết bị'}
            note={'Nạp năng lượng với trải nghiệm không gian mở'}
            />
            <CardL
            img={'https://storage.30shine.com/ResourceWeb/data/images/home/30shine-banner-khong-gian-salon.jpg'}
            para={'Phá vỡ giới hạn của một tiệm tóc truyền thống, 30Shine mang đến không gian trải nghiệm hoàn toàn mới với diện tích lớn trên 200m2/ 16 ghế cắt. Tất cả đều được đặt tại vị trí dễ tìm trên những con phố lớn, hòa vào cuộc sống sôi động của người đàn ông hiện đại.'}
            />
        </div>
    )
}

export default Devices