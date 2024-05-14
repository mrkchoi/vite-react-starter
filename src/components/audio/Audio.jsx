import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Audio() {
  const section = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

  return (
    <section ref={section} className="audio pl-16 pr-16 lg:pt-[12rem]">
      <div className="audio__content max-w-5xl">
        <h2 className="audio__contentTitle mb-6 text-[2.5rem] sm:text-[4rem] lg:sm:text-[5vw] lg:mb-16">
          Computational audio. {!isMobile ? <br /> : ""}Key to performance.
        </h2>
        <p className="audio__contentText text-[1.1rem] sm:max-w-[80%] sm:text-[1rem] lg:text-[1.4vw]">
          With a powerful Apple-designed H1 chip in each cup, our custom
          acoustic design, and advanced software, AirPods Max use computational
          audio to create a breakthrough listening experience. By tapping into
          each chip's 10 audio cores, computational audio helps block outside
          noise, adapts audio to the fit and seal of your ear cushions, and
          makes movie scenes sound like they're happening all around you.
        </p>
      </div>
    </section>
  );
}

export default Audio;
