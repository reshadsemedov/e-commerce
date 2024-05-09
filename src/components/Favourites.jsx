import Product from "./Product.jsx";
import { useSelector } from 'react-redux';
import styles from '../styles/Favourites.module.css';
import EmptyList from "./EmptyList.jsx";
import Footer from "./Footer.jsx";

export default function Favourites() {
    const favourites = useSelector(state => state.favouriteItems);

    return (
        <>
            <div className={styles.favContainer}>
                {favourites.length === 0 ? (
                    <EmptyList />
                ) : (
                    favourites.map(e => (
                        <Product
                            key={e.id}
                            image={e.image}
                            title={e.title}
                            description={e.description}
                            rating={e.rating}
                            price={e.price}
                            id={e.id}
                            category={e.category}
                            changeClassName={true}
                            addItem={false}
                        />
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}
