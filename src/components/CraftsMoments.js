import React from 'react'
import videopic from "../assets/images/videopic.png"
import Buttoon from './ui/Buttoon'
import OurServices from './OurServices'

const CraftsMoments = () => {
    return (
        <div className=' bg-white'>
            {/* craftsmoment */}
            <div className='flex gap-20 items-center mx-20 pt-16'>
                <div  >
                    <img src={videopic} className='max-w-[554px]  w-full h-[380px]' />
                </div>
                <div className='flex flex-col  leading-tight'>
                    {/* text div*/}
                    <div className='text-left max-w-[500px] w-[500px]  '>
                        <div className='flex flex-col gap-1 '>
                            <p className="font-freehand text-foundation mt-10">Where Vision Meets Precision</p>
                            <h2 className='font-garamond leading-tight font-bold text-[46.5px]'>Crafting <span className='font-garamond italic text-foundation font-normal'>Moments,</span> Creating <span className='font-garamond italic text-foundation font-normal'> Memories</span> </h2>
                            <p className='font-garamond '>At Eventruly, we bring your event dreams to life with passion and precision. With years of experience and a commitment to excellence, we transform ideas into unforgettable experiences. Trust us to make your special moments truly memorable, with every detail thoughtfully crafted to reflect your unique vision.</p>
                        </div>
                    </div>
                    {/* button div */}
                    <div className='w-[120px] '>
                        <Buttoon >
                            our story
                        </Buttoon>
                    </div>

                </div>
            </div>
            <OurServices/>

        </div>
    )
}

export default CraftsMoments
