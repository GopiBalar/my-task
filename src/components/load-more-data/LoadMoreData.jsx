import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "../../styles/load-more-data/loadMoreData.module.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();

      if (data && data.products && data.products.length) {
        // setProducts(data.products);
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  function handleClick() {
    setCount(count + 1);
  }

  if (loading) return <h1>Please Wait Data Loading ...</h1>;

  return (
    <div className={styles.loadDataContainer}>
      <div className={styles.productContainer}>
        {products && products.length
          ? products.map((item, index) => (
              <Card
                key={index}
                id={item.id}
                img={item.thumbnail}
                title={item.title}
                price={item.price}
              />
            ))
          : null}
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleClick}
          disabled={disableBtn}
          className={styles.btn}
        >
          Load More
        </button>
        {disableBtn ? <p>Tou have reached 100 products</p> : null}
      </div>
    </div>
  );
}

export default LoadMoreData;
