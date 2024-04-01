import React, { useContext } from "react";
import { FeatureFlagDataContext } from "./context/FeatureFlagContext";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import TreeView from "../tree-view/TreeView";
import RandomColors from "../randomColors/RandomColors";
import Accordian from "../accordian/Accordian";

function FeatureFlag() {
  const { enabledFlags, loading } = useContext(FeatureFlagDataContext);
  console.log("object", enabledFlags);
  const dataRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showAccourdian",
      component: <Accordian />,
    },
    {
      key: "showRandomColors",
      component: <RandomColors />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
  ];

  function chackEnableFlag(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <p>Loading</p>;

  return (
    <div>
      <h1>Feature Flag</h1>
      {dataRender.map((item) =>
        chackEnableFlag(item.key) ? item.component : null
      )}
    </div>
  );
}

export default FeatureFlag;
