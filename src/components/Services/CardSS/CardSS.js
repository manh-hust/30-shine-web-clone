import style from './CardSS.module.scss'

function CardSS({img}){


    return (
        <div className={style.cardss}>
           <div className={style.image}>
               <img src={img}/>
           </div>
        </div>
    )
}

export default CardSS