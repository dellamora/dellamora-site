import { useEffect, useState } from "react";

function getWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : 1920;
  const height = hasWindow ? window.innerHeight : 1080;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): {
  width: number;
  height: number;
  isMobile: boolean;
} {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {...windowDimensions, isMobile: windowDimensions.width < 768};
}
