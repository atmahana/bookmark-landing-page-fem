import HeroBackground from "../assets/illustration-hero.svg";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <header
      className="pt-[8.8rem] pb-[9.25rem] lg:pb-[7.5rem] md:pt-48 px-3 flex flex-col lg:flex-row-reverse overflow-hidden md:items-start"
      role="banner"
    >
      <div className="bg-primary w-full h-[12.7rem] sm:h-64 lg:h-[22rem] rounded-l-full absolute -z-10 translate-y-[3.5rem] sm:translate-y-20 lg:translate-y-[9rem] translate-x-[3.7rem] sm:translate-x-64 lg:translate-x-[65%] overflow-hidden select-none pointer-events-none"/>
      {/* <div className="bg-primary w-5/6 h-[12.7rem] sm:h-64 rounded-l-full absolute -z-10 top-[12.3rem] left-[4.5rem] select-none pointer-events-none"/> */}
      <img
        src={HeroBackground}
        alt="Hero section illustration"
        className="pb-[3.75rem] sm:pb-8 md:pb-0 w-fit sm:w-2/3 lg:w-fit sm:mx-auto lg:mr-10"
      />
      <div className="grid gap-6 md:gap-9 lg:gap-8 md:flex-1 sm:items-center sm:px-10 lg:px-20 text-center lg:text-start md:ml-[4.5rem] lg:pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">A Simple Bookmark Manager</h1>
        <p className="text-secondary text-base md:text-lg -tracking-3% lg:tracking-normal max-w-[28ch] sm:max-w-[50ch] lg:max-w-full mx-auto">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="text-sm gap-4 grid grid-flow-col justify-center lg:justify-start mt-2.5 md:mt-0">
          <Button isMain className="bg-primary hover:ring-2 ring-primary hover:text-primary shadow-lg shadow-secondary/20 md:-tracking-1.5%">
            Get it on Chrome
          </Button>
          <Button isMain className="bg-secondary/10 hover:ring-2 ring-secondary hover:text-secondary text-secondary shadow-lg shadow-secondary/20 md:-tracking-1.5%">
            Get it on Firefox
          </Button>
        </div>
      </div>
    </header>
  );
}
