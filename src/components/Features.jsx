import { Button } from "./ui/Button";
import { H2 } from "./ui/H2";
import Tabs from "./tab/Tabs";
import { TabContent } from "./tab/TabContent";
import TabImage1 from "../assets/illustration-features-tab-1.svg";
import TabImage2 from "../assets/illustration-features-tab-2.svg";
import TabImage3 from "../assets/illustration-features-tab-3.svg";

export function Features() {
  const tabs = [
    {
      title: "Simple Bookmarking",
      content: (
        <TabContent
          title="Bookmark in one click"
          description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
          img={TabImage1}
        />
      ),
    },
    {
      title: "Speed Searching",
      content: (
        <TabContent
          title="Intelligent search"
          description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
          img={TabImage2}
        />
      ),
    },
    {
      title: "Easy Sharing",
      content: (
        <TabContent
          title="Share your bookmarks"
          description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
          img={TabImage3}
        />
      ),
    },
  ];
  return (
    <section id="features">
      <H2>Features</H2>
      <p className="text-secondary text-base md:text-lg leading-[1.55] -tracking-3% lg:tracking-normal max-w-[30ch] sm:max-w-[50ch] lg:max-w-[47ch] mx-auto text-center mt-2.5 lg:mt-7 pb-10">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <Tabs tabs={tabs} />
    </section>
  );
}
