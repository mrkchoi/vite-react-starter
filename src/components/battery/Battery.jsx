import React from "react";

function Battery() {
  return (
    <div className="battery pb-[6rem] pl-16 pr-16 pt-[5rem] sm:pb-[8rem] sm:pt-[8rem] lg:pb-[10rem] lg:pt-[10rem]">
      <div className="battery__title mb-8 text-left text-[3rem] sm:text-center sm:text-[3.5rem] lg:text-[5.5vw]">
        A battery that keeps
        <br />
        stayin' alive.
      </div>
      <div className="battery__hero mb-4 text-left text-[16rem] sm:text-center sm:text-[25rem] lg:text-[30rem]">
        20
      </div>
      <div className="battery__text text-left text-[1rem] sm:max-w-[60%] sm:text-center lg:text-[1.4vw]">
        hours of listening, movie watching, or talk time — with Active Noise
        Cancellation and Spatial Audio enabled. Simply charge via Lightning
        connector. A quick 5‑minute charge delivers 1.5 hours of listening.
      </div>
    </div>
  );
}

export default Battery;
