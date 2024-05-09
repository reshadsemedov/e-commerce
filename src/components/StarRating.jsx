import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color="orange" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={stars.length} color="orange" />);
  }

  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaStar key={stars.length + i} color="lightgrey" />);
  }

  return <span style={{ marginLeft: "10px"}}>{stars}</span>;
};

export default StarRating;
