import style from './CardBtnM.module.scss'
import img from '../../../assets/imgM/gom.png'
import muiten from '../../../assets/icon/muiten.svg'
function CardBtnM() {

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={img}/>
            </div>
            <div className={style.content}>
                <h4 className={style.name}>Gôm Xịt Tóc Lady Killer - Thách thức nón bảo hiểm </h4>
                <div className={style.price}>
                    <span className={style.new}>130.000 đ</span>
                    <span className={style.old}>155.000 đ</span>
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