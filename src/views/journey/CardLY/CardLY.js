import style from './CardLY.module.scss'

function CardLY({img, title, para, views, size}) {


    return(
        <div className={style.cardLY}>
            <div className={style.image}>
                <img src={img}/>
            </div>
            <div className={style.content}>
                <div className={size ?style.title : style.titleS}>{title}</div>
                <div className={style.para}>{para}</div>
                <div className={style.icon}>
                    <div className={style.view}>{views} views</div>
                    <img className={style.ytIcon} src='https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg'/>
                </div>
            </div>
        </div>
    )
}

export default CardLY