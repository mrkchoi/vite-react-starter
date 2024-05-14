import React, { useRef } from "react";

import video from "/assets/media/01_hero/large_2x.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import HeroVideoContentSection from "./HeroVideoContentSection";

const CONTENT = [
  "High-fidelity audio.",
  "Active Noise Cancellation with Transparency mode.",
  "Personalized Spatial Audio for theater-like sounds that surrounds you.",
  "Stunning design with an exceptional fit.",
];

function HeroVideo() {
  const section = useRef(null);
  const overlay = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(overlay.current, {
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: section.current,
          start: "25% bottom",
          end: "60% bottom",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      });
    },
    { scope: section },
  );

  return (
    <section ref={section} className="heroVideo">
      <div className="heroVideo__videoWrapper">
        <video
          className="heroVideo__video"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div ref={overlay} className="heroVideo__overlay"></div>
      </div>
      <div className="heroVideo__content pl-4 pr-4 text-[10vw] sm:text-[7vw] lg:pl-4 lg:pr-4 lg:text-[5vw]">
        {CONTENT.map((content, idx) => (
          <HeroVideoContentSection key={idx} content={content} idx={idx} />
        ))}
      </div>
    </section>
  );
}

export default HeroVideo;
