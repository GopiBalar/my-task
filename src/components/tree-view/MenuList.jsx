import React from "react";
import styles from "../../styles/tree-view/treeView.module.css";
import MenuItem from "./MenuItem";

function MenuList({ menus }) {
    
  return (
    <ul className={styles.menuListContainer}>
      {menus && menus.length
        ? menus.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
