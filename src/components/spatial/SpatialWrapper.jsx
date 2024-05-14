import React from "react";
import { useMediaQuery } from "react-responsive";

import Spatial from "./Spatial";
import SpatialMobile from "./SpatialMobile";

function SpatialWrapper() {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return isMobile ? <SpatialMobile /> : isTablet ? <Spatial /> : <Spatial />;
}

export default SpatialWrapper;
