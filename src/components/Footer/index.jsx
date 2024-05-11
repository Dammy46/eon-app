import React from "react";
import "./footer.css";
import { BsArrowRight, BsDiscord } from "react-icons/bs";
import { MdOutlineArrowForward } from "react-icons/md";
import FooterLogo from "../../assets/svgs/footer-logo.svg";
import { useLenis } from "@studio-freight/react-lenis";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const lenis = useLenis(({ scroll }) => {});
  const footerLink = [
    { href: "#about", label: "About" },
    { href: "/", label: "Portfolio" },
    { href: "https://eonfund.medium.com", label: "Blog" },
  ];
  return (
    <section className="app-footer">
      <div className="container">
        <div className="flex top">
          <div className="footer-infos">
            <h2 className="footer-title">
              <span>Stay updated</span>
            </h2>
            <p className="footer-desc">
              Join over 100 other Eonfund fans curious about tech happenings in
              Africa.
            </p>

            <div className="flex form-wrap">
              <form className="input-wrap">
                <input type="email" placeholder="Enter email address" />
                <button type="submit" className="flex">
                  <BsArrowRight />
                </button>
              </form>
              <div className="vertical" />
              <a href="#" className="join-discord flex">
                <FaXTwitter />
                <p className="discord-text">
                  <span>Follow us on X</span>
                </p>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-wrap">
              {footerLink.map((footerLink, index) => (
                <a
                  href={footerLink.href}
                  onClick={() =>
                    footerLink.label !== "Blog" &&
                    lenis.scrollTo(footerLink.href)
                  }
                  key={index}
                  className="footer-link"
                  target={link.label === "Blog" && "_blank"}
                >
                  {footerLink.label}
                  <MdOutlineArrowForward />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="center">
          <div className="footer-logo">
            <img src={FooterLogo} alt="eon-logo" />
          </div>
        </div>
        <div className="footer-divider" />
        <div className="bottom flex">
          <p className="copyright">©2024 Eonfund. All Right Reserved </p>
          <div className="flex regulation">
            <a href="" className="policy">
              Privacy policy
            </a>
            <a href="" className="terms">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
