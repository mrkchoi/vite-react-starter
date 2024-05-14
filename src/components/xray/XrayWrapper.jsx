import React from "react";
import { useMediaQuery } from "react-responsive";
import XrayMobile from "./XrayMobile";
import XrayTablet from "./XrayTablet";
import Xray from "./Xray";

function XrayWrapper() {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return isMobile ? <XrayMobile /> : isTablet ? <XrayTablet /> : <Xray />;
}

export default XrayWrapper;
