import style from './Nhuom.module.scss'
import ContentS from '../../../components/Services/Content-S/ContentS'
import CardSS from '../../../components/Services/CardSS/CardSS'


function Nhuom() {

    const list = [
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/mat-na-sui-bot-tay-da-chet-3.jpg?v=1',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-massage-covaigay-3.jpg?v=1',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-lot-mun-cam-3.jpg?v=1',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-detox-3.jpg?v=1'
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