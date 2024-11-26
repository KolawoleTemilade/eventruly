import React from "react";
import Header from "./Header";
import Buttoon from "./ui/Buttoon";
import heroimg from "../assets/images/heroimg.png"

const Hero = () => {
    return (
        <div className=" bg-secondary ">
            <div className="  py-5 ">
                <Header />

                <div className=" py-16 space-y-10 mx-20 ">
                    <div className="">
                        <p className="font-freehand text-foundation mt-10">Moments That Matter, Events to Remember</p>
                        <div className="flex  justify-between">
                            <p className="font-garamond text-[59.17px] w-[700px] font-semibold">Expertly planned,<span className="italic font-garamond text-foundation font-extralight"> beautifully </span>delivered.</p>
                            <div>
                                <Buttoon>book consultation</Buttoon>
                            </div>
                        </div>

                    </div>
                    <div className="w-full">
                        <img src={heroimg} className="w-full border rounded-3xl" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;