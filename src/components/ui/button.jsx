import { cn } from "../../lib/utils";

export function Button(props) {
  return (
    <button
      className={cn(
        `rounded-md text-white font-medium tracking-2% md:tracking-10% lg:tracking-normal hover:bg-white transition-all duration-200 ${
          props.isMain
            ? "px-[1.05rem] py-[0.95rem] md:px-7 md:py-[0.85rem]"
            : "p-4 md:px-[2.15rem] md:py-[0.625rem]"
        }`,
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
