import React, { useState } from "react";
import styles from "../../styles/tree-view/treeView.module.css";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  console.log("displayCurrentChildren", displayCurrentChildren);

  function handleToggleChildren(getCurrentLabel) {
    console.log("getCurrentLabel", getCurrentLabel);

    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div className={styles.menuItemContainer}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList menus={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
