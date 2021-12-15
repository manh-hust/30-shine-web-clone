import CardLY from "./CardLY/CardLY"
import style from './journeys.module.scss'


function Journeys() {

    const list1 = [
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-lot-xac-thanh-hot-boy.jpg',
            title:'Bạn sinh viên IT lột xác thành hot boy vạn người mê',
            para: 'Ai nghĩ sinh viên IT là người xuề xoà, không quá quan tâm đến ngoại hình thì xem ngay màn lột xác mái tóc, thay đổi ngoại hình cực ấn tượng này nhé',
            views: '425k',
            size: true
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-toc-mullet.jpg',
            title:'Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút',
            para: 'Thay đổi kiểu tóc đã để suốt bao năm là một quyết định vô cùng khó khăn nhưng Phúc đã vượt qua nỗi sợ đó và tạo một kiểu tóc mới hoàn toàn',
            views: '470k',
            size: true
        }
    ]
    const list2 =[
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
    ]
    const list3 =[
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        },
        {
            img:'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg',
            title:'Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt',
            para:'Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công',
            views:'33k',
            size: false
        }
    ]

    return (
        <div className={style.journeys}>
            <div className={style.content}>
                <h1>HÀNH TRÌNH TỎA SÁNG</h1>
                <div>
                Quá trình tìm kiếm và hoàn thiện bản thân là bất tận.
                Mỗi kiểu tóc mới đại diện một tinh thần mới mà người 
                đàn ông luôn hướng đến để tìm thấy phiên bản tốt nhất 
                của chính mình. Hãy cùng lắng nghe những câu chuyện hành 
                trình lột xác dưới đây để tìm thấy niềm cảm hứng đổi mới
                 cho bạn.
                </div>
            </div>
            <div className={style.group1}>
                {list1.map((item, index) => (
                    <CardLY
                    key={index}
                    img={item.img}
                    title={item.title}
                    para={item.para}
                    views={item.views}
                    size={item.size}
                    />
                ))}
            </div>
            <div className={style.group2}>
                    {list2.map((item, index) => (
                    <CardLY
                    key={index}
                    img={item.img}
                    title={item.title}
                    para={item.para}
                    views={item.views}
                    size={item.size}
                    />
                ))}
            </div>
            <div className={style.group3}>
                {list1.map((item, index) => (
                    <CardLY
                    key={index}
                    img={item.img}
                    title={item.title}
                    para={item.para}
                    views={item.views}
                    size={item.size}
                    />
                ))}
            </div>
            <div className={style.group2}>
                    {list3.map((item, index) => (
                    <CardLY
                    key={index}
                    img={item.img}
                    title={item.title}
                    para={item.para}
                    views={item.views}
                    size={item.size}
                    />
                ))}
            </div>
        </div>
    )
}

export default Journeys