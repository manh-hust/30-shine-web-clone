import style from './VipCombo.module.scss'
import CardSS from '../../../components/Services/CardSS/CardSS'
import ContentS from '../../../components/Services/Content-S/ContentS'


function VipCombo() {

    const img = 'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/combo-cat-goi-s-vip-5.jpg'

    return (
        <div>
            <ContentS
            title={'VIP COMBO'}
            />
            <CardSS
            img={img}
            />
        </div>
    )
}

export default VipCombo