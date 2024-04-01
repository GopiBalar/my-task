import React, { useEffect } from "react";

function useOnClickOutSide(ref, handler) {
  function listner(e) {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    handler(e);
  }
  useEffect(() => {
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("moudedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [ref, handler]);

  return <div>useOnClickOutSide</div>;
}

export default useOnClickOutSide;
