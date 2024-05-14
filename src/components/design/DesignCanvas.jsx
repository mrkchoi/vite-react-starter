import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

import design00 from "../../../public/assets/media/02_large/00.jpeg";
import design01 from "../../../public/assets/media/02_large/01.jpeg";
import design02 from "../../../public/assets/media/02_large/02.jpeg";
import design03 from "../../../public/assets/media/02_large/03.jpeg";
import design04 from "../../../public/assets/media/02_large/04.jpeg";
import design05 from "../../../public/assets/media/02_large/05.jpeg";
import design06 from "../../../public/assets/media/02_large/06.jpeg";
import design07 from "../../../public/assets/media/02_large/07.jpeg";
import design08 from "../../../public/assets/media/02_large/08.jpeg";
import design09 from "../../../public/assets/media/02_large/09.jpeg";
import design10 from "../../../public/assets/media/02_large/10.jpeg";
import design11 from "../../../public/assets/media/02_large/11.jpeg";
import design12 from "../../../public/assets/media/02_large/12.jpeg";
import design13 from "../../../public/assets/media/02_large/13.jpeg";
import design14 from "../../../public/assets/media/02_large/14.jpeg";
import design15 from "../../../public/assets/media/02_large/15.jpeg";
import design16 from "../../../public/assets/media/02_large/16.jpeg";
import design17 from "../../../public/assets/media/02_large/17.jpeg";
import design18 from "../../../public/assets/media/02_large/18.jpeg";
import design19 from "../../../public/assets/media/02_large/19.jpeg";
import design20 from "../../../public/assets/media/02_large/20.jpeg";
import design21 from "../../../public/assets/media/02_large/21.jpeg";
import design22 from "../../../public/assets/media/02_large/22.jpeg";
import design23 from "../../../public/assets/media/02_large/23.jpeg";
import design24 from "../../../public/assets/media/02_large/24.jpeg";
import design25 from "../../../public/assets/media/02_large/25.jpeg";
import design26 from "../../../public/assets/media/02_large/26.jpeg";
import design27 from "../../../public/assets/media/02_large/27.jpeg";
import design28 from "../../../public/assets/media/02_large/28.jpeg";
import design29 from "../../../public/assets/media/02_large/29.jpeg";
import design30 from "../../../public/assets/media/02_large/30.jpeg";
import design31 from "../../../public/assets/media/02_large/31.jpeg";
import design32 from "../../../public/assets/media/02_large/32.jpeg";
import design33 from "../../../public/assets/media/02_large/33.jpeg";
import design34 from "../../../public/assets/media/02_large/34.jpeg";
import design35 from "../../../public/assets/media/02_large/35.jpeg";
import design36 from "../../../public/assets/media/02_large/36.jpeg";
import design37 from "../../../public/assets/media/02_large/37.jpeg";
import design38 from "../../../public/assets/media/02_large/38.jpeg";
import design39 from "../../../public/assets/media/02_large/39.jpeg";
import design40 from "../../../public/assets/media/02_large/40.jpeg";
import design41 from "../../../public/assets/media/02_large/41.jpeg";
import design42 from "../../../public/assets/media/02_large/42.jpeg";
import design43 from "../../../public/assets/media/02_large/43.jpeg";
import design44 from "../../../public/assets/media/02_large/44.jpeg";
import design45 from "../../../public/assets/media/02_large/45.jpeg";
import overlayCupImg from "../../../public/assets/media/02_large/design_hero_cups__ddp0h9jo76gm_large.png";
import overlayFrameImg from "../../../public/assets/media/02_large/design_hero_frame__bgrqzq8wlzde_large_2x.png";

const FRAMES = [
  design00,
  design01,
  design02,
  design03,
  design04,
  design05,
  design06,
  design07,
  design08,
  design09,
  design10,
  design11,
  design12,
  design13,
  design14,
  design15,
  design16,
  design17,
  design18,
  design19,
  design20,
  design21,
  design22,
  design23,
  design24,
  design25,
  design26,
  design27,
  design28,
  design29,
  design30,
  design31,
  design32,
  design33,
  design34,
  design35,
  design36,
  design37,
  design38,
  design39,
  design40,
  design41,
  design42,
  design43,
  design44,
  design45,
];

