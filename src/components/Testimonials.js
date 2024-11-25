import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='text-center max-w-[735px] w-full '>
        <p className="font-freehand text-foundation mt-10 capitalize"> testimonials</p>
        <p className='text-[46.67px] font-garamond font-bold '>Hear from Those Who <span className='italic text-foundation font-normal'>Trusted Us </span> to Make Their <span className='italic text-foundation font-normal '>Moments Extraordinary</span></p>
        </div>
        <div className='max-w-[704px] w-full bg-primary'>
            <p className='max-w-[639px] text-black w-full font-bold font-garamond'>
            "Eventruly made our wedding day everything we dreamed of and more! From the first consultation to the final send-off, the team’s attention to detail and genuine care for our vision was incredible. They handled every element flawlessly, allowing us to relax and truly enjoy the day. Our guests couldn’t stop raving about the beautiful decor and seamless flow of the event. Choosing Eventruly was the best decision we made – they brought our dream to life in the most magical way!"
            </p>
        </div>
      
    </div>
  )
}

export default Testimonials
