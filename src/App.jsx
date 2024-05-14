import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import "./App.css";

import Header from "./components/header/Header";
import HeaderLocal from "./components/header/HeaderLocal";
import Hero from "./components/hero/Hero";
import HeroVideo from "./components/hero/HeroVideo";
import Design from "./components/design/Design";
import DesignGrid from "./components/design/DesignGrid";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Crown from "./components/crown/Crown";
import Colors from "./components/colors/Colors";
import Audio from "./components/audio/Audio";
import AudioGrid from "./components/audio/AudioGrid";
import MagicMore from "./components/magic/MagicMore";
import Case from "./components/case/Case";
import Battery from "./components/battery/Battery";
import GridHelper from "./components/util/GridHelper";
import Compare from "./components/compare/Compare";
import Footer from "./components/footer/Footer";
import XrayWrapper from "./components/xray/XrayWrapper";
import SpatialWrapper from "./components/spatial/SpatialWrapper";
import MagicWrapper from "./components/magic/MagicWrapper";
import ARWrapper from "./components/ar/ARWrapper";
import EngravingWrapper from "./components/engraving/EngravingWrapper";
import MusicWrapper from "./components/music/MusicWrapper";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="app">
      <GridHelper />
      <Header />
      <HeaderLocal />
      <div className="main">
        <Hero />
        <HeroVideo />
        <Design />
        <DesignGrid />
        <Crown />
        <Colors />
        <XrayWrapper />
        <Audio />
        <AudioGrid />
        <SpatialWrapper />
        <MagicWrapper />
        <MagicMore />
        <Case />
        <Battery />
        <ARWrapper />
        <EngravingWrapper />
        <MusicWrapper />
        <Compare />
        <Footer />
      </div>
    </div>
  );
}

export default App;
