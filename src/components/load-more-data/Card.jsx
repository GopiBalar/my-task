import React from "react";
import styles from "../../styles/load-more-data/loadMoreData.module.css";

function Card(props) {
  return (
    <div className={styles.productCard}>
      <img src={props.img} alt={props.id} />
      <p>{props.title}</p>
      {/* <h3>{props.id}</h3> */}
      <h3>{props.price} ₹</h3>
    </div>
  );
}

export default Card;
