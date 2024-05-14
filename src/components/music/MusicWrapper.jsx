import React from "react";
import { useMediaQuery } from "react-responsive";

import Music from "./Music";
import MusicMobile from "./MusicMobile";
import MusicTablet from "./MusicTablet";

function MusicWrapper() {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return isMobile ? <MusicMobile /> : isTablet ? <MusicTablet /> : <Music />;
}

export default MusicWrapper;
