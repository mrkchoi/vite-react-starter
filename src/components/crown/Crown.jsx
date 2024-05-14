import React from "react";

import video01 from "../../../public/assets/media/04_crown/xlarge_2x.mp4";
import overlay01 from "../../../public/assets/media/04_crown/design_crown_body__dnzmz5cex9ua_xlarge.png";

function Crown() {
  return (
    <section className="crown aspect-square overflow-x-hidden pt-[15vh] sm:aspect-auto sm:pt-[10vh] lg:pt-[20vh]">
      <div className="crown__media scale-150 sm:scale-100">
        <video
          src={video01}
          className="crown__video"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <img
          src={overlay01}
          alt="airpods max crown"
          className="crown__overlay"
        />
        <div className="crown__content max-w-full pt-4 text-left text-[.7rem] sm:text-center sm:text-[1.3rem] lg:max-w-[500px] lg:text-[1.4rem]">
          Press the <span>Digital Crown</span> to play and pause music or mute
          and unmute yourself on calls, and press twice to skip between tracks
          or end calls. Turn it to precisely control volume.
        </div>
      </div>
    </section>
  );
}

export default Crown;
