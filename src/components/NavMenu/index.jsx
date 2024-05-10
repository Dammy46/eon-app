import React from "react";
import "./navmenu.css";
import { MdOutlineArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
const NavMenu = () => {
  const navlinks = [
    { link: "/", label: "About" },
    { link: "/", label: "Investment Approach" },
    { link: "/", label: "Blog" },
    { link: "/", label: "Portfolio" },
  ];
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.2, duration: 0.5, ease: [0.22, 0, 0.37, 0] },
    },
  };
  const linkVar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
  const containerLink = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="menu-container"
    >
      <p className="menu-title">
        <span>Menu</span>
      </p>
      <motion.div
        variants={containerLink}
        animate="open"
        initial="initial"
        className="nav-links"
        exit={"initial"}
      >
        {navlinks.map((link, index) => (
          <div
            className="flex link-wrap"
            key={index}
            style={{ overflow: "hidden" }}
          >
            <motion.a
              href="/"
              variants={linkVar}
              initial="initial"
              animate="open"
            >
              <span>{link.label}</span>
              <MdOutlineArrowForward />
            </motion.a>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NavMenu;
