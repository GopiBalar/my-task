import React from "react";
import styles from "../../styles/light-dark-mode/lightDarkMode.module.css";
import useLocalStorage from "./customHook";

function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log("theme", theme);

  return (
    <div className={styles.lightDarkMode} data-theme={theme}>
      <div className={styles.container}>
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
