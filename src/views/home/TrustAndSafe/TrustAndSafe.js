import style from './TrustAndSafe.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardTextM from '../../../components/Card-M/CardText/CardTextM'

function TrustAndSafe() {

    const list = [
        {
            title: 'Phòng chống Covid-19 - Vì sức khoẻ khách hàng, nhân viên và cộng đồng',
            img: 'https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-3.jpg'
        },
        {
            title: 'Mỹ phẩm & sản phẩm - Cam kết chất lượng - Đảm bảo xuất xứ',
            img: 'https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-4.jpg'
        },
        {
            title: 'Bảo quản xe cộ, đồ đạc',
            img: 'https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-5.jpg'
        }

    ]

    return (
        <div className={style.trustAndSafe}>
            <ContentCard
            title={'An tâm & Tin tưởng'}
            note={'Cam kết phòng dịch tối đa & mỹ phẩm chính hãng'}
            />
            <div className={style.cardGroup}>
                {list.map( item => (
                    <div className={style.item}>
                        <CardTextM
                        key={item.title}
                        title={item.title}
                        img={item.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrustAndSafe