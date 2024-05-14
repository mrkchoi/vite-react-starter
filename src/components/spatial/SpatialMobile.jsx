import React, { useRef } from "react";

import imgMain from "../../../public/assets/media/08_spatial/audio_quality_spatial_figure__clxltt2m0z2a_xlarge_2x.jpg";
import overlayTop from "../../../public/assets/media/08_spatial/audio_quality_spatial_rings_back__dit9t4h8r2c2_xlarge_2x.png";
import overlayBottom from "../../../public/assets/media/08_spatial/audio_quality_spatial_rings_front__gfrdafohuzyq_xlarge_2x.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Spatial() {
  const section = useRef(null);
  const gradient = useRef(null);
  const rings = useRef(null);

  useGSAP(
    () => {
      gsap.set(rings.current, {
        yPercent: -5,
      });
      gsap.to(gradient.current, {
        scrollTrigger: {
          trigger: section.current,
          start: "25% 50%",
          end: "25% top",
          scrub: true,
          // markers: true,
        },
        opacity: 1,
        duration: 1,
      });
      gsap.to(rings.current, {
        scrollTrigger: {
          trigger: section.current,
          start: "25% 50%",
          end: "25% top",
          scrub: true,
          // markers: true,
        },
        opacity: 0.2,
        yPercent: 0,
      });
    },
    {
      scope: section.current,
    },
  );

  return (
    <>
      <div ref={section} className="spatial h-[65vh] sm:h-[90vh] lg:h-[175vh]">
        <div ref={gradient} className="spatial__gradient"></div>
        <img
          src={imgMain}
          alt="airpods max spatial"
          className="spatial__img spatial__imgMain"
        ></img>
        <div
          ref={rings}
          className="spatial__overlayWrapper bottom-[12vh] max-w-[75%]"
        >
          <img
            src={overlayTop}
            alt="airpods max spatial"
            className="spatial__img spatial__imgOverlay spatial__imgOverlay--top mb-6"
          />
          <img
            src={overlayBottom}
            alt="airpods max spatial"
            className="spatial__img spatial__imgOverlay spatial__imgOverlay--bottom"
          />
        </div>
      </div>
      <div className="spatial__contentWrapper bg-black pb-8">
        <div className="spatial__content pb-8 pl-16 pr-16 pt-8 text-[1rem]">
          <span>Personalized Spatial Audio with dynamic head tracking</span>{" "}
          gives you a theater‑like experience for movies and shows, with sound
          that surrounds you. Using built-in gyroscopes and accelerometers,
          AirPods Max and your iPhone, iPad, Mac, or Apple TV track the subtle
          motion of your head, anchoring sounds to your device.
          <br />
          <br />
          And with Apple Music, Personalized Spatial Audio with dynamic head
          tracking places sound all around you to create a three-dimensional
          listening experience.
        </div>
      </div>
    </>
  );
}

export default Spatial;
