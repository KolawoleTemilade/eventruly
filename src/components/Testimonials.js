import React, { useRef } from 'react'
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import adam from "../assets/images/adam.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftarrow from "../assets/images/leftarrow.png"
import rightarrow from "../assets/images/rightarrow.png"

export const testimonialdata = [
    {
        id: 1,
        image: adam,
        text: "Eventruly made our wedding day everything we dreamed of and more! From the first consultation to the final send-off, the team's attention to detail and genuine care for our vision was incredible. They handled every element flawlessly, allowing us to relax and truly enjoy the day. Our guests couldn't stop raving about the beautiful decor and seamless flow of the event. Choosing Eventruly was the best decision we made - they brought our dream to life in the most magical way!"

    },
    {
        id: 2,
        image: adam,
        text: "Eventruly made our wedding day everything we dreamed of and more! From the first consultation to the final send-off, the team's attention to detail and genuine care for our vision was incredible. They handled every element flawlessly, allowing us to relax and truly enjoy the day. Our guests couldn't stop raving about the beautiful decor and seamless flow of the event. Choosing Eventruly was the best decision we made - they brought our dream to life in the most magical way!"

    },
]

const Testimonials = () => {
    const sliderRef = useRef(null)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of buttons visible at a time
        slidesToScroll: 1, // Number of buttons scrolled at a time
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
        <div className='flex max-w-[1500px] py-20  flex-col items-center justify-center bg-white'>
            <div className='text-center max-w-[735px] w-full '>
                <p className="font-freehand text-foundation mt-10 capitalize"> testimonials</p>
                <p className='text-[46.67px] font-garamond font-bold '>Hear from Those Who <span className='italic text-foundation font-normal'>Trusted Us </span> to Make Their <span className='italic text-foundation font-normal '>Moments Extraordinary</span></p>
            </div>
            <div className='relative max-w-[1200px] w-full '>

                <img src={left} className='absolute right-[10] top-[-10]' />

                <div className='max-w-[1500px] w-full relative '>
                    <Slider ref={sliderRef} {...settings}>
                        {testimonialdata.map((testi, index) => (
                            <div key={index} className=' flex items-center max-w-[1200px] w-full  mt-20 ml-20 '>
                                <img src={testi.image} className='relative w-[450px] ' />
                                <div className='max-w-[714px] w-full  absolute top-44  flex items-center ml-80'>
                                    <p className='max-w-[714px] text-center p-7 leading-tight rounded-lg  bg-secondary   text-black w-full font-bold font-garamond  '>
                                        {testi.text}
                                    </p>
                                <div>  <img src={right} className='absolute right-[0] top-40' /></div>
                                </div>
                                  
                            </div>
                        ))
                        }

                    </Slider>
                    <div className='w-1/2 flex items-center justify-center'>
                        <div className="absolute top--10 transform -translate-y-1/2 right-[600px] z-10">
                            {/* right arrow */}
                            <button onClick={() => sliderRef.current.slickPrev()} className="bg-yellow border w-10 h-10 rounded-full flex items-center justify-center">
                                <img src={rightarrow} />
                            </button>
                        </div>
                        <div className="absolute top--28 transform -translate-y-1/2 left-[600px] z-10">
                            {/* left arrow */}
                            <button onClick={() => sliderRef.current.slickNext()} className="bg-yellow border w-10 h-10 rounded-full flex items-center justify-center">
                                <img src={leftarrow} />
                            </button>
                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default Testimonials
