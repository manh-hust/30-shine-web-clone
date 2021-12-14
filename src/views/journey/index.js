import CardLY from "./CardLY/CardLY"
import style from './journeys.module.scss'


function Journeys() {


    return (
        <div className={style.journeys}>
            <CardLY size={false}/>
        </div>
    )
}

export default Journeys