import React from "react";
import logo from "../../../public/assets/media/15_footer/logo.svg";

function FooterCrumbs() {
  return (
    <div className="footerMain__crumbs pl-4 pr-4 lg:pl-0 lg:pr-0">
      <img src={logo} alt="" className="footer__logo" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer__caret--crumb caret"
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
      <a href="/" className="footer__crumbLink">
        AirPods
      </a>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer__caret--crumb caret"
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
      <a href="/" className="footer__crumbLink">
        AirPods Max
      </a>
    </div>
  );
}

export default FooterCrumbs;
