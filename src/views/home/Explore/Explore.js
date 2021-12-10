import style from './Explore.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardL from '../../../components/Card-L/CardL'
import CardS from '../../../components/Card-S/CardS'

function Explore() {

    return(
        <div className={style.explore}>
            <ContentCard
            title={'Khám phá kiểu tóc'}
            note={'Nguồn cảm hứng cho kiểu tóc mới của bạn'}
            all={true}
            />
            <CardL
            title={'KHÁM PHÁ KIỂU TÓC'}
            para={'Nguồn cảm hứng cho kiểu tóc mới của bạn từ hàng ngàn mẫu tóc hot trend do 30Shine thiết kế'}
            img={'https://storage.30shine.com/ResourceWeb/data/images/home/30shine-banner-kham-pha-kieu-to.jpg'}
            />
            <div className={style.cardSGroup}>
                <div className={style.item}>
                    <CardS
                    className={style.item}
                    title={'Khám phá kiểu tóc'}
                    para={'Tìm cảm hứng đổi mới cho mái tóc'}
                    img={'https://storage.30shine.com/ResourceWeb/data/images/home/discover/30shine-kham-pha-kieu-toc-style-mater.png'}
                    />
                </div>
                <div className={style.item}>
                    <CardS
                    title={'Style Master'}
                    para={'BXH các kiểu tóc hot trong tháng'}
                    img={'https://storage.30shine.com/ResourceWeb/data/images/home/discover/30shine-kham-pha-kieu-toc.png'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Explore