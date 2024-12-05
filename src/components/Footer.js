import React from 'react'
import notocrown from "../assets/images/notocrown.png";
import { facebook, instagram, twitter, call, mail, location } from "../assets/footer-img/Index";
const Footer = () => {
  return (
    <div>
      {/* Footer Container */}
      <div className='flex flex-col items-center justify-center '>
        <div className='bg-foundation flex items-center justify-between max-w-[1200px] w-full px-10 lg:px-20 py-8'>
          {/* Left Section */}

          <section className='flex flex-col gap-6 p-4 max-w-md'>
            <div className="flex items-start space-x-2">
              <img src={notocrown} alt="Logo" className="h-10" />
              <h2 className="font-sans text-[30px] capitalize text-white">eventruly</h2>
            </div>
            <p className='text-white text-sm font-garamond'>
              At Eventruly, we believe every event is a unique story waiting to be told. From weddings and corporate gatherings to intimate celebrations.
            </p>
            <div className='flex gap-4'>
              <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                <img src={facebook} alt="Facebook Icon" className="w-4 h-4" />
              </div>
              <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                <img src={twitter} alt="Twitter Icon" className="w-4 h-4" />
              </div>
              <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                <img src={instagram} alt="Instagram Icon" className="w-4 h-4" />
              </div>
            </div>
          </section>

          {/* Middle Section: Navigation */}
          <section className='capitalize text-white font-garamond'>
            <p className='font-bold flex items-start mb-4 mt-2'>navigations</p>
            <ul className='flex flex-col gap-3 py-5 items-start '>
              <li className="hover:text-gray-300 cursor-pointer">about us</li>
              <li className="hover:text-gray-300 cursor-pointer">events</li>
              <li className="hover:text-gray-300 cursor-pointer">portfolio</li>
            </ul>
          </section>

          {/* Right Section: Contact Info */}
          <section className='font-garamond'>
            <p className='font-bold text-white font-garamond  mb-4 capitalize'>contact us</p>
            <div className='space-y-4'>
              {/* Address Section */}
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                  <img src={location} alt="Location Icon" className='' />
                </div>
                <p className='text-white'>Plot 0021232 Shomolu, Igando.</p>
              </div>
              {/* Call Section */}
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                  <img src={call} alt="Call Icon" className='' />
                </div>
                <p className='text-white'>+234123456789</p>
              </div>
              {/* Mail Section */}
              <div className='flex items-center gap-3 '>
                <div className='w-8 h-8 bg-white rounded-md flex items-center justify-center'>
                  <img src={mail} alt="Mail Icon" className=' ' />
                </div>
                <p className='text-white'>eventruly@mail.com</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Bottom Line */}
        <div className=' max-w-[1200px] w-full text-center flex flex-col items-center justify-center  text-sm text-white py-4 bg-foundation'>
          <div className='w-[1000px] border border-white mb-3'></div>
          <p className='text-center'>  © {new Date().getFullYear()} Eventruly. All Rights Reserved.</p>
        </div>
      </div>
    </div>

  )
}

export default Footer
