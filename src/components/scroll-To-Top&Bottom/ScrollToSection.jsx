import React, { useRef } from "react";
import styles from "../../styles/scroll-To-Top&Bottom/scrollToTop&Bottom.module.css";

function ScrollToSection() {
  const ref = useRef(null);

  function handleToScrollSection() {
    let pos = ref.current.getBoundingClientRect().top;
    console.log("pos", ref.current);
    console.log("pos", ref.current.getBoundingClientRect().top);

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "Yellow",
        margin: "15px 0 0 0",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "Pink",
        margin: "15px 0 0 0",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "Purple",
        margin: "15px 0 0 0",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "Green",
        margin: "15px 0 0 0",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "Red",
        margin: "10px 0 0 0",
      },
    },
  ];

  return (
    <div>
      <h1>Scroll To Particular Section</h1>
      <button
        onClick={handleToScrollSection}
        className={styles.scrollSectionbtn}
      >
        Click to scroll
      </button>
      {data.map((item, index) => (
        <div ref={index === 2 ? ref : null} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}

export default ScrollToSection;
