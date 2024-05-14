import React from "react";

import FooterTop from "./FooterTop";
import FooterCrumbs from "./FooterCrumbs";
import FooterMain from "./FooterMain";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <FooterTop />
        <FooterCrumbs />
        <FooterMain />
      </div>
    </div>
  );
}

export default Footer;
