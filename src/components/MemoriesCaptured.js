import React, { useState, useRef } from 'react'
import { frame1, frame2, frame3, frame4 } from '../assets/frame-images/Index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftarrow from "../assets/images/leftarrow.png"
import rightarrow from "../assets/images/rightarrow.png"
import Buttoon from "../components/ui/Buttoon"
export const momentsdata = [
    {
        name: "weddings",
        image: frame1
    },
    {
        name: "conferences",
        image: frame2,
    },
    {
        name: "hangouts",
        image: frame3
    },
    {
        name: "ceremonies",
        image: frame4
    },
    {
        name: "dinner dates",
        image: frame2,


    },

]

const MemoriesCaptured = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleActiveState = (index) => {
        setActiveIndex(index)
    }
    const sliderRef = useRef(null)

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of buttons visible at a time
        slidesToScroll: 1, // Number of buttons scrolled at a time
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // For tablets and below
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // For mobile screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className='bg-foundation max-w-[1500px] w-full flex-col flex items-center justify-center'>
            <div className='py-10 max-w-[1500px] w-[835px] '>
                <div className='text-white capitalize flex flex-col items-center justify-center'>
                    <p className="font-freehand  mt-10 capitalize"> See the Events We've Brought to Life</p>
                    <p className='font-garamond  leading-tight  text-[46.5px]'>moments <span className='font-garamond italic font-extralight'> crafted,</span> memories  <span className='font-garamond italic  font-normal'>captured </span></p>
                </div>
                <p className='text-white text-center text-sm font-garamond py-3' >
                    Explore our portfolio to experience the artistry and attention to detail that goes into every Eventruly occasion. From elegant weddings to lively private parties and sophisticated corporate events, our gallery showcases the unique moments we've created for our clients.
                </p>
            </div>
            
            <div className='border border-yellow max-w-[675px] w-full flex justify-between items-center py-5 px-4 rounded-lg mb-4'>
                {momentsdata.map((moment, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div key={index} >
                            <div className={`border cursor-pointer border-yellow px-3 py-2 capitalize rounded-md hover:bg-yellow hover:text-black ${isActive ? 'bg-yellow text-black' : 'bg-transparent text-white'}`} onClick={() => handleActiveState(index)}>
                                <p className=''>{moment.name}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="w-[90%] max-w-[1200px] py-14 relative">
                {/* Carousel Slider */}
                <Slider ref={sliderRef} {...settings}>
                    {momentsdata.map((moment, index) => (
                        <div key={index}>
                            <img
                                src={moment.image}
                                alt={`moments captured image ${index}`}
                                className="w-full px-8"
                            />
                        </div>
                    ))}
                </Slider>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className="bg-yellow border w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        <img src={rightarrow} alt="previous" />
                    </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10">
                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        className="bg-yellow border w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        <img src={leftarrow} alt="next" />
                    </button>
                </div>
            </div>


        </div>

    )
}

export default MemoriesCaptured
