import React, { useRef, useState } from "react";
import Line from "./Line";
import RightCard from "./RightCard";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image from "../assets/image.png";

function RightPostion() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const uploadRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const handleImageUplaod = () => {
    if(uploadRef.current){
      uploadRef.current.click();
    }

  }

  const handleCustomPrevClick = () => {
    if(prevButtonRef.current.disabled){
      setIsPrevDisabled(true);
      
    }
    if (prevButtonRef.current) {
      setIsNextDisabled(false);
      prevButtonRef.current.click(); // Trigger the click event on the hidden button
    }
  };

  const handleCustomNextClick = () => {
    if(nextButtonRef.current.disabled){
      setIsNextDisabled(true);
    }
    if (nextButtonRef.current) {
      setIsPrevDisabled(false);
      nextButtonRef.current.click(); // Trigger the click event on the hidden button
    }
  };
  return (
    <div className="h-[88vh]">
      <RightCard tooltip="My Profile" className="overflow-hidden">
        <Tabs defaultValue="aboutMe" className="w-full ">
          <TabsList className="rounded-[20px] px-2 grid w-full grid-cols-3 sm:text-[0.8rem] md:text-[0.8rem] lg:text-xl text-[#b3c0c7] bg-[#161616]">
            <TabsTrigger value="aboutMe">About Me</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>
          <TabsContent
            className="text-[0.9rem] leading-[17.7px] mt-2 md:text-[1rem] md:leading-[17px] lg:text-xl lg:leading-6 lg:mt-6 text-[#919192]"
            value="aboutMe"
          >
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now. <br /> <br /> I was
            born and raised in Albany, NY& have been living in Santa Carla for
            the past 10 years my wife Tiffany and my 4 year old twin
            daughters-Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </TabsContent>
          <TabsContent
            className="text-[0.9rem] leading-[17.7px] mt-2 md:text-[1rem] md:leading-[17px] lg:text-xl lg:leading-6 lg:mt-6 text-[#919192]"
            value="experiences"
          >
            My background includes a Bachelor’s degree in Business
            Administration from the University of Albany and over 5 years of
            experience in sales and customer relationship management. Before
            joining Salesforce, I worked at TechCorp, where I led a team to
            increase client retention by 20% through innovative CRM solutions.
          </TabsContent>
          <TabsContent
            className="text-[0.9rem] leading-[17.7px] mt-2 md:text-[1rem] md:leading-[17px] lg:text-xl lg:leading-6 lg:mt-6 text-[#919192]"
            value="recommended"
          >
            To get the most out of Salesforce, maximize the use of Sales Cloud
            and Service Cloud for efficient customer management, integrate with
            other systems for seamless workflows, and leverage analytics for
            actionable insights. Stay updated through Salesforce training and
            webinars, and connect with other users in the Salesforce community
            for additional support and best practices.
          </TabsContent>
        </Tabs>
        <div className="h-full lg:ml-7 ml-3">
          <div className="h-16 w-2 bg-gradient-to-t from-[#404245] to-[#858989] rounded-3xl mt-24 shadow-[3px_4px_5px_-2px_black]"></div>
        </div>
      </RightCard>
      <Line />
      <RightCard className="" tooltip="Gallery Card ">
        <div className="w-full">
          <div className="lg:flex lg:justify-end  w-full">
            <div className="flex justify-between">
              <div className="">
                <button className="ml-1 cursor-default bg-[#171717] text-white lg:text-xl py-3 lg:py-4 lg:px-10 px-6 lg:rounded-[20px] rounded-xl font-poppins font-medium ">
                  Gallery
                </button>
              </div>
              <div onClick={handleImageUplaod} className="mt-2 lg:mt-3 shadow-[-1.5px_-1px_5px_0px_#747980] lg:absolute lg:right-[16%] rounded-3xl bg-black">
                <Button
                  className="hover:bg-[#423f3f] shadow-[7px_10px_6px_-2px_#23272b,inset_0px_3.5px_5px_-2px_#94949c]  flex justify-center items-center  rounded-3xl px-2 py-5 lg:py-[24px] lg:px-[20px] text-white bg-[#4e545c]"
                  variant="secondary"
                >
                  <span className="text-[1.4rem] -mt-1 mr-[1px] ">+</span> ADD
                  IMAGE
                </Button>
              </div>
            </div>
            <input ref={uploadRef} className="hidden" type="file" name="pics" id="addPics" />
            <div className="w-full lg:relative lg:right-3 flex justify-center lg:flex lg:justify-end lg:mt-3 lg:ml-3 xl:ml-5 2xl:ml-5 mt-4">
              <div
                onClick={handleCustomPrevClick}
                className={!isPrevDisabled ? "mr-3 rounded-full size-[42px] flex justify-center items-center bg-gradient-to-br from-[#2f3337] to-[#181a1b] active:from-[#aad2ff] active:to-[#090909] hover:bg-gradient-to-br hover:from-[#222325] hover:to-[#222325] cursor-pointer shadow-[-4px_-3px_20px_-5px_#718eaf]" : "mr-3 rounded-full size-[42px] flex justify-center items-center bg-gradient-to-br from-[#aad2ff] to-[#090909] cursor-pointer shadow-[-4px_-3px_20px_-5px_#718eaf]"}
              >
                <HiOutlineArrowSmallLeft
                  className={!isPrevDisabled ? "text-2xl text-[#919192] hover:-translate-x-[0.5px] active:text-white" : "text-2xl hover:-translate-x-[0.5px] text-white"}
                  style={{ strokeWidth: "2.3" }}
                />
              </div>
              <div
                onClick={handleCustomNextClick}
                className={!isNextDisabled ? "ml-1 rounded-full size-[42px] flex justify-center items-center bg-gradient-to-br from-[#2f3337] to-[#181a1b] hover:bg-gradient-to-br hover:from-[#222325] hover:to-[#222325] active:bg-gradient-to-br active:from-[#aad2ff] active:to-[#090909]  cursor-pointer shadow-[-4px_-3px_20px_-5px_#718eaf]" : "ml-1 rounded-full size-[42px] flex justify-center items-center bg-gradient-to-br from-[#aad2ff] to-[#090909] cursor-pointer shadow-[-4px_-3px_20px_-5px_#718eaf]"}
              >
                <HiOutlineArrowSmallRight
                  className={!isNextDisabled ? "text-2xl text-[#919192] active:text-white hover:translate-x-[0.5px]" : "text-2xl text-white hover:translate-x-[0.5px]"}
                  style={{ strokeWidth: "2.3" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 lg:mt-4">
            <Carousel
              opts={{
                align: "start",
              }}
              className=""
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="p-[20px_20px_40px_10px] md:pl-5 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <img
                    className="size-28 lg:h-[10rem] lg:w-48  rounded-3xl grayscale brightness-75 hover:grayscale-0 hover:translate-x-3 hover:brightness-100 hover:-rotate-2 hover:-translate-y-2  w-full hover:scale-110 ease-in-out hover:shadow-2xl hover:shadow-black transition-transform duration-300 transform origin-center"
                    src={image}
                    alt="carouselImg"
                  />
                </CarouselItem>
                <CarouselItem className="p-[20px_20px_40px_10px] md:pl-5 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <img
                    className="size-28 lg:h-[10rem] lg:w-48  rounded-3xl grayscale brightness-75 hover:grayscale-0 hover:translate-x-3 hover:brightness-100 hover:-rotate-2 hover:-translate-y-2  w-full hover:scale-110 ease-in-out hover:shadow-2xl hover:shadow-black transition-transform duration-300 transform origin-center"
                    src={image}
                    alt="carouselImg"
                  />
                </CarouselItem>
                <CarouselItem className="p-[20px_20px_40px_10px] md:pl-5 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <img
                    className="size-28 lg:h-[10rem] lg:w-48  rounded-3xl grayscale brightness-75 hover:grayscale-0 hover:translate-x-3 hover:brightness-100 hover:-rotate-2 hover:-translate-y-2  w-full hover:scale-110 ease-in-out hover:shadow-2xl hover:shadow-black transition-transform duration-300 transform origin-center"
                    src={image}
                    alt="carouselImg"
                  />
                </CarouselItem>
                <CarouselItem className="p-[20px_20px_40px_10px] md:pl-5 sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <img
                    className="size-28 lg:h-[10rem] lg:w-48  rounded-3xl grayscale brightness-75 hover:grayscale-0 hover:translate-x-3 hover:brightness-100 hover:-rotate-2 hover:-translate-y-2  w-full hover:scale-110 ease-in-out hover:shadow-2xl hover:shadow-black transition-transform duration-300 transform origin-center"
                    src={image}
                    alt="carouselImg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden" ref={prevButtonRef} />
              <CarouselNext className="hidden" ref={nextButtonRef} />
            </Carousel>
          </div>
        </div>
      </RightCard>
      <Line />
    </div>
  );
}

export default RightPostion;
