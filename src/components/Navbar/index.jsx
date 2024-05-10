import React, { useEffect, useRef, useState } from "react";
import EON from "../../assets/svgs/eon-logo.svg";
import "./navbar.css";
import { HiMiniBars3 } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import NavMenu from "../NavMenu";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import AnimatedButton from "../AnimatedButton";
const Navbar = () => {
  const circle = useRef(null);
  const [active, setActive] = useState(false);

  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "150%",
          right: "100",
          left: "-100",
          margin: "auto",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);
  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <header className="app-header">
      <nav className="container flex">
        <span className="eon-logo-wrap">
          <a href="#">
            <div className="eon-logo">
              <img src={EON} alt="eon-lgo" />
            </div>
          </a>
        </span>
        <div className="flex nav-wrap">
          <a href="" className="join-wrap">
            <AnimatedButton>Join founders community</AnimatedButton>
          </a>
          <div className="menu-wrap">
            <div className="flex burger" onClick={() => setActive(!active)}>
              {active ? <RiCloseLargeFill /> : <HiMiniBars3 />}
            </div>
            <AnimatePresence>{active && <NavMenu />}</AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
