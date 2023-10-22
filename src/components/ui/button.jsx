import { cn } from "../../lib/utils";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "rounded-md text-white font-medium tracking-2% md:tracking-10% lg:tracking-normal hover:bg-white transition-all duration-200 shadow-md shadow-primary/20",
        className
      )}
    >
      {children}
    </button>
  );
}
