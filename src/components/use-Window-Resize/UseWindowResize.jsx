import React from "react";
import useWindowResizeHook from "./HookTest";

function UseWindowResize() {
  const windowResize = useWindowResizeHook();
  const { width, height } = windowResize;

  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>Width is : {width}</p>
      <p>Height is : {height}</p>
    </div>
  );
}

export default UseWindowResize;
