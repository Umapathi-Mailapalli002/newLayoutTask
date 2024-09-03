import React from 'react'
import Line from './Line'
import RightCard from './RightCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function RightPostion() {
  return (
    <div className='h-[80vh]'>
      <RightCard className="">
      <Tabs defaultValue="aboutMe" className="w-full">
  <TabsList className="rounded-[20px] px-2 grid w-full grid-cols-3 sm:text-[0.8rem] md:text-[0.8rem] lg:text-xl text-[#b3c0c7] bg-[#161616]">
    <TabsTrigger  value="aboutMe">About Me</TabsTrigger>
    <TabsTrigger value="experiences">Experiences</TabsTrigger>
    <TabsTrigger value="recommended">Recommended</TabsTrigger>
  </TabsList>
  <TabsContent value="aboutMe">Make changes to your account here.</TabsContent>
  <TabsContent value="experiences">Change your password here.</TabsContent>
  <TabsContent value="recommended">Change your password here.</TabsContent>
</Tabs>
<div className='h-16 w-2 bg-gradient-to-t from-[#404245] to-[#858989] rounded-3xl mt-20 shadow-[3px_4px_5px_-2px_black]'></div>
      </RightCard>
      <Line/>
      <RightCard/>
      <Line/>
    </div>
  )
}

export default RightPostion
