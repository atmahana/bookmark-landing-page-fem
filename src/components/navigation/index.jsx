import { useState, useRef } from "react";
import { LogoBookmark } from "../LogoBookmark";
import IconHamburger from "../../assets/icon-hamburger.svg";
import IconClose from "../../assets/icon-close.svg";
import IconFacebook from "../../assets/icon-facebook.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import { Button } from "../ui/Button";

export function Nav() {
  const items = ["features", "pricing", "contact"];
  return (
    <nav className="fixed w-full flex justify-between items-center px-6 py-10 lg:px-[10.25rem] 2xl:px-72 lg:py-12 backdrop-blur-md">
      <a href="/">
        <LogoBookmark isPrimary={true} className="ml-2" />
      </a>
      <Desktop items={items} />
      <Mobile items={items} />
    </nav>
  );
}

function Desktop({ items }) {
  return (
    <ul className="hidden md:flex gap-10 items-center text-sm">
      {items.map((item) => (
        <li key={item} className="">
          <button className="tracking-10% hover:text-accent">
            {item.toUpperCase()}
          </button>
        </li>
      ))}
      <Button className="bg-accent hover:ring-2 ring-accent hover:text-accent ml-1.5 uppercase">
        Login
      </Button>
    </ul>
  );
}

function Mobile({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsOpen(hamburgerRef.current.checked);
  };

  return (
    <>
      <label htmlFor="hamburger-menu" className="z-50 mr-2 md:hidden">
        <img src={`${isOpen ? IconClose : IconHamburger}`} />
      </label>
      <input
        ref={hamburgerRef}
        id="hamburger-menu"
        type="checkbox"
        className="hidden"
        onChange={handleCheckboxChange}
      />
      <div
        style={{ display: `${isOpen ? "flex" : "none"}` }}
        className="fixed bg-background/90 w-full left-0 h-full top-0 px-8 py-10 flex-col"
      >
        <LogoBookmark
          isPrimary={false}
          className="h-fit w-full z-50 border-b border-secondary/50 pb-3"
        />
        <ul className="flex flex-col text-xl text-center">
          {items.map((item) => (
            <li
              key={item}
              className="w-full border-b border-secondary/50 py-[1.15rem]"
            >
              <button className="text-white tracking-25.5%">
                {item.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <Button className="border-2 mt-6 text-xl uppercase">Login</Button>
        <div className="w-full flex justify-center gap-10 mt-auto">
          <a href="/">
            <img src={IconFacebook} />
          </a>
          <a href="/">
            <img src={IconTwitter} />
          </a>
        </div>
      </div>
    </>
  );
}
