import ContentS from "../../components/Services/Content-S/ContentS"
import CardSS from '../../components/Services/CardSS/CardSS'
import TenStep from "./TenStep/TenStep"
import VipCombo from "./VipCombo/VipCombo"
import Uon from "./Uon/Uon"
import Nhuom from "./Nhuom/Nhuom"
import style from './services.module.scss'
function Services() {


    return (
        <div className={style.services}>
            <div className={style.container}>
                <TenStep/>
                <VipCombo/>
                <Uon/>
                <Nhuom/>
            </div>
        </div>
    )
}

export default Services