import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import RandomColors from "../randomColors/RandomColors";
import Accordian from "../accordian/Accordian";
import TreeView from "../tree-view/TreeView";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import { FeatureFlagsContext } from "./context/FeatureFlagContext";

function FeatureFlag() {
  const { enabledFlags, loading } = useContext(FeatureFlagsContext);
  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColors />,
    },
    {
      key: "showAccourdian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    console.log("object", getCurrentKey);
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading ...</h1>;

  return (
    <div>
      <h1>FeatureFlag</h1>
      {componentToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

export default FeatureFlag;
