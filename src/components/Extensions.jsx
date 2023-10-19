import LogoChrome from "../assets/logo-chrome.svg";
import LogoFirefox from "../assets/logo-firefox.svg";
import LogoOpera from "../assets/logo-opera.svg";
import { Button } from "./ui/Button";
import { H2 } from "./ui/H2";

export function Extensions() {
  const items = [
    { name: "Chrome", version: "62", logo: LogoChrome },
    { name: "Firefox", version: "55", logo: LogoFirefox },
    { name: "Opera", version: "46", logo: LogoOpera },
  ];

  return (
    <div className="text-center px-5 pt-10 pb-20 lg:py-[10.25rem]">
      <H2>Download the extension</H2>
      <p className="text-secondary mt-3 lg:mt-6 sm:text-lg max-w-[30ch] lg:max-w-[50ch] mx-auto tracking-tight lg:tracking-normal pb-[3.15rem]">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <ul className="grid lg:grid-flow-col gap-2 lg:gap-[1.9rem] px-7 lg:justify-center lg:mt-2">
        {items.map((item, index) => (
          <li style={{transform: `translateY(${index * 2.5}rem)`}} className="grid rounded-xl justify-center pt-10 pb-6 px-5 lg:px-6 max-w-[30rem] mx-auto shadow-xl shadow-primary/10 bg-dots bg-no-repeat sm:bg-repeat-x bg-[center_16.5rem]">
            <img src={item.logo} className="mx-auto" />
            <h3 className="font-medium text-xl mt-7 lg:mt-8">Add to {item.name}</h3>
            <p className="text-secondary mt-2 lg:mt-1 text-2sm">
              Minimum version {item.version}
            </p>
            <Button className="mt-16 lg:mt-[4rem] bg-primary hover:ring-2 ring-primary hover:text-primary text-sm py-3.5 px-9 lg:px-10 lg:py-[15px]">
              Add & Install Extension
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
