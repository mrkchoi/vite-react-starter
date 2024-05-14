import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function MagicMore() {
  const section = useRef(null);
  const content01 = useRef(null);
  const content02 = useRef(null);
  const content03 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
          // markers: true,
        },
      });
      gsap.set([content01.current, content02.current, content03.current], {
        y: 50,
      });
      tl.to(content01.current, {
        opacity: 1,
        y: 0,
        duration: 3,
      });
      tl.to(content02.current, {
        opacity: 1,
        y: 0,
        duration: 3,
      });
      tl.to(content03.current, {
        opacity: 1,
        y: 0,
        duration: 3,
      });
      tl.to(content03.current, {
        opacity: 1,
        duration: 2,
      });
    },
    { scope: section.current },
  );

  return (
    <section ref={section} className="magicMore pl-16 pr-16 sm:pt-[4rem]">
      <div className="magicMore__title mb-12 text-left text-[3rem] sm:text-center sm:text-[3.5rem] lg:mb-20 lg:text-[5.5vw]">
        More magic to play with.
      </div>
      <div className="magicMore__content flex-col gap-12 text-[1rem] sm:flex-row lg:text-[1.4vw]">
        <div ref={content01} className="magicMore__contentSection">
          <span>On-head detection</span> AirPods Max pause audio when you take
          them off, and resume playback when you put them back on. So you never
          miss a beat.
        </div>
        <div ref={content02} className="magicMore__contentSection">
          <span>Announce Notifications</span> With Announce Notifications, Siri
          can automatically read important notifications from Messages, Phone,
          Calendar, Reminders, and more as they arrive. You can even tell Siri
          to respond — no hands required.
        </div>
        <div ref={content03} className="magicMore__contentSection">
          <span>Always-on Siri</span> Get directions, check the weather,
          schedule a meeting, and more with a simple “Hey Siri.” With an
          expansive set of commands, your favorite personal assistant is more
          helpful than ever.
        </div>
      </div>
    </section>
  );
}

export default MagicMore;
