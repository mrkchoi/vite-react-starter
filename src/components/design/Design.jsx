import React from "react";
import DesignCanvas from "./DesignCanvas";
import { useMediaQuery } from "react-responsive";
import DesignCanvasMobile from "./DesignCanvasMobile";

function Design() {
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });

  return (
    <section className="design pl-8 pr-8 pt-[10vh] lg:pt-[15vh]">
      <div className="design__content max-w-5xl">
        <div className="design__contentPre text-[1rem] lg:text-[1.2vw]">
          Design
        </div>
        <h2 className="design__contentTitle text-[3.5rem] sm:text-[5rem] sm:leading-[0.9] lg:text-[9vw]">
          A radically original composition.
        </h2>
        <p className="design__contentText self-end text-[1.2rem] sm:max-w-[50%] sm:text-[1rem] lg:text-[1.5vw]">
          The over-ear headphone has been completely reimagined. From cushion to
          canopy, AirPods Max are designed for an uncompromising fit that
          creates the optimal acoustic seal for many different head shapes —
          fully immersing you in every sound.
        </p>
      </div>
      {/* {isMobile ? <DesignCanvasMobile /> : <DesignCanvas />} */}
      <DesignCanvas />
    </section>
  );
}

export default Design;
