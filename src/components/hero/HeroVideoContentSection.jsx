import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function HeroVideoContentSection({ content, idx }) {
  const section = useRef(null);

  useGSAP(
    () => {
      if (idx < 3) {
        gsap.to(section.current, {
          duration: 1.5,
          scrollTrigger: {
            trigger: section.current,
            start: "50% 65%",
            end: "50% 35%",
            // markers: true,
            onEnter: () => {
              gsap.to(section.current, {
                duration: 0.5,
                opacity: 1,
              });
            },
            onLeave: () => {
              gsap.to(section.current, {
                duration: 0.5,
                opacity: 0,
              });
            },
            onEnterBack: () => {
              gsap.to(section.current, {
                duration: 0.5,
                opacity: 1,
              });
            },
            onLeaveBack: () => {
              gsap.to(section.current, {
                duration: 0.5,
                opacity: 0,
              });
            },
          },
        });
      } else {
        gsap.to(section.current, {
          duration: 1.5,
          opacity: 1,
          scrollTrigger: {
            trigger: section.current,
            start: "top 60%",
            end: "top 50%",
            // markers: true,
            onEnter: () => {
              gsap.to(section.current, {
                duration: 1,
                opacity: 1,
              });
            },
            onLeaveBack: () => {
              gsap.to(section.current, {
                duration: 1,
                opacity: 0,
              });
            },
          },
        });
      }
    },
    { scope: section.current },
  );

  return (
    <div ref={section} className="heroVideo__contentSection">
      {content}
    </div>
  );
}

export default HeroVideoContentSection;
