import { useState, useRef } from "react";
import { Button } from "./ui/Button";
import { H2 } from "./ui/H2";
import IconError from "../assets/icon-error.svg";

export function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function submitHandler(e) {
    e.preventDefault();
    if (enteredEmail.match(emailRegex)) {
      setIsError(false);
      setEnteredEmail("");
      alert("Success");
    } else {
      setIsError(true);
    }
  }

  return (
    <section id="contact" className="bg-primary text-white pt-[4.25rem] lg:pt-16 pb-7 sm:pb-10 px-8 text-center relative">
      <span className="uppercase text-sm tracking-[3.55px] lg:tracking-[4.5px]">
        35,000+ already joined
      </span>
      <H2 className="mt-1.5 lg:mt-8 lg:max-w-[20ch] mx-auto leading-tight">
        Stay up-to-date with what we’re doing
      </H2>
      <form
        noValidate
        onSubmit={(e) => submitHandler(e)}
        className="py-8 sm:py-9 flex flex-col sm:flex-row gap-4 max-w-[440px] mx-auto"
      >
        <label className="sr-only" htmlFor="emailForm">
          Enter your email address
        </label>
        <span className="relative flex-grow">
          {isError ? (
            <span className="bg-accent ring-2 ring-accent rounded-b-md absolute -bottom-6 left-0 text-xs italic text-start px-3 pt-3 pb-1 w-full select-none pointer-events-none">
              Whoops, make sure it's an email
            </span>
          ) : null}
          {isError ? (
            <img
              src={IconError}
              className="absolute z-20 bottom-1/2 translate-y-1/2 right-0 pr-4"
            />
          ) : null}
          <input
            id="emailForm"
            type="email"
            className={`text-background relative w-full px-5 py-3.5 rounded-md text-sm ${
              isError ? "ring-2 ring-accent" : ""
            }`}
            placeholder="Enter your email address"
            ref={inputRef}
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
        </span>
        <Button className="sm:flex-1 text-sm py-3.5 sm:py-0 sm:px-6 whitespace-nowrap bg-accent hover:ring-2 hover:ring-accent hover:text-accent w-full">
          Contact Us
        </Button>
      </form>
    </section>
  );
}
