import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import image from "/assets/media/01_hero/hero_large_01.png";

import { useGSAP } from "@gsap/react";

function Hero() {
  const section = useRef(null);
  const title = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      const tl = gsap.timeline();

      tl.from(imageRef.current, {
        duration: 1,
        opacity: 0,
        scale: 1.5,
        delay: 0.5,
      });
      tl.from(
        title.current,
        {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            gsap.to(imageRef.current, {
              scale: 1.1,
              scrollTrigger: {
                trigger: section.current,
                start: "5% top",
                end: "bottom top",
                scrub: true,
                // immediateRender: false,
              },
            });
            gsap.to(title.current, {
              scale: 0.8,
              scrollTrigger: {
                trigger: section.current,
                start: "5% top",
                end: "bottom top",
                scrub: true,
                // immediateRender: false,
              },
            });
          },
        },
        "-=0.5",
      );
    },
    {
      scope: section.current,
    },
  );

  return (
    <section
      ref={section}
      className="hero z-3 relative h-screen w-full pl-4 pr-4 lg:h-[125vh] lg:pl-8 lg:pr-8"
    >
      <div className="hero__content">
        <h1
          ref={title}
          className="hero__title mt-[70vh] text-[10vw] lg:mt-[50vh] lg:text-[16vw]"
        >
          AirPods Max
        </h1>
        <div className="hero__subtitle z-[-1] mt-4 w-full max-w-[60vw] text-ellipsis text-[1.3rem] lg:mt-[30vh] lg:text-[2rem]">
          <div className="hero__subtitleWrapper">
            <div className="hero__subtitle">
              Introducing AirPods Max — a perfect balance of exhilarating
              high-fidelity audio and the effortless magic of AirPods. The
              ultimate personal listening experience is here.
            </div>
          </div>
        </div>
      </div>
      <div className="hero__imageWrapper z-4 absolute left-[50%] top-[40vh] w-[70vw] sm:w-[50vw] lg:top-[50vh] lg:w-[40vw]">
        <img
          ref={imageRef}
          className="hero__image"
          src={image}
          alt="airpods max"
        />
      </div>
    </section>
  );
}

export default Hero;