function DesignCanvas() {
  const canvasRef = useRef(null);
  const canvasWrapper = useRef(null);
  const content01 = useRef(null);
  const content02 = useRef(null);
  const content03 = useRef(null);
  const content04 = useRef(null);
  const overlayCup = useRef(null);
  const overlayFrame = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  // const [dimensions, setDimensions] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  useEffect(() => {
    const resize = () => {
      // setDimensions({
      //   width: Math.min(window.innerWidth, window.innerHeight),
      //   height: Math.min(window.innerWidth, window.innerHeight),
      // });

      canvasRef.current.width = Math.min(window.innerWidth, window.innerHeight);
      canvasRef.current.height = Math.min(
        window.innerWidth,
        window.innerHeight,
      );
      // cancelAnimationFrame(animationRef.current);
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const images = [];
    const data = {
      frame: 0,
    };

    const drawImageScaled = (img, ctx) => {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio,
      );
    };

    const render = () => {
      // console.log("frame: ", data.frame);
      if (images[data.frame]) {
        const image = images[data.frame];
        drawImageScaled(image, ctx);
      }
    };

    for (let i = 0; i < FRAMES.length; i++) {
      const image = new Image();
      image.src = FRAMES[i];
      images.push(image);
      if (i === 0) {
        image.onload = () => render();
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 0.5,
        trigger: canvas,
        start: "top top",
        end: "bottom top",
        // markers: true,
      },
    });

    tl.to(data, {
      frame: FRAMES.length - 1,
      snap: "frame",
      ease: "none",
      duration: 10,
      // scrollTrigger: {
      //   scrub: true,
      //   trigger: canvas,
      //   start: "top top",
      //   end: "bottom top",
      //   markers: true,
      // },
      onUpdate: () => render(),
    });
    if (isMobile) {
      tl.to(
        [
          content01.current,
          content02.current,
          content03.current,
          content04.current,
        ],
        {
          opacity: 1,
          duration: 2,
        },
      );
    } else {
      tl.to(
        content01.current,
        {
          opacity: 1,
          duration: 3,
        },
        "-=6",
      );
      tl.to(
        content02.current,
        {
          opacity: 1,
          duration: 3,
        },
        "-=4",
      );
      tl.to(
        content03.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=2",
      );
      gsap.to(content04.current, {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          scrub: true,
          trigger: content04.current,
          start: "top -20%",
          end: "top -30%",
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div className="design__canvasSection h-[200vh] sm:h-[250vh]">
      <div
        ref={canvasWrapper}
        className="design__canvasWrapper top-[30vh] max-w-full sm:top-[20vh] lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
      >
        <canvas ref={canvasRef} className="design__canvas"></canvas>
        {/* <div className="design__canvasOverlayWrapper">
          <img
            ref={overlayCup}
            className="design__canvasOverlay design__canvasOverlay--cup"
            src={overlayCupImg}
            alt="airpods max cup"
          />
        </div>
        <div className="design__canvasOverlayWrapper">
          <img
            ref={overlayFrame}
            className="design__canvasOverlay design__canvasOverlay--frame"
            src={overlayFrameImg}
            alt="airpods max frame"
          />
        </div> */}
        <div className="design__canvasContent">
          <div
            ref={content01}
            className="design__canvasContentText design__canvasContentText01 left-[50%] top-[-40%] w-full max-w-[75vw] translate-x-[-50%] translate-y-[-50%] text-[1rem] sm:left-0 sm:top-[5vh] sm:w-auto sm:max-w-[25%] sm:translate-x-0 sm:translate-y-0 lg:left-[-5vw] lg:top-[5vh] lg:text-[1.2vw]"
          >
            The <span>canopy</span> spanning the headband is made from a
            breathable knit mesh, distributing weight to reduce on-head
            pressure.
          </div>
          <div
            ref={content02}
            className="design__canvasContentText design__canvasContentText02 left-[50%] top-[-15%] w-full max-w-[75vw] translate-x-[-50%] translate-y-[-50%] text-[1rem] sm:left-0 sm:top-[25vh] sm:w-auto sm:max-w-[25%] sm:translate-x-0 sm:translate-y-0 lg:left-[-5vw] lg:top-[25vh] lg:text-[1.2vw]"
          >
            The <span>stainless steel frame</span> is wrapped with a
            soft-to-the-touch material for a remarkable combination of strength,
            flexibility, and comfort.
          </div>
          <div
            ref={content03}
            className="design__canvasContentText design__canvasContentText03 bottom-[-25%] left-[50%] w-full max-w-[75vw] translate-x-[-50%] translate-y-[-50%] text-[1rem] sm:left-[70vw] sm:top-[35vh] sm:w-auto sm:max-w-[25%] sm:translate-x-0 sm:translate-y-0 lg:left-auto lg:right-[-5vw] lg:top-[35vh] lg:text-[1.2vw]"
          >
            <span>Telescoping arms</span> smoothly extend and stay where you set
            them, for a consistent fit and seal.
          </div>
          <div
            ref={content04}
            className="design__canvasContentText design__canvasContentText04 bottom-[-55%] left-[50%] w-full max-w-[75vw] translate-x-[-50%] translate-y-[-50%] text-left text-[1rem] sm:bottom-[-12vh] sm:left-[50%] sm:top-auto sm:w-auto sm:max-w-[25%] sm:translate-x-[-50%] sm:translate-y-0 sm:text-center lg:bottom-[-20vh] lg:left-[50%] lg:top-auto lg:text-[1.2vw]"
          >
            The <span>beautifully anodized aluminum cups</span> feature a
            revolutionary mechanism that allows each cup to rotate independently
            and balance pressure.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignCanvas;
