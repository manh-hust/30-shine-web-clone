import style from './Footer.module.scss'

function Footer() {


    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <div className={style.contentLeft}>
                    <div className={style.contentLeftTop}>
                        <span className={style.cty}>CÔNG TY CỔ PHẦN TMDV 30SHINE</span> <br/>
                        <span className={style.text}>82 Trần Đại Nghĩa, P. Đồng Tâm, Q. Hai Bà Trưng, HN</span> <br/>
                        <span className={style.text}>Số giấy chứng nhận kinh doanh: 010.7467.693</span> <br/>
                        <span className={style.text}>Ngày cấp: 08/06/2016</span> <br/>
                        <span className={style.text}>Nơi cấp: Sở kế hoạch đầu tư TP Hà Nội</span> <br/>
                        <span className={style.textInfo}>Chính sách bảo mật thông tin</span> <br/>
                        <span className={style.textInfo}>Liên hệ quảng cáo 30Shine</span> <br/>
                    </div>
                    <div className={style.contentLeftIcons}>
                        <img className={style.contentLeftIcon}></img>
                        <img className={style.contentLeftIcon}></img>
                    </div>
                    <div className={style.contentLeftPay}>
                        <span className={style.text}>Chấp nhận thanh toán</span>
                        <div className={style.contentLeftIcons}>
                            <img className={style.contentLeftIcon}></img>
                            <img className={style.contentLeftIcon}></img>
                        </div>
                    </div>

                </div>
                <div className={style.contentMid}>
                    <span className={style.textTime}>GIỜ PHỤC VỤ</span> <br/>
                    <span className={style.text}>Thứ 2 đến thứ 6: 8h00 - 21h00</span><br/>
                    <span className={style.text}>Thứ 7, chủ nhật: 7h30 - 21h00</span><br/>
                    <button className={style.contentMid}>

                    </button>
                </div>
                <div className={style.contentRight}>
                    <span className={style.textTime}>TẢI ỨNG DỤNG CỦA 30SHINE</span> <br/>
                    <span className={style.text}>Trải nghiệm đặt lịch nhanh chóng và nhiều tiện ích khác với ứng dụng 30Shine.</span><br/>
                    <div className={style.contentRightIcons}>
                            <img className={style.contentLeftIcon}></img>
                            <img className={style.contentLeftIcon}></img>
                    </div>
                    <span className={style.textTime}>THAM GIA CỘNG ĐỒNG</span> <br/>
                    <span className={style.text}>Cùng 2.5tr thành viên 30Shine</span><br/>
                    <div className={style.contentRightIcons}>
                            <img className={style.contentLeftIcon}></img>
                            <img className={style.contentLeftIcon}></img>
                    </div>
                </div>
                
            </div>
            <div className={style.bottom}>
                
            </div>
        </footer>
    )
}

export default Footer