import React, { useRef } from "react";
import useFetch from "../useFetch-Custom-Hook/HookTest";
import styles from "../../styles/scroll-To-Top&Bottom/scrollToTop&Bottom.module.css";

function ScrollToTopBottom() {
  const bottomRef = useRef(null);

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function handleToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (loading) return <h1>Loading ... Please Wait</h1>;
  if (error) return <h1>Error ... {error}</h1>;

  return (
    <div className={styles.scrollToTopBottom}>
      <h1>Scroll to Top and Bottom Feature</h1>
      <br />
      <h3>This is the Top section</h3>
      <br />
      <button onClick={handleToBottom}>Scroll To Bottom</button>
      {data && data.products && data.products.length
        ? data.products.map((item) => <p>{item.title}</p>)
        : null}
      <button onClick={handleToTop}>Scroll To Top</button>
      <br />
      <br />
      <h3 ref={bottomRef}>This is the Bottom section</h3>
      <br />
    </div>
  );
}

export default ScrollToTopBottom;
