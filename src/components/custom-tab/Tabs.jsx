import React, { useState } from "react";
import "../../styles/custom-tab/customTab.css";

function Tabs({ tabs, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  console.log("currentTabIndex", currentTabIndex);

  return (
    <div className="tabsContainer">
      <div className="tabsContainerInner">
        {tabs.map((tabsItem, index) => (
          <div
            onClick={() => handleClick(index)}
            className={`tabItem ${currentTabIndex === index ? "active" : ""}`}
          >
            <span>{tabsItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
