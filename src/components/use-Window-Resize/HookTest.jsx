import { useLayoutEffect, useState } from "react";

function useWindowResizeHook() {
  const [windowResize, setWindowResize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function handler() {
      setWindowResize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return windowResize;
}

export default useWindowResizeHook;
