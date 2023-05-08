import React from "react";
import { HeroSection } from "../../components/Hero Section/heroSection";
import { WhyChooseUs } from "../../components/Hero Section/heroSection";
import { NewArrival } from "../../components/New Arrival/NewArrival";
export const Home = () => {
    return (
        <div className="px-[20px] overflow-x-hidden pt-[70px] pb-[30px] ">
        <HeroSection/>
        <WhyChooseUs/>
        <NewArrival/>
        </div>
    )
}