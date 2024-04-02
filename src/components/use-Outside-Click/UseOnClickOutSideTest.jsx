import React, { useRef, useState } from "react";
import useOnClickOutSide from "./HookTest";
import styles from "../../styles/use-Out-Side-Click/useOutSideClick.module.css";

function UseOnClickOutSideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOnClickOutSide(ref, () => setShowContent(false));
  return (
    <>
      <div ref={ref} className={styles.useOutSideClick}>
        {showContent ? (
          <div>
            <h1>This is a Random Content!</h1>
            <p>
              This Click is Outside close this content.It wont't close if you
              click inside the box.
            </p>
          </div>
        ) : (
          <div>
            <button onClick={() => setShowContent(true)}>Show Content</button>
          </div>
        )}
      </div>
    </>
  );
}

export default UseOnClickOutSideTest;
