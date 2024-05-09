import styles from '../styles/ProductSlider.module.css'

export default function SliderItem({ image, name }) {
    return <div className={styles.prodBoxes}>
        <div>
            <p className={styles.borderImage}><img src={image} alt="slider image" className={styles.image} /></p>
            <p className={styles.title}>{name}</p>
        </div>
    </div>
}
