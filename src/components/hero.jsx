import { motion } from "framer-motion";
import HeroBackground from "../assets/illustration-hero.svg";
import { Button } from "./ui/Button";

const container = {
  hidden: { opacity: 1, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

const child = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Hero() {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="visible"
      className="pt-[8.8rem] 2xl:pt-60 pb-[9.25rem] lg:pb-[7.5rem] md:pt-48 px-3 2xl:px-36 flex flex-col lg:flex-row-reverse overflow-hidden md:items-start relative 2xl:min-h-screen"
      role="banner"
    >
      <div className="bg-primary w-full h-[12.7rem] sm:h-64 lg:h-[22rem] rounded-l-full absolute -z-10 translate-y-[3.5rem] sm:translate-y-20 lg:translate-y-[9rem] translate-x-[3.7rem] sm:translate-x-64 lg:translate-x-[58.5rem] 2xl:translate-x-[70%] overflow-hidden select-none pointer-events-none" />
      <img
        src={HeroBackground}
        alt="Hero section illustration"
        className="pb-[3.75rem] sm:pb-8 md:pb-0 w-fit sm:w-2/3 lg:w-fit sm:mx-auto lg:mr-10"
      />
      <motion.div
        variants={container}
        animate="visible"
        initial="hidden"
        className="grid gap-6 md:gap-9 lg:gap-8 md:flex-1 sm:items-center sm:px-10 lg:px-20 text-center lg:text-start md:ml-[4.5rem] lg:pt-20"
      >
        <motion.h1
          variants={child}
          className="text-3xl md:text-4xl lg:text-5xl font-medium"
        >
          A Simple Bookmark Manager
        </motion.h1>
        <motion.p
          variants={child}
          className="text-secondary text-base md:text-lg -tracking-3% lg:tracking-normal max-w-[28ch] sm:max-w-[50ch] lg:max-w-full mx-auto"
        >
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </motion.p>
        <motion.div
          variants={child}
          className="text-sm gap-4 grid grid-flow-col justify-center lg:justify-start mt-2.5 md:mt-0"
        >
          <Button
            isMain
            className="bg-primary hover:ring-2 ring-primary hover:text-primary md:-tracking-1.5% py-3.5 px-4 lg:px-7"
          >
            Get it on Chrome
          </Button>
          <Button
            isMain
            className="bg-secondary/10 hover:ring-2 ring-secondary hover:text-secondary text-secondary md:-tracking-1.5% py-3.5 px-4 lg:px-7"
          >
            Get it on Firefox
          </Button>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
