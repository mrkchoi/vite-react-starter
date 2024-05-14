import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import imgFront01 from "../../../public/assets/media/05_colors/design_colors_silver_front__g8c839jaldqy_xlarge_2x.jpg";
import imgFront02 from "../../../public/assets/media/05_colors/design_colors_gray_front__bgkzj4cnbafm_xlarge_2x.jpg";
import imgFront03 from "../../../public/assets/media/05_colors/design_colors_blue_front__ddfias5frxqq_xlarge_2x.jpg";
import imgFront04 from "../../../public/assets/media/05_colors/design_colors_pink_front__dbqafvrvcy6a_xlarge_2x.jpg";
import imgFront05 from "../../../public/assets/media/05_colors/design_colors_green_front__cqpeugza9as2_xlarge_2x.jpg";
import imgSide01 from "../../../public/assets/media/05_colors/design_colors_silver_side__ff3nerq51ka6_xlarge_2x.jpg";
import imgSide02 from "../../../public/assets/media/05_colors/design_colors_gray_side__gbjen9i2hram_xlarge_2x.jpg";
import imgSide03 from "../../../public/assets/media/05_colors/design_colors_blue_side__e166rgbg1s02_xlarge_2x.jpg";
import imgSide04 from "../../../public/assets/media/05_colors/design_colors_pink_side__gd261969pcmu_xlarge_2x.jpg";
import imgSide05 from "../../../public/assets/media/05_colors/design_colors_green_side__dpusuw9jg30i_xlarge_2x.jpg";

const FRONT = [imgFront01, imgFront02, imgFront03, imgFront04, imgFront05];
const SIDE = [imgSide01, imgSide02, imgSide03, imgSide04, imgSide05];
const COLORS = ["silver", "gray", "blue", "pink", "green"];

function Colors() {
  const frontRef = useRef(null);
  const intervalRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % COLORS.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  useEffect(() => {
    if (frontRef.current) {
      const percent = active * 100;
      gsap.to(frontRef.current, {
        x: "-" + percent + "%",
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [active]);

  return (
    <section className="colors pl-4 pr-4 pt-[8rem] sm:pt-[10rem] lg:pl-8 lg:pr-8 lg:pt-[10rem]">
      <div className="colors__title text-[2.5rem] sm:text-[3.5rem] lg:text-[5vw]">
        Five colors. <br />
        Anything but <br />
        monotone.
      </div>
      <div className="colors__grid">
        <div className="colors__swatchWrapper lg: col-start-1 mb-4 mt-4 sm:col-start-2 sm:mb-[4vh] sm:ml-[2.5vw] sm:mt-[-5vh]">
          {COLORS.map((color, idx) => (
            <a
              key={idx}
              href="/"
              className={[
                "colors__swatch",
                idx === active ? "active" : "",
              ].join(" ")}
              onClick={(e) => {
                e.preventDefault();
                setActive(idx);
                setIsPlaying(false);
              }}
            >
              <div className={["colors__swatchInner", color].join(" ")}></div>
            </a>
          ))}
        </div>
        <div className="colors__imageFrontWrapper">
          <div ref={frontRef} className="colors__imageFrontInner">
            {FRONT.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={[
                  "colors__imageFront",
                  "colors__imageFront--" + idx,
                  idx === active ? "active" : "",
                ].join(" ")}
                style={{
                  transform: `translateX(${100 * idx}%)`,
                }}
              />
            ))}
          </div>
          <div
            className="colors__controls bottom-4 left-4 sm:bottom-8 sm:left-8"
            onClick={() => {
              setIsPlaying(isPlaying ? false : true);
            }}
          >
            <button
              className={[
                "colors__control play",
                isPlaying ? "" : "active",
              ].join(" ")}
            ></button>
            <button
              className={[
                "colors__control pause",
                isPlaying ? "active" : "",
              ].join(" ")}
            ></button>
          </div>
        </div>
        <div className="colors__imageSideWrapper">
          {SIDE.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className={[
                "colors__imageSide",
                idx === active ? "active" : "",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Colors;
