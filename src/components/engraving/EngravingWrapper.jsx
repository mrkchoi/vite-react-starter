import React from "react";
import { useMediaQuery } from "react-responsive";

import Engraving from "./Engraving";
import EngravingMobile from "./EngravingMobile";
import EngravingTablet from "./EngravingTablet";

function EngravingWrapper() {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return isMobile ? (
    <EngravingMobile />
  ) : isTablet ? (
    <EngravingTablet />
  ) : (
    <Engraving />
  );
}

export default EngravingWrapper;
