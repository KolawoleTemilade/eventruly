import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-white flex flex-col items-center justify-center py-16'>
            <div className='py-8 max-w-[734px] w-full text-center'>
                <p className="font-freehand text-foundation  capitalize"> Newsletter</p>
                <p className='font-bold font-garamond text-[46.67px]'>Sign Up for <span className='font-normal italic text-foundation'>Tips, Trends,</span> and Exclusive <span className='font-normal text-foundation italic'>Updates</span></p>
            </div>
            <div className='max-w-[593px] w-full border-2 flex justify-between py-2 px-2 bg-ash rounded-[12px]'>
                <input type='text' placeholder='Enter Email:' className='bg-transparent text-sm ' />
                <button className='bg-yellow font-garamond cursor-pointer hover:bg-foundation hover:border-yellow hover:border-4 hover:rounded-lg hover:text-white capitalize font-normal py-2 px-6  leading-tight rounded-md text-center '>subscribe now</button>
            </div>

        </div>
    )
}

export default Newsletter
