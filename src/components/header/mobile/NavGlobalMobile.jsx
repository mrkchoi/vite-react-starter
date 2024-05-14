import React, { useEffect, useRef, useState } from "react";

const NAV_GLOBAL_ITEMS = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

function NavGlobalMobile() {
  const mobileBtn = useRef(null);

  return (
    <div className="navGlobalMobile fixed left-0 top-0 h-screen w-screen p-10">
      <ul className="navGlobalMobile__menu">
        {NAV_GLOBAL_ITEMS.map((item, index) => (
          <li key={index} className="navGlobalMobile__menuItem">
            <a href="/" className="navGlobalMobile__menuLink">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavGlobalMobile;
