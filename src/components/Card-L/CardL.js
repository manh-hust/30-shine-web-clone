import style from './CardL.module.scss'
import {Container} from 'reactstrap'

function CardL({title, img, para}) {

    return (
        <Container className={style.container}>
            <div className={style.content}>
                <div>
                    <img src={img}/>
                </div>
                <div className={style.text}>
                    <h1>{title}</h1>
                    <span>{para}</span>
                </div>
            </div>
        </Container>
    )
}

export default CardL