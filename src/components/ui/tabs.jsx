import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["About Me", "Experiences", "Recommended"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <>
    <div>
    <div className="h-14 lg:h-16 items-center px-2 justify-center rounded-[20px] grid w-full grid-cols-3 text-[#b3c0c7] bg-[#161616]">
      {tabs.map((tab) => (
        <Chip
          className="whitespace-nowrap sm:text-[0.8rem] md:text-[0.8rem] lg:text-xl"
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
    <div className="mt-3">
{ selected === "About Me" ?  (<div className="text-[0.9rem] leading-[17.7px] md:text-[1rem] md:leading-[17px] lg:text-xl lg:leading-6 lg:mt-6 text-[#919192]">
        Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now. <br /> <br /> I was
            born and raised in Albany, NY& have been living in Santa Carla for
            the past 10 years my wife Tiffany and my 4 year old twin
            daughters-Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
        </div>) : ( selected === "Experiences" ? (<div className="text-[0.9rem] leading-[17.7px] mt-2 md:text-[1rem] md:leading-[17px] lg:text-xl lg:leading-6 lg:mt-6 text-[#919192]">
        My background includes a Bachelor’s degree in Business
            Administration from the University of Albany and over 5 years of
            experience in sales and customer relationship management. Before
            joining Salesforce, I worked at TechCorp, where I led a team to
            increase client retention by 20% through innovative CRM solutions.
        </div>) : (<div className="text-[0.9rem] leading-[17.7px] mt-2 md:text-[1rem] md:leading-[17px] lg:text-xl lg:leading-6 lg:mt-6 text-[#919192]">
        To get the most out of Salesforce, maximize the use of Sales Cloud
            and Service Cloud for efficient customer management, integrate with
            other systems for seamless workflows, and leverage analytics for
            actionable insights. Stay updated through Salesforce training and
            webinars, and connect with other users in the Salesforce community
            for additional support and best practices.
        </div>) )
        }
      </div>
    </div>
    
    </>
    
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white font-medium sm:text-[0.8rem] md:text-[0.8rem] lg:text-xl"
          : "text-[#b3c0c7] h-11 lg:h-[52px] font-medium hoverEff sm:text-[0.8rem] md:text-[0.8rem] lg:text-xl"
      } text-sm transition-colors rounded-2xl relative`}
    >
      <div className="hover-card -mt-3 rounded-2xl bg-gradient-to-l from-[#292a2e] to-[#141416]"></div>
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ duration: 0.3 }}
          className="absolute -mt-3 inset-0 z-0 bg-[#2d2e34] lg:shadow-[14px_15px_40px_15px_black] sm:shadow-[10px_12px_30px_12px_black] sm:p-[22.5px] md:p-[22.5px] lg:p-[26.5px] rounded-2xl"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
