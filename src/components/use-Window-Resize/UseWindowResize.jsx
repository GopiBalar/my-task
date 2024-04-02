import React from "react";
import useWindowResizeHook from "./HookTest";
import styles from "../../styles/use-Window-Resize/useWindowResize.module.css";

function UseWindowResize() {
  const windowResize = useWindowResizeHook();
  const { width, height } = windowResize;

  return (
    <div className={styles.useWindowResize}>
      <h1>Use Window Resize Hook</h1>
      <h5>Width is : {width}</h5>
      <h5>Height is : {height}</h5>
    </div>
  );
}

export default UseWindowResize;
