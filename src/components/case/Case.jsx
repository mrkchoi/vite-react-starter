import React from "react";
import imgMain from "../../../public/assets/media/10_case/magic_smart_case__e1xikczc5eoi_xlarge_2x.jpg";

function Case() {
  return (
    <section className="case pl-16 pr-16 pt-[7rem] lg:pt-[10rem]">
      <div className="case__title mb-8 text-left text-[3rem] sm:text-[3.5rem] lg:mb-16 lg:text-center lg:text-[5.5vw]">
        A case with staying power.
      </div>
      <div className="case__content">
        <div className="case__contentSection mb-8 text-left text-[1rem] sm:mb-16 sm:max-w-[75%] sm:text-center lg:mb-20 lg:max-w-[60%] lg:text-[1.4vw]">
          When stored in their soft, slim <span>Smart Case</span>, AirPods Max
          enter an ultra‑low‑power state that preserves charge.
        </div>
      </div>
      <div className="case__media">
        <img
          src={imgMain}
          alt="airpods max case"
          className="case__img lg:max-w-[90%]"
        />
      </div>
    </section>
  );
}

export default Case;
