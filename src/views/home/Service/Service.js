import style from './Service.module.scss'
import ContentCard from '../../../components/ContentCard/ContentCard'
import CardL from '../../../components/Card-L/CardL'
import CardS from '../../../components/Card-S/CardS'
function Service(){
    const list = [
        {
            title:'Cắt gội massage',
            para: 'Bảng giá 2021(hấp dẫn)',
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-cat-goi-massage-2.jpg'
        },
        {
            title:'Uốn(chỉ từ 234k)',
            para: '1 dịch vụ',
            img: '	https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-uon-2.jpg'
        },
        {
            title:'Nhuộm (chỉ từ 162k)',
            para: '4 dịch vụ',
            img: '	https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-nhuom-2.jpg'
        },
        {
            title:'Dịch vụ khác',
            para: '4 dịch vụ',
            img: 'https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-dich-vu-khac-2.jpg'
        },
    ]
    return (
        <div className={style.service}>
            <ContentCard 
            title={'Trải nghiệm dịch vụ'}
            note={'Thư giãn 30 phút và bạn sẽ tỏa sáng'}
            all={true}
            />
            <CardL
            img='https://storage.30shine.com/ResourceWeb/data/images/home/banner-dich-vu.jpg'
            />
            <div className={style.cardSGroup}>
                {list.map(item => (
                    <CardS
                    key={item.title}
                    title={item.title}
                    para={item.para}
                    img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default Service