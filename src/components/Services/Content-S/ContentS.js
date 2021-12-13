import style from './ContentS.module.scss'

function ContentS({title}){

    return (
        <div className={style.contents}>
            <h2>{title}</h2>
        </div>
    )
}

export default ContentS