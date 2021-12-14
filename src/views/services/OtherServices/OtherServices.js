import style from './OtherServices.module.scss'
import ContentS from '../../../components/Services/Content-S/ContentS'
import CardSS from '../../../components/Services/CardSS/CardSS'


function OtherServices() {

    const list = [
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-cat-xa-tao-kieu-2.jpg',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-kid-combo-cho-be-2.jpg',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shinelayraytai-2.jpg',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-goi-masage-duong-sinh-2.jpg'
    ]
    return (
        <div className={style.otherServices}>
             <ContentS
            title={'DỊCH VỤ KHÁC'}
            />
             <div className={style.cardGroup}>
                {list.map((item, index) => (
                    <CardSS
                    img={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default OtherServices