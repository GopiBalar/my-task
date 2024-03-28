import React from "react";
import Tabs from "./Tabs";
// import styles from "../../styles/custom-tab/customTab.module.css";

function RandomContent() {
  return <h1>This Random Content</h1>;
}

function CustomTab() {
  const tabs = [
    {
      label: "Tab 1",
      content: "This Is content Tab 1",
    },
    {
      label: "Tab 2",
      content: "This Is content Tab 2",
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  function handleClick(currentTabIndex) {
    console.log("currentTabIndex", currentTabIndex);
  }

  return (
    <div>
      <Tabs tabs={tabs} onChange={handleClick} />
    </div>
  );
}

export default CustomTab;
