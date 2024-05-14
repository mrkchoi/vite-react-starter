import React, { useEffect, useRef, useState } from "react";

function HeaderLocal() {
  const header = useRef(null);
  const headerRow = useRef(null);
  const overlay = useRef(null);
  const mobileBtn = useRef(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 44) {
        header.current.classList.add("header__local--border");
        header.current.classList.add("header__local--sticky");
        headerRow.current.classList.remove("header__row--local--border");
      } else {
        header.current.classList.remove("header__local--border");
        header.current.classList.remove("header__local--sticky");
        headerRow.current.classList.add("header__row--local--border");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={header} className="header__local">
        <div
          ref={headerRow}
          className="header__row header__row--local header__row--local--border ml-4 mr-4 max-w-5xl pb-0 pt-0 lg:ml-8 lg:mr-8 lg:pb-3 lg:pt-3"
        >
          <div className="header__itemTitle">
            <a href="/" className="header_itemTitleLink">
              AirPods Max
            </a>
          </div>
          <div className="header__itemDetail">
            <ul className="header__itemDetailNav gap-4 lg:gap-6">
              <li className="header__itemDetailNavItem hidden lg:block">
                <a
                  href="/"
                  className="header__itemDetailLink header__itemDetailLink--active"
                >
                  Overview
                </a>
              </li>
              <li className="header__itemDetailNavItem hidden lg:block">
                <a href="/" className="header__itemDetailLink">
                  Tech Specs
                </a>
              </li>
              <li className="header__itemDetailNavItem hidden lg:block">
                <a href="/" className="header__itemDetailLink">
                  Compare
                </a>
              </li>
              <li
                ref={mobileBtn}
                className="header__itemDetailNavItem header__itemDetailNavItem flex h-[48px] w-[48px] items-center justify-center lg:hidden"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
              >
                <button className="header__itemDetailMobileBtn">
                  <svg
                    fill="#000000"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                    className="header__itemDetailMobileIcon"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z"></path>
                    </g>
                  </svg>
                </button>
              </li>
              <li className="header__itemDetailNavItem header__itemDetailNavItem--buy flex items-center lg:block">
                <a
                  href="/"
                  className="header__itemDetailLink header__itemDetailLink--buy"
                >
                  Buy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLocal;
