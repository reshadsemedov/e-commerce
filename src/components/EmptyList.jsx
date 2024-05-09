import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import styles from '../styles/EmptyList.module.css';

export default function EmptyList() {
    const navigate = useNavigate();
    function navigateHome() {
        navigate('/');
    }

    return <div className={styles.emptyListContainer}>
        <span className={styles.heartParagraph}><FaHeart className={styles.heartIcon}/></span>
        <h1>Favoriler Listeniz Henüz Boş</h1>
        <p>Favori listenizde ürün bulunamadı. “Alışverişe Başla” butonuna tıklayarak dilediğiniz ürünleri favoriye ekleyebilirsiniz.</p>
        <button onClick={navigateHome}>Alışverişe başla</button>
    </div>
}