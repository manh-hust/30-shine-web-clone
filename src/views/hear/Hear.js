import style from './Hear.module.scss'
import ContentCard from '../../components/ContentCard/ContentCard'
import CardTextM from '../../components/Card-M/CardText/CardTextM'
function Hear(){
    const list = [
        {
            title: 'Nói gì với stylist để anh có kiểu tóc ưng ý',
            img: 'https://storage.30shine.com/ResourceWeb/data/images/home/lang-nghe-va-tan-tam/lang-nghe-tan-tam-1.jpg'
        },
        {
            title: 'Những câu hỏi thường gặp',
            img: 'https://storage.30shine.com/ResourceWeb/data/images/home/lang-nghe-va-tan-tam/lang-nghe-tan-tam-3.jpg'
        }
    ]
    return (
        <div className={style.hear}>
            <ContentCard
            title={'Lắng nghe & tận tâm'}
            note={'Thấu hiểu nhu cầu, hỗ trợ nhiệt tình'}
            />
            <div className={style.cardGroup}>
                {list.map(item =>(
                    <CardTextM
                    key={item.title}
                    title={item.title}
                    img={item.img}
                    className={style.item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hear