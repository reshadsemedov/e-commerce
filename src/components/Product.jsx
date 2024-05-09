import styles from '../styles/Product.module.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

export default function Product({ image, title, price, rating,id, category, changeClassName, addItem }) {
    const rate = rating.rate;
    const product = {
        image: image,
        title: title,
        price: price,
        rating: rate,
        id: id,
        category: category
    }
    const [state, setState] = useState(false);
    const dispatch = useDispatch();
    const element = useSelector(state => state.favouriteItems);
    function addFavourite() {
        dispatch({ type: 'addItem', payload: product })
        setState(elem => !elem);
    }
    function removeFavourite() {
        dispatch({ type: 'removeItem', payload: product })
    }
    console.log(element)
    const navigate = useNavigate();

    function handleDetail() {
        navigate(`/product/${id}`)
    }

    return <div className={!changeClassName ? styles.productContainer: styles.productContainer1}>
        <div className={styles.boxProd}>
            <div className={styles.productImageBox}>
                <button className={styles.buttonAdd} onClick={addItem ? addFavourite : removeFavourite}>{ state ? <FaHeart className={styles.fullHeart}/> : <FaRegHeart className={styles.heart}/> }</button>
                <img src={image} alt="product image" className={styles.productImage} />
            </div>

            <div className={styles.productInfo}>
                <p className={styles.title} onClick={handleDetail}>{title}</p>
                <p className={styles.rate}>{rate}<StarRating rating={rate}/></p>
                <p className={styles.price}>{price} TL</p>
            </div>
        </div>
    </div>
}