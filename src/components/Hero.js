import React from "react";
import Header from "./Header";

const Hero = () => {
    return (
        <div className=" bg-secondary px-16 py-5 my-20">
            <Header />

            <div className=" py-16 px-16">
                <p className="font-freehand text-foundation">Moments That Matter, Events to Remember</p>
                <div className="flex  justify-between">
                    <p className="font-garamond italic text-[59.17px] w-[700px] font-semibold">Expertly planned,<span className="italic font-garamond text-foundation font-normal"> beautifully </span>delivered.</p>
                    <div>
                        <p className="bg-yellow py-2 px-4 my-12 leading-tight rounded-md">book consultation</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Hero;