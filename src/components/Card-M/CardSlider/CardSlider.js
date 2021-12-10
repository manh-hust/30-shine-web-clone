import style from './CardSlider.module.scss'
function CardSlider({img, title}) {

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={img}/>
            </div>
            <div className={style.title}>{title}</div>
        </div>
    )
}

export default CardSlider