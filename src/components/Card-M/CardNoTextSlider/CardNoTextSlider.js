import style from './CardNoTextSlider.module.scss'
function CardNoTextSlider({img}){

    return (
        <div className={style.card}>
            <div className={style.cardContainer}>
                <img src={img}/>
            </div>
        </div>
    )
}

export default CardNoTextSlider