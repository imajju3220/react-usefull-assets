import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    // console.log('handleClick', getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    // console.log('handleMouseEnter', getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
    // console.log('handleMouseLeave', rating);
  }

  return (
    <div>
      <h4>star rating</h4>
      <div>
        {[...Array(noOfStars)].map((_, index) => {
          index+= 1;
          return (
            <FontAwesomeIcon
              icon={fasStar}
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <p>Rating: {rating}</p>
    </div>
  );
}