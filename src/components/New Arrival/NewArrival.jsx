import React from "react";
import newArrivalImg1 from '../../assets/circleT.avif';
import newArrivalImg2 from '../../assets/cushion1.avif';
import newArrivalImg3 from '../../assets/cushion2.avif';
import newArrivalImg4 from '../../assets/img2.webp';
import newArrivalImg5 from '../../assets/officeF3.avif';
import newArrivalImg6 from '../../assets/officeF2.avif';
import newArrivalImg7 from '../../assets/kitchen2.jpg';
import newArrivalImg8 from '../../assets/officeF2.avif';

import {AiFillShopping, AiFillHeart} from 'react-icons/ai';

let newArrivalObj = [
    {
        Img : newArrivalImg1,
        name: 'sofa',
    },
    {
        Img : newArrivalImg2,
        name: 'sofa',
    },
    {
        Img : newArrivalImg3,
        name: 'sofa',
    },
    {
        Img : newArrivalImg4,
        name: 'sofa',
    },
    {
        Img : newArrivalImg5,
        name: 'sofa',
    },
    {
        Img : newArrivalImg6,
        name: 'sofa',
    },
    {
        Img : newArrivalImg7,
        name: 'sofa',
    },
    {
        Img : newArrivalImg8,
        name: 'sofa',
    }
]


export const NewArrival = () => {
    return(
        <div className="py-[50px] ">
       <div>
        <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit font-myfont text-[25px] md:text-[40px] ">New arrival</h1>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-x-auto ">
{
newArrivalObj.map(items => (
    <div className="p-3 rounded relative  border my-[10px] min-w-[200px] ">
        <div className=" p-4 max-w-[300px] ">
        <img src={items.Img} alt="" />
        </div>
        <i className="absolute top-0 right-0 m-2 bg-Icon px-[10px] py-[2px] rounded text-slate-50 ">New</i>
        <div className="flex absolute bottom-0 left-0 right-0  bg-Tp p-2 flex-row justify-between ">
            <h1 className="md:text-[20px] text-[15px] text-white font-fonty uppercase ">{items.name}</h1>
            <div className="flex flex-row gap-2 items-center">
            <AiFillHeart className="text-[25px] p-1  text-red-500 shadow rounded-full md:text-[30px]  "/>
    <AiFillShopping className="text-[25px] p-1 text-white bg-slate-500 rounded-full  md:text-[35px] "/>
            </div>
        </div>
    </div>
))
}
     </div>
       </div>
        </div>
    )
}