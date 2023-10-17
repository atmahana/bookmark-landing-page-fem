import { cn } from "../../lib/utils";

export function H2({ children, className }) {
  return (
    <h2
      className={cn(
        "text-2xl lg:text-3.5xl font-medium lg:tracking-normal text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
