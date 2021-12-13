import style from './Uon.module.scss'
import CardSS from '../../../components/Services/CardSS/CardSS'
import ContentS from '../../../components/Services/Content-S/ContentS'


function Uon() {

    const img = 'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-uon-han-quoc-8-cap-do-1.jpg'

    return (
        <div>
            <ContentS
            title={'UỐN'}
            />
            <CardSS
            img={img}
            />
        </div>
    )
}

export default Uon