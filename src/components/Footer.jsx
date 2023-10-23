import { LogoBookmark } from "../components/LogoBookmark";
import { IconFacebook } from "./IconFacebook";
import { IconTwitter } from "./IconTwitter";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-[1280px] lg:px-[5.5rem] 2xl:px-0 mx-auto flex flex-col lg:flex-row lg:gap-16 justify-center lg:justify-start lg:items-start items-center text-center py-10 lg:py-8 text-white">
        <LogoBookmark isPrimary textColor="#FFFF" />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 py-9 lg:py-0 tracking-10% lg:text-sm">
          <a href="#features" className="hover:text-accent">
            FEATURES
          </a>
          <a href="#extensions" className="hover:text-accent">
            PRICING
          </a>
          <a href="#contact" className="hover:text-accent">
            CONTACT
          </a>
        </div>
        <div className="flex gap-10 pt-3 lg:pt-0 lg:ml-auto">
          <a href="/" aria-label="Facebook">
            <IconFacebook />
          </a>
          <a href="/" aria-label="Twitter">
            <IconTwitter />
          </a>
        </div>
      </div>
      <p className="text-center text-sm max-w-[25ch] lg:max-w-full mx-auto text-white pb-5">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158/hub"
          target="_blank"
          className="text-accent"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/atmahana" className="text-accent">
          Zubair Adham
        </a>
        .
      </p>
    </footer>
  );
}
