import style from './Care.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardL from '../../../components/Card-L/CardL'
import CardS from '../../../components/Card-S/CardS'

function Care() {

    const list = [
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/2-care.png',
            title: '7 ngày',
            para: 'Chỉnh sửa tóc miễn phí'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/1-care.png',
            title: '3 ngày',
            para: 'Đổi/ trả hàng miễn phí'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/3-care.png',
            title: '15 ngày',
            para: 'Bảo hành Uốn Nhuộm'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/4-care.png',
            title: 'Giảm 20%',
            para: 'Nếu chờ đợi quá lâu'
        },
    ]

    return (
        <div className={style.care}>
            <ContentCard
            title={'Cam kết 30shine Care'}
            note={'Sự hài lòng của anh là ưu tiên hàng đầu của 30Shine'}
            />
            <CardL
            img={'https://storage.30shine.com/ResourceWeb/data/images/home/banner-30shine-care-5.jpg'}
            title={'VÌ CHẤT LƯỢNG PHỤC VỤ LÀ HÀNG ĐẦU'}
            para={'Áp dụng tại salon bất kỳ toàn hệ thống 30Shine'}
            />
            <div className={style.cardGroup}>
                {list.map( item => (
                    <CardS
                    title={item.title}
                    para={item.para}
                    img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default Care