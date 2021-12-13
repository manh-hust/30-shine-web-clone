import style from './TenStep.module.scss'
import ContentS from '../../../components/Services/Content-S/ContentS'
import CardSS from '../../../components/Services/CardSS/CardSS'

function TenStep(){

    const list = [
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/mat-na-sui-bot-tay-da-chet-3.jpg?v=1',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-massage-covaigay-3.jpg?v=1',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-lot-mun-cam-3.jpg?v=1',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-detox-3.jpg?v=1'
    ]
    const imgBig = 'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-banner-sc-80k-3.jpg'
    return (
        <div className={style.tenstep}>
            <ContentS
            title={'SHINE COMBO CẮT GỘI 10 BƯỚC'}
            />
            <CardSS img={imgBig} />
            <div className={style.text}>
                <span>
                Dịch vụ chăm sóc tóc đặc biệt dùng kèm Shine Combo
                </span>
            </div>
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

export default TenStep