import React from 'react'
import notocrown from "../assets/images/notocrown.jpg"

const Header = () => {
  return (
    <div className='w-full px-20' >
        <div className='flex justify-between '>
        <div className='logo flex '>
          <img src={notocrown}/>
            <h2 className='font-sans text-[30px] capitalize  '>eventruly</h2>
        </div>
        <nav className=' w-[458px]'>
            <ul className='flex font-garamond capitalize space-x-10 px-9 py-2 bg-white border rounded-full '>
                <li>about us</li>
                <li>events</li>
                <li>portfolio</li>
                <li>contact us</li>
            </ul>
        </nav>
        <div className='border rounded-md'>
           <p className='capitalize bg-white'>nigeria</p>
        </div>

        </div>
      
    </div>
  )
}

export default Header
