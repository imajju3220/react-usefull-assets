import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return <div>loading data ! please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occurred {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div>
      <h4>image slider</h4>
      <div className="slider-container">
        {images && images.length > 0 ? (
          images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.author}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        ) : null}
        <div className="indicator-box">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            size="xl"
            onClick={handlePrevious}
          />
          <span className="circle-indicator">
            {images && images.length
              ? images.map((_, index) => (
                  <button
                    key={index}
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))
              : null}
          </span>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            size="xl"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}