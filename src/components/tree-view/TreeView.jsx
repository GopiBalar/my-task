import React from "react";
import styles from "../../styles/tree-view/treeView.module.css";
// import sideMenu from "./data";
import MenuList from "./MenuList";
import menus from "../../services/data";

function TreeView() {
  return (
    <div className={styles.treeViewContainer}>
      <MenuList menus={menus} />
    </div>
  );
}

export default TreeView;
