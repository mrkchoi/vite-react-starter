import React, { useRef } from "react";
import gsap from "gsap";
import main01 from "../../../public/assets/media/06_xray/audio_quality_xray_cushion__bug6vw8mdsuq_xlarge_2x.jpg";
import main02 from "../../../public/assets/media/06_xray/audio_quality_xray_cushion_transparent__fo7v7epgrsa6_xlarge_2x.jpg";
import driver01 from "../../../public/assets/media/06_xray/audio_quality_xray_driver__szw4kqj8kp66_xlarge_2x.png";
import driver02 from "../../../public/assets/media/06_xray/audio_quality_xray_chip__f2bct8r1kdm6_xlarge_2x.png";
import { useGSAP } from "@gsap/react";

function Xray() {
  const section = useRef(null);
  const imageWrapper = useRef(null);
  const mainImg01 = useRef(null);
  const mainImg02 = useRef(null);
  const driverImg01 = useRef(null);
  const driverImg02 = useRef(null);
  const content01 = useRef(null);
  const content02 = useRef(null);
  const content03 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageWrapper.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });

      gsap.set([content01.current, content02.current, content03.current], {
        y: 100,
      });

      // tl.to([mainImg02.current, content01.current], {
      //   opacity: 1,
      //   duration: 1,
      // });
      // tl.to(content01.current, {
      //   opacity: 0,
      //   duration: 0.5,
      //   delay: 2,
      // });
      // tl.to([driverImg01.current, content02.current], {
      //   opacity: 1,
      //   duration: 1,
      // });
      // tl.to(content02.current, {
      //   opacity: 0,
      //   duration: 0.5,
      //   delay: 2,
      // });
      // tl.to([driverImg02.current, content03.current], {
      //   opacity: 1,
      //   duration: 1,
      // });
      // tl.to(content03.current, {
      //   opacity: 1,
      //   duration: 0.5,
      //   delay: 1,
      // });

      tl.to(content01.current, {
        opacity: 1,
        y: 0,
        duration: 2,
      });
      tl.to(
        mainImg02.current,
        {
          opacity: 1,
          duration: 2,
        },
        "<",
      );
      tl.to(content01.current, {
        opacity: 0,
        duration: 0.5,
        delay: 3,
      });
      tl.to(content02.current, {
        opacity: 1,
        y: 0,
        duration: 2,
      });
      tl.to(
        driverImg01.current,
        {
          opacity: 1,
          duration: 2,
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
        y: 0,
        duration: 2,
      });
      tl.to(
        driverImg02.current,
        {
          opacity: 1,
          duration: 2,
        },
        "<",
      );
      tl.to(content03.current, {
        opacity: 1,
        duration: 1,
      });

      // tl.to(content02.current, {});
    },
    { scope: section.current },
  );

  return (
    <section
      ref={section}
      className="xray pl-12 pr-12 pt-[7rem] sm:pt-[9rem] lg:pt-[10rem]"
    >
      <div className="xray__content max-w-5xl">
        <div className="xray__contentPre text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem]">
          Audio quality
        </div>
        <h2 className="xray__contentTitle mb-6 text-[3.5rem] sm:mb-8 sm:text-[6rem] lg:mb-16 lg:text-[10rem]">
          Sounds like <br />
          an epiphany.
        </h2>
        <p className="xray__contentText text-[1.2rem] sm:max-w-[50%] sm:self-end lg:text-[1.5rem]">
          AirPods Max combine high-fidelity audio with industry-leading Active
          Noise Cancellation to deliver an unparalleled listening experience.
          Each part of their custom-built driver works to produce sound with
          ultra-low distortion across the audible range. From deep, rich bass to
          accurate mids and crisp, clean highs, you'll hear every note with a
          new sense of clarity.
        </p>
      </div>
      <section className="xrayImage__section mt-[5rem] h-[300vh] lg:mt-[10rem]">
        <div className="xrayImage__sticky top-[-50vh]">
          <div
            ref={imageWrapper}
            className="xrayImage__imgWrapper ml-[-15vw] w-[75%]"
          >
            <img
              ref={mainImg01}
              src={main01}
              alt="airpods max"
              className="xrayImage__img xrayImage__main1"
            />
            <img
              ref={mainImg02}
              src={main02}
              alt="airpods max"
              className="xrayImage__img xrayImage__main2"
            />
            <img
              ref={driverImg01}
              src={driver01}
              alt="airpods max"
              className="xrayImage__img xrayImage__driver1"
            />
            <img
              ref={driverImg02}
              src={driver02}
              alt="airpods max"
              className="xrayImage__img xrayImage__driver2"
            />
          </div>
          <div className="xrayImage__contentSection ml-[5vw] w-[25%] text-[1.5vw]">
            <div ref={content01} className="xrayImage__content">
              <span>Immersive listening</span>
              <br />
              To cancel unwanted external sound, AirPods Max use a total of six
              outward-facing microphones to detect noise in your environment,
              and two inward-facing microphones to measure what you're hearing.
              Beamforming microphones help isolate your voice on phone calls, so
              it's heard clearly — even in windy situations.
            </div>
            <div ref={content02} className="xrayImage__content">
              <span>Hear every detail</span>
              <br />
              The Apple-designed dynamic driver produces a wide frequency range
              that uncovers the rich details of every sound — delivering your
              favorite songs with previously unheard texture and accuracy.
            </div>
            <div ref={content03} className="xrayImage__content">
              <span>Distortionless Playback</span>
              <br />
              Modeled after those in high-end floor-standing speakers, the
              driver's dual-neodymium ring magnet motor minimizes total harmonic
              distortion across the entire audible range. The result is
              consistently clear playback, even at full volume.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Xray;
