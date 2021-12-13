import ContentS from "../../components/Services/Content-S/ContentS"
import CardSS from '../../components/Services/CardSS/CardSS'
import style from './services.module.scss'
function Services() {


    return (
        <div className={style.services}>
            <div className={style.container}>
                <ContentS title={'SHINE COMBO CẮT GỘI 10 BƯỚC'}/>
                <CardSS/>
            </div>
        </div>
    )
}

export default Services