import React from 'react'

const Metrics = () => {
    return (
        <section className=' flex items-center justify-center h-[84px] '>
            <div className='bg-brown max-w-[1200px] w-full'>
            <ul className=' flex justify-between text-white px-20 items-center py-4'>
                <li className=' flex flex-col items-center justify-center'>4k+ <span className='capitalize'>events planned</span></li>
                <li className=' flex flex-col items-center justify-center'>10 <span className='capitalize'>years of experience</span></li>
                <li className='flex flex-col items-center justify-center'>98%<span className='capitalize'>clients satisfaction</span></li>
                <li className='flex flex-col items-center justify-center'>30+<span className='capitalize'>staffs strength</span></li>
            </ul>
            </div>
        </section>
    )
}

export default Metrics
