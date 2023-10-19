import { Button } from "./ui/Button";
import { H2 } from "./ui/H2";
import { useState } from "react";
import { IconArrow } from "./IconArrow";

export function FAQ() {
  const items = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(index === openAccordion ? null : index);
  };

  return (
    <div className="mt-[8.6rem] sm:mt-[4.75rem] pb-20 px-8">
      <H2>Frequently Asked Questions</H2>
      <p className="text-secondary -tracking-3.5% text-center mt-4 lg:mt-6 lg:max-w-[45ch] lg:text-lg lg:tracking-normal mx-auto">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="mt-10 pt-1.5 lg:pt-5 lg:max-w-[33.5rem] mx-auto">
        {items.map((item, index) => {
          let isOpen = openAccordion === index;
          return (
            <details
              key={index}
              open={isOpen}
              onClick={(e) => e.preventDefault()}
              className="cursor-pointer border-b border-secondary/50"
            >
              <summary className="list-none">
                <button
                  className="text-2sm lg:text-lg w-full text-start pt-5 pb-6 lg:pb-3.5 lg:pr-5 flex justify-between items-center hover:text-accent"
                  onClick={() => handleAccordionClick(index)}
                >
                  {item.question}
                  <span>
                    <IconArrow
                      isOpen={isOpen}
                      className={`${
                        isOpen ? "rotate-180" : ""
                      } transition-all duration-300`}
                    />
                  </span>
                </button>
              </summary>
              <p className="text-secondary text-2sm lg:text-base pt-2 lg:pt-4 pb-8 leading-loose lg:leading-9">
                {item.answer}
              </p>
            </details>
          );
        })}
      </div>
      <div className="grid place-content-center mt-9 lg:mt-14">
        <Button isMain className="bg-primary hover:ring-2 ring-primary hover:text-primary text-sm py-3.5 px-6">
          More Info
        </Button>
      </div>
    </div>
  );
}
