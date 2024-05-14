import React, { useRef } from "react";

import img01 from "../../../public/assets/media/07_audio/audio_quality_eq__bw20hke6z1ea_xlarge_2x.jpg";
import img02 from "../../../public/assets/media/07_audio/audio_quality_noise_cancellation__bly3c9di4wwi_xlarge_2x.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function AudioGrid() {
  const imgRef = useRef(null);
  const section = useRef(null);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
        },
        yPercent: 10,
      });
    },
    {
      scope: section.current,
    },
  );

  return (
    <section
      ref={section}
      className="audioGrid pt-[4rem] sm:pt-[8rem] lg:pt-[10rem]"
    >
      <div className="audioGrid__inner sm:grid-cols-2fr1fr grid-cols-1 sm:pl-8 sm:pr-8 lg:pl-32 lg:pr-32">
        <div className="audioGrid__firstCol">
          <div className="audioGrid__parallax">
            <img
              ref={imgRef}
              className="audioGrid__img"
              src={img01}
              alt="airpods max comfort"
            />
          </div>
          <div className="audioGrid__itemContent firstCol p-8 text-[1rem] sm:p-0 sm:pb-4 sm:pt-4 lg:text-[1.4vw]">
            <span>Adaptive EQ</span> tailors sound to the bespoke fit and seal
            created by the ear cushions. Inward-facing microphones measure what
            you’re hearing, then adjust the frequencies of your music to deliver
            a rich, consistent experience that faithfully reproduces every note.
          </div>
        </div>
        <div className="audioGrid__secondCol">
          <div className="audioGrid__item">
            <img src={img02} alt="" className="audioGrid__img2" />
            <div className="audioGrid__itemContent secondCol p-8 pb-4 text-[1rem] sm:p-0 sm:pb-4 sm:pt-4 lg:text-[1.4vw]">
              Industry‑leading <span>Active Noise Cancellation</span> counters
              external sound with equal anti‑noise, allowing you to immerse
              yourself in what you’re listening to.
            </div>
            <div className="audioGrid__itemContent secondCol p-8 text-[1rem] sm:p-0 sm:pb-4 sm:pt-4 lg:text-[1.4vw]">
              Press the noise control button to switch to{" "}
              <span>Transparency mode</span>, which lets outside sound in so you
              can interact naturally with your surroundings.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AudioGrid;
