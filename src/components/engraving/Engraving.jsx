import React from "react";
import img01 from "../../../public/assets/media/12_engraving/router_engraving__e8k6lcdki8q6_xlarge_2x.jpg";

function Engraving() {
  return (
    <div className="engraving mb-4 pl-32 pr-32">
      <div className="engraving__wrapper justify-center">
        <div className="engraving__contentWrapper flex-1">
          <div className="engraving__content">
            <div className="engraving__title text-[2.5rem]">
              Say it in a way
              <br />
              only you can.
            </div>
            <div className="engraving__text mb-[1rem] text-[1.2vw]">
              Discover the engraving options for AirPods.
              <br />
              Mix emoji, text, and numbers.
            </div>
            <a href="/" className="engraving__btn text-[1.2vw]">
              Buy AirPods Max{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="engraving__caret caret max-w-[1.2vw]"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="engraving__media">
          <div className="engraving__mediaWrapper">
            <img
              src={img01}
              alt="airpods max engraving"
              className="engraving__img max-w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engraving;
