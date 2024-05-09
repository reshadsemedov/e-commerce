import { useParams } from 'react-router-dom';
import useFetch from '../store/useFetch.js';
import styles from '../styles/ProductDetail.module.css';
import banner from '../images/ffdccf8b-02c6-4026-a22e-b52e29e02fd5.webp';
import StarRating from './StarRating.jsx';
import { FaHeart } from 'react-icons/fa';
import Footer from './Footer.jsx';

export default function ProductDetail() {
    const { id } = useParams();
    const data = useFetch('https://fakestoreapi.com/products', id);
    console.log(data)
    return (
        <>
            <div className={styles.detailContainer}>
                <div className={styles.imgDetails}>
                    <div className={styles.detailImgBox}>
                        <img src={data.image} alt="" />
                    </div>
                </div>
                <div className={styles.textDetails}>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    <div>
                        <div className={styles.productInfo}>
                            <h3>{data.title}</h3>
                            <p><StarRating rating={4.6} /></p>
                            <p>{data.category} kategorisinde
                                en çok ziyaret edilen 2. ürün
                            </p>
                            <p>{data.price} TL</p>
                            <div>
                                <button className={styles.addBasket}>Sepete Ekle</button>
                                <button className={styles.addFavourites}><FaHeart /></button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

