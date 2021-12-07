import style from './CardS.module.scss'

function CardS({title, para, img}) {
    return (
        <div className={style.card}>
            <div className={style.containerImg}>
                <img src={img} className={style.cardImg}></img>
            </div>
            <div className={style.cardContent}>
                <span>{title}</span>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default CardS