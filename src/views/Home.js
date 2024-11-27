import React from 'react'
import { Hero, Metrics, CraftsMoments, MemoriesCaptured, Testimonials, ContactUs, Newsletter, Footer} from "../components/Index"


const Home = () => {
  return (
    <div className=' mx-20 '>
        <div className=''>
       <Hero/>
       <Metrics/>
       <CraftsMoments/>
       <MemoriesCaptured/>
       <Testimonials/>
       <ContactUs/>
       <Newsletter/>
       <Footer/>
       </div>
    </div>
  )
}

export default Home
