import style from './CardL.module.scss'
import Img from '../../../assets/imgL/dichvu.jpg'
import { Container } from 'reactstrap'

function CardL() {

    return (
        <Container className={style.container}>
            <div className={style.content}>
                <img src={Img}/>
                <div className={style.text}>
                    <h1>KHÁM PHÁ KIỂU TÓC</h1>
                    <span>
                        Phá vỡ giới hạn của một tiệm tóc truyền thống, 
                        30Shine mang đến không gian trải nghiệm hoàn 
                        toàn mới với diện tích lớn trên 200m2/ 16 ghế 
                        cắt. Tất cả đều được đặt tại vị trí dễ tìm trên 
                        những con phố lớn, hòa vào cuộc sống sôi động 
                        của người đàn ông hiện đại.
                    </span>
                </div>
            </div>
        </Container>
    )
}

export default CardL