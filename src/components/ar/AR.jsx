import React, { useState, useSyncExternalStore } from "react";

import img01 from "../../../public/assets/media/11_ar/router_ar_update_silver__7b7ntc0jn426_large_2x.jpg";
import img02 from "../../../public/assets/media/11_ar/router_ar_update_gray__gkhcfxg4oqie_large_2x.jpg";
import img03 from "../../../public/assets/media/11_ar/router_ar_update_blue__c7euo7nj8k2u_large_2x.jpg";
import img04 from "../../../public/assets/media/11_ar/router_ar_update_pink__nnqd6wpqbtme_large_2x.jpg";
import img05 from "../../../public/assets/media/11_ar/router_ar_update_green__c31or6a4lzcm_large_2x.jpg";
import icon from "../../../public/assets/media/11_ar/ar_icon__eu100klfqyky_xlarge.png";

const IMAGES = [img01, img02, img03, img04, img05];
const COLORS = ["silver", "gray", "blue", "pink", "green"];

function AR() {
  const [active, setActive] = useState(0);

  return (
    <div className="ar mb-4 pl-32 pr-32">
      <div className="ar__wrapper justify-center">
        <div className="ar__media justify-center">
          <div className="ar__mediaWrapper flex max-w-[50%] justify-center">
            {IMAGES.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="airpods max ar"
                className={["ar__img", idx === active ? "active" : ""].join(
                  " ",
                )}
              />
            ))}
          </div>
        </div>
        <div className="ar__content items-center">
          <div className="ar__contentWrapper">
            <img src={icon} alt="AR icon" className="ar__icon max-w-[2rem]" />
            <div className="ar__title mb-4 text-[2.5rem]">
              Use AR to see
              <br />
              AirPods Max.
            </div>
            <div className="ar__text max-w-[70%] text-[1.4vw]">
              Open this page using Safari on your iPhone or iPad.
            </div>
            <div className="ar__swatchWrapper">
              {COLORS.map((color, idx) => (
                <a
                  key={idx}
                  href="/"
                  className={[
                    "colors__swatch",
                    idx === active ? "active" : "",
                  ].join(" ")}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(idx);
                  }}
                >
                  <div
                    className={["colors__swatchInner", color].join(" ")}
                  ></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AR;
