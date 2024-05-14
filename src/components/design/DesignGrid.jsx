import React, { useRef } from "react";

import img01 from "../../../public/assets/media/03_design/design_comfort_xlarge_2x.jpeg";
import img02 from "../../../public/assets/media/03_design/design_mesh_xlarge_2x.jpeg";
import img03 from "../../../public/assets/media/03_design/design_foam_xlarge_2x.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function DesignGrid() {
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
    <section ref={section} className="designGrid mt-8 lg:mb-16">
      <div
        className="designGrid__inner max-w-full grid-cols-[1fr] gap-[2rem] sm:grid-cols-[2fr,1fr] sm:pl-8 sm:pr-8 lg:pl-16
lg:pr-16"
      >
        <div className="designGrid__firstCol">
          <div className="designGrid__parallax">
            <img
              ref={imgRef}
              className="designGrid__img"
              src={img01}
              alt="airpods max comfort"
            />
          </div>
        </div>
        <div className="designGrid__secondCol">
          <div className="designGrid__item pl-8 pr-8 sm:pl-0 sm:pr-0">
            <img src={img02} alt="" className="designGrid__img2" />
            <div className="designGrid__itemContent p-8 text-[1rem] sm:mb-8 sm:mt-8 sm:p-0 lg:mb-16 lg:text-[1.4vw]">
              A <span>custom-designed mesh textile</span> wraps the ear cushions
              to provide pillow-like softness while listening.
            </div>
          </div>
          <div className="designGrid__item pl-8 pr-8 sm:pl-0 sm:pr-0">
            <img src={img03} alt="" className="designGrid__img2" />
            <div className="designGrid__itemContent p-8 text-[1rem] sm:mb-8 sm:mt-8 sm:p-0 lg:text-[1.4vw]">
              Crafted with acoustically engineered memory foam, the{" "}
              <span>ear cushions</span> gently create an immersive seal that is
              the foundation of incredible sound.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignGrid;
