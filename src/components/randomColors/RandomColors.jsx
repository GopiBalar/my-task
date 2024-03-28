import React, { useEffect, useState } from "react";
import styles from "../../styles/randomColors/randomColors.module.css";

function RandomColors() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRGBColor();
    else handleRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className={styles.randomColorContainer}
      style={{ backgroundColor: color }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleRandomHexColor : handleRandomRGBColor
        }
      >
        Generate RandomColors
      </button>
      <div className={styles.randomColorsFont}>
        <h3>{typeOfColor === "rgb" ? "RGB Color " : "HEX Color "}</h3>
        <h1> {color}</h1>
      </div>
    </div>
  );
}

export default RandomColors;

//   Math.floor( ) minmum value generate kre (5.9, 8.1) to value 5,8 aapse
//   Math.random( ) ye random number generate kre ( math.random()*10 ) matlab 0 to 10 ni andar ni koi pn value generate thse
//   useEffect mukva no reason: refresh krva thi dependency update thva thi useEffect render thse
