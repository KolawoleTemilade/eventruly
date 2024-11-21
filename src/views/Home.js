import React from 'react'
import { Hero, Metrics, CraftsMoments} from "../components/Index"


const Home = () => {
  return (
    <div className=' mx-20 '>
        <div className=''>
       <Hero/>
       <Metrics/>
       <CraftsMoments/>
       {/* <OurServices/> */}
       </div>
    </div>
  )
}

export default Home
