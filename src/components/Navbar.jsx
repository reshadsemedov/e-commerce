import image from '../images/Trendyol_logo.svg.png';
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.navBox}>
                <div className={ styles.logo }>
                    <img src={ image } alt='Trendyol Logo'/>
                </div>
                <div className={ styles.inputTrend }>
                    <input type="text" className={ styles.input } placeholder='Aradığınız ürün, kategori veya markayı yazınız'/>
                </div>
                <div className={ styles.links }>
                    <ul>
                        <li><IoPersonOutline className={styles.icon}/><Link to='/auth' className={styles.link}>Giriş yap</Link></li>
                        <li><FaRegHeart className={styles.icon}/><Link to='/favourites' className={styles.link}>Favorilerim</Link></li>
                        <li><SlBasket className={styles.icon}/><Link to='' className={styles.link}>Sepetim</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}