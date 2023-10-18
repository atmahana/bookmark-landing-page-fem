import { useState } from "react";
import { cn } from "../../lib/utils";

const Tabs = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col md:flex-row sm:gap-12 lg:gap-0 justify-center text-center">
        {tabs.map((tab, index) => (
          <div key={index} className="border-t lg:border-none">
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={cn(
                `px-5 py-4 lg:px-0 lg:py-6 text-[17px] lg:w-60 cursor-pointer hover:text-accent ${
                  index === activeTab
                    ? "after:content-[''] after:block after:w-[68%] lg:after:w-full after:h-1 relative -z-10 after:absolute after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 after:bg-accent border-accent"
                    : "bg-none border-none text-secondary"
                }`,
                className
              )}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div className="p-3">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
