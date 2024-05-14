import React, { useRef } from "react";

import img01 from "../../../public/assets/media/09_magic/magic_features_hardware__doa7mm6stg6e_xlarge_2x_1b.jpg";
import img02 from "../../../public/assets/media/09_magic/magic_features_hardware__doa7mm6stg6e_xlarge_2x_1d.jpg";
import img03 from "../../../public/assets/media/09_magic/magic_features_hardware__doa7mm6stg6e_xlarge_2x_1c.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Magic() {
  const sticky = useRef(null);
  const section = useRef(null);
  const content01 = useRef(null);
  const content02 = useRef(null);
  const content03 = useRef(null);
  const image01 = useRef(null);
  const image02 = useRef(null);
  const image03 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sticky.current,
          start: "bottom bottom",
          end: "bottom -50%",
          scrub: true,
          // markers: true,
        },
      });
      gsap.set([content01.current, content02.current, content03.current], {
        y: 100,
      });

      tl.to(content01.current, {
        opacity: 1,
        y: -100,
        duration: 2,
      });
      tl.to(content01.current, {
        opacity: 0,
        duration: 0.5,
        delay: 3,
      });
      tl.to(content02.current, {
        opacity: 1,
        y: -100,
        duration: 2,
      });
      tl.to(
        image02.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        "<",
      );
      tl.to(content02.current, {
        opacity: 0,
        duration: 0.5,
        delay: 3,
      });
      tl.to(content03.current, {
        opacity: 1,
        y: -100,
        duration: 2,
      });
      tl.to(
        image03.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        "<",
      );
      tl.to(content03.current, {
        opacity: 1,
        duration: 1,
      });

      tl.to(content02.current, { duration: 2 });
    },
    { scope: section.current },
  );

  return (
    <section ref={section} className="magic">
      <div className="magic__content max-w-5xl pl-16 pr-16 pt-[10rem]">
        <div className="magic__contentPre text-[1.5rem]">
          Magical experience
        </div>
        <h2 className="magic__contentTitle mb-[3rem] text-[6rem] lg:mb-[4rem] lg:text-[10rem]">
          Elaborately
          <br />
          simple.
        </h2>
        <p className="magic__contentText max-w-[50%] text-[1rem] lg:text-[1.5vw]">
          AirPods Max inherit all of the wireless, effortless magic of the
          AirPods family. From setup to Siri commands, they make the listening
          experience completely fluid — day to day, device to device.
        </p>
      </div>
      <div ref={sticky} className="magic__sticky top-0 h-[100vh]">
        <div className="magic__stickyMain basis-[75%]">
          <img
            ref={image01}
            src={img01}
            alt="airpods max silver"
            className="magic__img magic__img1"
          />
          <img
            ref={image02}
            src={img02}
            alt="airpods max silver"
            className="magic__img magic__img2"
          />
          <img
            ref={image03}
            src={img03}
            alt="airpods max silver"
            className="magic__img magic__img3"
          />
        </div>
        <div className="magic__stickySidebar ml-4 text-[1.3vw]">
          <div ref={content01} className="magic__stickySidebarItem">
            <span>One-tap setup</span> AirPods Max connect immediately to your
            iPhone or iPad. To pair, simply place AirPods Max near your device
            and tap Connect on your screen.
          </div>
          <div ref={content02} className="magic__stickySidebarItem">
            <span>Automatic Switching.</span>
            Seamlessly move between your iPhone, iPad, Mac, and Apple Watch. If
            you’re playing music on your Mac and take a call on your iPhone,
            AirPods Max will instantly switch over.
          </div>
          <div ref={content03} className="magic__stickySidebarItem">
            <span>Audio Sharing</span>
            Easily share an audio stream between two sets of AirPods on your
            iPhone, iPad, iPod touch, or Apple TV. Bring any AirPods near the
            device you’re listening to and connect in a tap.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Magic;
