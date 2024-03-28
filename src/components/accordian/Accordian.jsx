import React, { useState } from "react";
import Datas from "../../services/Datas";
import Items from "./Items";
import styles from "../../styles/accordian/accordian.module.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  return (
    <div className={styles.accordianOuter}>
      <div className={styles.heading}>
        <h1>Accourdian Task</h1>
      </div>

      <button onClick={() => setMultiSelection(!multiSelection)}>
        Multi Selection
      </button>

      <div className={styles.accordianInner}>
        {Datas && Datas.length > 0 ? (
          Datas.map((dataItem, index) => (
            <Items
              key={index}
              dataItem={dataItem}
              selected={selected}
              setSelected={setSelected}
              multiSelection={multiSelection}
              setMultiSelection={setMultiSelection}
              multiple={multiple}
              setMultiple={setMultiple}
            />
          ))
        ) : (
          <div>No data available !!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
