import React from 'react'
import ctobg from "../assets/images/ctobg.png";
import Buttoon from './ui/Buttoon';

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${ctobg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center", width:"100%"}} className='flex items-center py-16'>
            <div className='bg-secondary max-w-[565px] w-full border rounded-md ml-32 px-7 '>
                <div className=''>
                    <p className="font-freehand text-foundation mt-7 capitalize"> contact us</p>
                    <p className='text-[46.67px] font-garamond font-bold '>Connect with Us to Start <span className='font-normal italic text-foundation'>Planning</span> the Event of Your <span className='font-normal italic text-foundation'>Dreams</span></p>
                </div>
                <p className='max-w-[600px] w-full text-sm font-garamond mt-4'>Ready to start planning? We're here to turn your ideas into unforgettable moments. Reach out today to discuss your event needs, ask questions, or begin creating something truly special together. Let's make it memorable - together.</p>
                <div className='w-[30%]'>
                <Buttoon className= "border">contact us</Buttoon>
                </div>
            </div>

        </div>
    )
}

export default ContactUs
