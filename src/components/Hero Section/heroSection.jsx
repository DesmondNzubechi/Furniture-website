import React from "react";
import Heroimg from '../../assets/furniture1.avif';
import { Link } from "react-router-dom";
export const HeroSection = () => {
    return(
        <div className="flex my-[50px] gap-[30px]  justify-around flex-col md:flex-row items-center">
            <div className="md:max-w-[500px] flex flex-col gap-[10px] ">
               <h1 className="capitalize font-myfont  text-[30px] md:text-[50px] ">Home of quality furniture</h1>
               <p className="md:text-[27px] text-[20px] font-fonty text-slate-700 ">Find an elegant and luxurious interior designed by professional interior designer</p> 
               <Link className="bg-slate-900  w-fit px-[20px] py-[5px] rounded shadow-2xl text-[25px] text-slate-200 ">Explore</Link>
            </div>
            <div className="max-w-[650px]">
                <img src={Heroimg} alt="" />
            </div>
        </div>
    )
}