import { H2 } from "../ui/H2";
import { Button } from "../ui/Button";

export function TabContent({ title, description, img }) {
  return (
    <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-10 lg:gap-0 py-[3.75rem] lg:max-w-[1440px] lg:mx-auto">
      <div>
        <div className="bg-primary w-full h-[12.7rem] sm:h-56 lg:h-[22rem] 2xl:h-[25rem] rounded-r-full absolute -z-10 translate-y-[2.1rem] sm:translate-y-16 lg:translate-y-[5.5rem] -translate-x-[5rem] sm:-translate-x-64 lg:-translate-x-[56.25%] 2xl:-translate-x-[69%] overflow-hidden select-none pointer-events-none" />
        <img
          className="h-[12.5rem] sm:h-64 lg:h-[21.7rem] mx-auto lg:mx-0 lg:ml-auto lg:mt-1.5 lg:mr-3.5"
          src={img}
        />
      </div>
      <div className="text-center lg:text-start py-10 lg:px-[6.8rem] lg:py-[4.5rem] lg:space-y-7">
        <H2 className="lg:text-start">{title}</H2>
        <p className="text-secondary text-base md:text-lg leading-[1.55] -tracking-3% lg:tracking-normal max-w-[31ch] sm:max-w-[40ch] lg:max-w-full lg:pr-10 mx-auto mt-2.5 lg:mt-0">
          {description}
        </p>
        <Button
          isMain
          className="bg-primary lg:text-sm hidden lg:block hover:ring-2 ring-primary hover:text-primary px-7 py-4"
        >
          More Info
        </Button>
      </div>
    </div>
  );
}
