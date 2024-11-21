import React from 'react'

const Metrics = () => {
    return (
        <div className='bg-brown w-full h-[84px] '>
            <ul className=' flex justify-between text-white mx-20 items-center py-4'>
                <li className=' flex flex-col items-center justify-center'>4k+ <span className='capitalize'>events planned</span></li>
                <li className=' flex flex-col items-center justify-center'>10 <span className='capitalize'>years of experience</span></li>
                <li className='flex flex-col items-center justify-center'>98%<span className='capitalize'>clients satisfaction</span></li>
                <li className='flex flex-col items-center justify-center'>30+<span className='capitalize'>staffs strength</span></li>
            </ul>
        </div>
    )
}

export default Metrics
