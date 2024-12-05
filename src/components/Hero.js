import React from "react";
import Header from "./Header";
import Buttoon from "./ui/Buttoon";
import heroimg from "../assets/images/heroimg.png"

const Hero = () => {
    return (
        <div className="  flex flex-col items-center justify-center ">
                <Header />
            <div className=" bg-secondary max-w-[1200px] w-full px-20 py-5 ">
                <section className=" py-16 space-y-10 max-w-[1200px] w-full">
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
                </section>
            </div>
        </div>
    )
};

export default Hero;