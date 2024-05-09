import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../store/useFetch.js";
import Product from "./Product.jsx";
import styles from '../styles/Product.module.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


function Products() {
  const data = useFetch('https://fakestoreapi.com/products', 0);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <h1 className={styles.titleProducts}>Products</h1>
      <Slider {...settings}>
        {data.map(product => (
          <Product 
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            rating={product.rating}
            price={product.price}
            id={product.id}
            category={product.category}
            changeClassName={false}
            addItem={true}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Products;
