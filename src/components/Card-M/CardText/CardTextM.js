import style from './CardTextM.module.scss'
import Img from '../../../assets/imgM/1.jpg'

function CardTextM({img, title}) {


    return (
        <div className={style.card}>
            <div className={style.img}>
                <img src={img}/>
            </div>
            <div className={style.content}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}
export default CardTextM