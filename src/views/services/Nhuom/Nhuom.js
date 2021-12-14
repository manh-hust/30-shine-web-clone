import style from './Nhuom.module.scss'
import ContentS from '../../../components/Services/Content-S/ContentS'
import CardSS from '../../../components/Services/CardSS/CardSS'


function Nhuom() {

    const list = [
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-den-2.jpg',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-nau-2.jpg',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-do-2.jpg',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-thoi-trang-2.jpg'
    ]
    return (
        <div className={style.nhuom}>
             <ContentS
            title={'DỊCH VỤ NHUỘM'}
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

export default Nhuom