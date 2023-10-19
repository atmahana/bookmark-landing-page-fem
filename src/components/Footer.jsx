import { LogoBookmark } from "../components/LogoBookmark";
import { IconFacebook } from "./IconFacebook";
import { IconTwitter } from "./IconTwitter";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-[1110px] mx-auto flex flex-col lg:flex-row lg:gap-16 justify-center lg:justify-start lg:items-start items-center text-center py-10 lg:py-8 text-white">
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
          <a href="/" aria-label="">
            <IconFacebook />
          </a>
          <a href="/" aria-label="">
            <IconTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
