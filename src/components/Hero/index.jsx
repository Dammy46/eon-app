import React from "react";
import Navbar from "../Navbar";
import "./hero.css";
import { BsArrowUpRight } from "react-icons/bs";
import { useLenis } from "@studio-freight/react-lenis";

const Hero = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });
  return (
    <section className="app-hero">
      <Navbar />
      <div className="container hero-content">
        <h2>
          Fueling <br /> Innovation
        </h2>
        <div className="flex hero-info">
          <p className="hero-desc">
            <span>
              Eonfund ignites African startups with $10k-$100k investments,
              fostering tech pioneers poised to build lasting businesses.
            </span>
          </p>
          <a href="#" className="apply-fund-btn">
            <button className="flex">
              <span>Apply for funding</span>
              <BsArrowUpRight />
            </button>
          </a>
        </div>
      </div>
      <div onClick={() => lenis.scrollTo("#about")} id="scroll-btn"></div>
    </section>
  );
};

export default Hero;
