import React from "react";
import styles from "../../styles/serch-autoComplete-with-api/serchAutoComplete.module.css";

function ListItem({ filterdUsers, handleClick }) {
  return (
    <div className={styles.listItemContainer}>
      <ul className={styles.listItemUl}>
        {filterdUsers && filterdUsers.length
          ? filterdUsers.map((item, index) => (
              <li onClick={handleClick} key={index}>
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ListItem;
