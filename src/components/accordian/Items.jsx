import React from "react";
import styles from "../../styles/accordian/accordian.module.css";

function Items(props) {
  const {
    selected,
    setSelected,
    dataItem,
    multiSelection,
    setMultiSelection,
    multiple,
    setMultiple,
  } = props;

  function handleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
    console.log("currentId", currentId);
  }

  function handleMultiSelection(currentId) {
    let cpyMultiple = [...multiple];
    console.log("...multiple", ...multiple);

    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className={styles.itemsContainer}>
      <div
        className={styles.itemsQue}
        onClick={
          multiSelection
            ? () => handleMultiSelection(dataItem.id)
            : () => handleSelection(dataItem.id)
        }
      >
        <p>{dataItem.que}</p>
        {selected === dataItem.id ? <span>-</span> : <span>+</span>}
      </div>
      <div className={styles.itemsAns}>
        {multiSelection
          ? multiple.indexOf(dataItem.id) !== -1 && (
              <p>
                <h3>Answer.</h3>
                {dataItem.ans}
              </p>
            )
          : selected === dataItem.id && (
              <p>
                <h3>Answer.</h3>
                {dataItem.ans}
              </p>
            )}
      </div>
    </div>
  );
}

export default Items;
