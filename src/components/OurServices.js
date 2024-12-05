import React, { useRef } from 'react'
import Slider from "react-slick";
import hangout from "../assets/images/hangout.png"
import wedding from "../assets/images/wedding.png"
import conference from "../assets/images/conference.png"
import leftarrow from "../assets/images/leftarrow.png"
import rightarrow from "../assets/images/rightarrow.png"
import {evt, evt1, evtlogo, logoevt, evts, peoplelogo} from "../assets/evt-logo/Index"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const servicedata = [
    {
        id: 1,
        image: wedding
    },
    {
        id: 2,
        image: conference
    },
    {
        id: 3,
        image: hangout
    }

]
export const sponsorship = [
   
    {
        image: evt1
    },
    {
        image: logoevt
    },
    {
        image: evts
    },
    {
        image: evtlogo
    },
    {
        image: evts
    },
    {
        image: evtlogo
    },
   
    {
        image: peoplelogo
    },
    {
        image: evt
    },
  
]

const OurServices = () => {
    const sliderRef = useRef(null)

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of buttons visible at a time
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
        <div className='flex flex-col items-center justify-center pt-10 '>
            <section className=' w-[670px]  flex flex-col items-center justify-center'>
                <div className='w-[470px] text-center'>
                    <p className="font-freehand text-foundation mt-10 capitalize"> our services</p>
                    <p className='font-garamond leading-tight font-bold text-[46.5px]'>From Vision to <span className='font-garamond italic text-foundation font-normal'> Reality,</span> We  <span className='font-garamond italic text-foundation font-normal'>Plan </span>It All</p>
                </div>
                <p className='text-center font-garamond text-sm'>Whether you're celebrating a wedding, hosting a corporate event, or gathering for a private party, Eventruly brings your ideas to life. Our full-service offerings cover every detail - from venue selection to décor, catering, and more - ensuring a flawless and memorable experience every time.</p>
            </section>

            {/* images carousel */}
            <section className="w-[90%] max-w-[1200px] py-14  relative  ">
            <Slider ref={sliderRef} {...settings}>
                    {servicedata.map((service) => (
                        <div key={service.id} >
                            <img src={service.image} alt={`service ${service.id}`} className='w-full px-8 ' />
                        </div>
                    ))}
                </Slider>
                {/* arrow buttons */}
                
                <div className="absolute top-1/2 transform -translate-y-1/2 left-[10px] z-10">
                    {/* left arrow */}
                    <button onClick={() => sliderRef.current.slickPrev()} className="bg-yellow border w-10 h-10 rounded-full flex items-center justify-center">
                        <img src={rightarrow} />
                    </button>
                </div>
                
                <div className="absolute top-1/2 transform -translate-y-1/2 right-[10px] z-10">
                    {/* right arrow */}
                    <button onClick={() => sliderRef.current.slickNext()} className="bg-yellow border w-10 h-10 rounded-full flex items-center justify-center">
                        <img src={leftarrow} />
                    </button>
                </div>
                
            </section>

            {/* sponsorship */}
            <section className='w-full px-20 max-w-[1200px] flex flex-col items-center justify-center py-10 '>
            <p className="font-freehand text-foundation mt-10 capitalize"> proudly sponsored by</p>
            <div className='flex justify-between items-center w-full py-7 '>
                {sponsorship.map((sponsor, i) => (
                    <div key={i} className='  '> 
                        <img src={sponsor.image} className=' w-[90%]  px-4'/>
                    </div>
                ))}
            </div>
            </section>
        </div>
    )
}

export default OurServices
