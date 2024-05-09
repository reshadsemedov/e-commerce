import ProductSlider from "./ProductSlider.jsx";
import styles from '../styles/ProductSlider.module.css'
import Products from "./Products.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
    return <section>
        <div className={styles.homeContainer}>
            <ProductSlider />
            <Products />
        </div>
        <Footer />
    </section>
}
