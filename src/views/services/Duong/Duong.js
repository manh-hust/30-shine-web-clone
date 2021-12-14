import style from './Duong.module.scss'
import ContentS from '../../../components/Services/Content-S/ContentS'
import CardSS from '../../../components/Services/CardSS/CardSS'

function Duong() {

    const list = [
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-phuc-hoi-amino-matrix-6-buoc-1.jpg',
        'https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-hap-duong-oliu-2.jpg',
    ]
    return (
        <div className={style.duong}>
             <ContentS
            title={'DƯỠNG - PHỤC HỒI'}
            />
             <div className={style.cardGroup}>
                {list.map((item, index) => (
                    <CardSS
                    img={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Duong