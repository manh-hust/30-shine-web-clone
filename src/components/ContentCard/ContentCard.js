import style from './ContentCard.module.scss'
import { Link } from 'react-router-dom'

function ContentCard({title, note, all, path}){

    const p =  path ? path: '/'

    return (
        <div className={style.container}>
            <div className={style.content}>
                <span className={style.title}>{title}</span>
                <span className={style.note}>{note}</span>
            </div>
            { all ?
                (<Link to={p}>
                    <div className={style.all}>
                    <span className={style.text}>Xem tất cả</span>
                    <a href='#' className={style.icon}>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1 1" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    </div>
                </Link>) : all
            }
        </div>
    )
}

export default ContentCard