import React from "react";

import delivery from "../../../public/assets/media/15_footer/ship.svg";
import pay from "../../../public/assets/media/15_footer/pay.svg";
import help from "../../../public/assets/media/15_footer/help.svg";
import engraving from "../../../public/assets/media/15_footer/engraving.svg";

const FOOTER_TOP_ITEMS = [
  {
    img: delivery,
    title: "Fast, free delivery",
    description: "Or pick up available items at an Apple Store.",
    link: "Learn more",
  },
  {
    img: pay,
    title: "Pay monthly at 0% APR",
    description:
      "You can pay over time when you choose to check out with Apple Card monthly Installments.",
    link: "Learn more",
  },
  {
    img: help,
    title: "Get help buying",
    description:
      "Have a question? Call a Specialist or chat online. Call 1-800-MY-APPLE.",
    link: "Contact us",
  },
  {
    img: engraving,
    title: "Make them yours",
    description:
      "Engrave your AirPods with your initials or favorite emoji - free. Only at Apple.",
    link: "Learn more",
  },
];

function FooterTop() {
  return (
    <div className="footer__top flex items-center justify-center sm:pb-8 sm:pt-8">
      <div className="footer__topWrapper max-w-[65%] flex-col p-12 sm:max-w-full sm:flex-row sm:gap-8 sm:p-4">
        {FOOTER_TOP_ITEMS.map((item, idx) => (
          <div key={idx} className="footer__topItem mb-8 sm:mb-0">
            <img
              src={item.img}
              alt=""
              className="footer__topImg mb-4 max-h-[50px]"
            />
            <div className="footer__topTitle mb-4 text-[1rem]">
              {item.title}
            </div>
            <div className="footer__topDescription mb-4 pl-4 pr-4 text-[.85rem] sm:pl-0 sm:pr-0">
              {item.description}
            </div>
            <a href="/" className="footer__topLink">
              {item.link}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="footer__caret caret"
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
        ))}
      </div>
    </div>
  );
}

export default FooterTop;
