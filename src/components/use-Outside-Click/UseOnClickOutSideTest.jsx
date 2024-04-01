import React, { useRef, useState } from "react";
import useOnClickOutSide from "./HookTest";

function UseOnClickOutSideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOnClickOutSide(ref, () => setShowContent(false));
  return (
    <div ref={ref}>
      {showContent ? (
        <div>
          <h1>This is a Random Content!</h1>
          <p>
            This Click is Outside close this content.It wont't close if you
            click inside the box.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

export default UseOnClickOutSideTest;
