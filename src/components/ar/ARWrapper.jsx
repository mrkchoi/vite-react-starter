import React from "react";
import { useMediaQuery } from "react-responsive";

import AR from "./AR";
import ARMobile from "./ARMobile";
import ARTablet from "./ARTablet";

function ARWrapper() {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return isMobile ? <ARMobile /> : isTablet ? <ARTablet /> : <AR />;
}

export default ARWrapper;
