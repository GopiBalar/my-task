import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../../styles/imageSlider/imageSlider.css";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <h1>Please Wait !! Loading DATA</h1>;
  }

  if (errorMsg !== null) {
    return <h1>Error {errorMsg} </h1>;
  }

  return (
    <div className="imageSliderContainer">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="left" />
      {images && images.length
        ? images.map((imgItems, index) => (
            <img
              id={imgItems.id}
              src={imgItems.download_url}
              alt={imgItems.download_url}
              className={
                currentSlide === index
                  ? "currentImage"
                  : "currentImage hideImage"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill onClick={handleNext} className="right" />

      <span className="circleIndicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "currentIndicators"
                    : "currentIndicators inactiveIndicators"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
// url={`https://picsum.photos/v2/list`}
//         limit={`10`}
//         page={`6`}
