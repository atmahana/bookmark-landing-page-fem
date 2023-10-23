import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Tabs = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col md:flex-row lg:gap-0 justify-center text-center [&>*:nth-child(3)]:border-b">
        {tabs.map((tab, index) => (
          <div key={index} className="border-t sm:border-none">
            <button
              key={tab.title}
              onClick={() => handleTabClick(index)}
              className={cn(
                "relative px-5 py-4 sm:px-8 lg:px-0 lg:py-6 text-[17px] lg:w-60 cursor-pointer hover:text-accent bg-none border-none text-secondary",
                className
              )}
            >
              {tab.title}
              {index === activeTab ? (
                <motion.div
                  layoutId="underline"
                  className="w-[100%] sm:w-full h-1 absolute bottom-0 left-0 bg-accent border-accent"
                />
              ) : null}
            </button>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab ? tabs[activeTab].title : "empty"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="p-3"
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
