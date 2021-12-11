import style from './Address.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardS from '../../../components/Card-S/CardS'

function Address() {

        const list = [
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-hcm.png',
            title: 'TP. Hồ Chí Minh',
            para: '40 Salon'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-hanoi.png',
            title: 'Hà Nội',
            para: '18 Salon'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-danang.png',
            title: 'Đà Nẵng',
            para: '1 Salon'
        },
        {
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-other.png',
            title: 'Thành phố khác',
            para: '20 Salon'
        },
    ]

    return (
        <div className={style.address}>
            <ContentCard
            title={'Cam kết 30shine Care'}
            note={'Sự hài lòng của anh là ưu tiên hàng đầu của 30Shine'}
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

export default Address