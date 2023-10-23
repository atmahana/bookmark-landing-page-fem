import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoBookmark } from "../LogoBookmark";
import IconHamburger from "../../assets/icon-hamburger.svg";
import IconClose from "../../assets/icon-close.svg";
import IconFacebook from "../../assets/icon-facebook.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import { Button } from "../ui/Button";

export function Nav() {
  const [isScrolling, setIsScrolling] = useState(false);

  // Event listener to track the scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = ["features", "pricing", "contact"];
  return (
    <motion.nav
      layout
      transition={{ ease: [0, 0.55, 0.45, 1], duration: 0.2 }}
      className={`fixed w-full flex justify-between items-center px-6 py-10 lg:px-[10.25rem] 2xl:px-72 sm:bg-white z-50 ${
        isScrolling ? "lg:py-4 sm:shadow-sm" : "lg:py-12"
      }`}
    >
      <a href="/">
        <LogoBookmark isPrimary={true} textColor="#242A45" className="ml-2" />
      </a>
      <Desktop items={items} />
      <Mobile items={items} />
    </motion.nav>
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
      <Button className="bg-accent hover:ring-2 ring-accent hover:text-accent ml-1.5 uppercase px-9 py-2.5">
        Login
      </Button>
    </ul>
  );
}

const variant = {
  hidden: { opacity: 0, x: 500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed flex bg-background/90 w-full left-0 h-full top-0 px-8 py-10 flex-col"
          >
            <LogoBookmark
              isPrimary={false}
              textColor="#FFFF"
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
            <Button className="border-2 mt-6 py-2 text-xl uppercase tracking-widest hover:text-background">
              Login
            </Button>
            <div className="w-full flex justify-center gap-10 mt-auto">
              <a href="/">
                <img src={IconFacebook} />
              </a>
              <a href="/">
                <img src={IconTwitter} />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
