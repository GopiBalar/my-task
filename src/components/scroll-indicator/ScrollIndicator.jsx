import React, { useEffect, useState } from "react";
import styles from "../../styles/scroll-indicator/scrollIndicator.module.css";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScollPercentage] = useState();

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const result = await res.json();
      if (result && result.products && result.products.length > 0) {
        setData(result.products);
        setLoading(false);
      }
      return;
    } catch (err) {
      setError(err);
      console.log("err", err);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howmuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScollPercentage((howmuchScrolled / height) * 100);
  }

  console.log(data, scrollPercentage);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (loading) return <h1>Please Wait data loading ...</h1>;

  if (error !== null) return <h1>Error {error}</h1>;

  return (
    <>
      <div className={styles.scrollContainer}>
        <h1>Custom Scroll Indicators</h1>
        <div className={styles.scrollProgressTrackingContainer}>
          <div
            className={styles.currentProgressBar}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.scrollIndicatorContainer}>
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </>
  );
}

export default ScrollIndicator;
