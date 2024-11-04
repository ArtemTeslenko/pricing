import { useState, useEffect } from "react";

const MOBILE_WIDTH = 390;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth > MOBILE_WIDTH) {
      setIsMobile(false);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
