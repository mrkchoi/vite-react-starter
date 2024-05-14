import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function GridHelper() {
  const [count, setCount] = useState(12);
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  useEffect(() => {
    if (isMobile) {
      setCount(4);
    } else {
      setCount(12);
    }
  }, [isMobile]);

  useEffect(() => {
    // console.log("toggle grid: shift + G");
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === "G") {
        setVisible((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    visible && (
      <div
        className="gridHelper"
        style={{ padding: isMobile ? "0 1rem" : "0 2rem" }}
      >
        <div className="gridHelper__inner">
          {Array.from({ length: count }).map((_, idx) => (
            <div key={idx}></div>
          ))}
        </div>
      </div>
    )
  );
}

export default GridHelper;
