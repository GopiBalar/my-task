import React, { useEffect, useState } from "react";
import "./ImageSlide.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlide({ url, limit, page }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error !== null) return <h1>error {error}</h1>;

  function handlePrevious() {
    setCurrent(current === 0 ? image.length - 1 : current - 1);
  }

  function handleNext() {
    setCurrent(current === image.length - 1 ? 0 : current + 1);
  }

  console.log("current", current);

  return (
    <div className="imageSlide">
      <BsArrowLeftCircleFill className="arrow left" onClick={handlePrevious} />

      {image.map((imgItems, index) => (
        <img
          id={imgItems.id}
          src={imgItems.download_url}
          alt={imgItems.download_url}
          className={current === index ? "img" : "hide"}
        />
      ))}

      <BsArrowRightCircleFill
        className="arrow right"
        onClick={() => handleNext()}
      />
      <span>
        {image.length ? image.map((_, index) => <button></button>) : null}
      </span>
    </div>
  );
}

export default ImageSlide;
// url={`https://picsum.photos/v2/list`}
//         limit={`10`}
//         page={`6`}
