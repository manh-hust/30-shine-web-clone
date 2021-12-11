import style from './Member.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardTextM from '../../../components/Card-M/CardText/CardTextM'

function Member() {


    return (
        <div>
            <ContentCard
            title={'Shine Member'}
            note={'Tham gia ngay cùng 700.000 hội viên với quyền lợi đặc biệt'}
            />
            <CardTextM
            img={'https://storage.30shine.com/ResourceWeb/data/images/newHome/bsg.jpg'}
            title={'Black/ Silver/ Gold Member và hàng ngàn quyền lợi'}
            />
        </div>
    )
}

export default Member