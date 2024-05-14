import React from "react";
import { useMediaQuery } from "react-responsive";
import Magic from "./Magic";
import MagicMobile from "./MagicMobile";
import MagicTablet from "./MagicTablet";

function MagicWrapper() {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return isMobile ? <MagicMobile /> : isTablet ? <MagicTablet /> : <Magic />;
}

export default MagicWrapper;
