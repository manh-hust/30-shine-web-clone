import style from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/icon/log-30shine.jpg'
import {icon} from '../../assets/icon/icon.svg'

function Navbar(){


    return (
        <navigator className={style.nav}>
            <div>
                <img className={style.navLogo} src={logo} alt="Hehe">
                </img>
            </div>
            <ul className={style.navList}>
                <li className={style.navItem}>TRẢI NGHIỆM DỊCH VỤ</li>
                <li className={style.navItem}>HÀNH TRÌNH TỎA SÁNG</li>
                <li className={style.navItem}>KHÁM PHÁ KIỂU TÓC</li>
                <li className={style.navItem}>30SHINE SHOP</li>
                <li className={style.navItem}>TÌM 30SHINE GẦN NHẤT</li>
                <li className={style.navItem}>TUYỂN DỤNG</li>
            </ul>
            <div>
                <button className={style.navBtn}>
                    <span className={style.navBtnIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3606 8.71685L20.3191 8.86503C20.2005 8.84132 20.076 8.82354 19.9456 8.82354C19.0447 8.82354 18.3097 9.55854 18.3097 10.4536C18.3097 11.1708 18.772 11.7813 19.4122 12.0006L18.695 14.4783C17.9718 16.2921 14.854 15.5156 14.5399 14.2708L14.771 11.1471C15.6424 11.1056 16.3359 10.4002 16.3359 9.51705C16.3359 8.72277 15.7668 8.05891 15.0141 7.91072L15.1148 6.57706C15.1148 4.59731 9.34748 4.44912 9.19337 6.31625L9.27634 7.88108C8.45837 7.96407 7.81821 8.6635 7.81821 9.51112C7.81821 10.4121 8.54728 11.1471 9.44824 11.1471C9.45417 11.1471 9.45416 11.1471 9.46009 11.1471L9.60828 13.6899C9.60828 15.5096 6.69795 16.2861 5.34651 14.6739L4.59372 11.8821C5.22795 11.6568 5.68435 11.0522 5.68435 10.341C5.68435 9.43999 4.95529 8.70499 4.05433 8.70499C3.95356 8.70499 3.8528 8.71685 3.74611 8.74056L3.74017 8.70499C3.74017 8.70499 3.17115 7.19943 0 7.51358L4.04841 18.2659H19.8627L24 7.66177C24.0118 7.67362 21.7594 6.74895 20.3606 8.71685Z" fill="black"/>
                        </svg>
                    </span>
                    <span>ĐĂNG NHẬP</span>
                </button>
            </div>
        </navigator>
    )
}

export default Navbar