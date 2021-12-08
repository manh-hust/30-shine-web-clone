import style from './CardBtnM.module.scss'
import muiten from '../../../assets/icon/muiten.svg'
function CardBtnM({name, img, newPrice, oldPrice}) {

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={img}/>
            </div>
            <div className={style.content}>
                <h4 className={style.name}>{name}</h4>
                <div className={style.price}>
                    <span className={style.new}>{newPrice}</span>
                    <span className={style.old}>{oldPrice}</span>
                </div>
            </div>
            <div className={style.button}>
                <button>MUA NGAY</button>
                <img src={muiten}/>
            </div>
        </div>
    )
}

export default CardBtnM