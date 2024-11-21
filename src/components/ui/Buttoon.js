import React from 'react'

const Buttoon = ({children} ) => {
  return (
    <div className='bg-yellow capitalize font-bold py-3 px-4 my-12 leading-tight rounded-md text-center '>
      {children}
    </div>
  )
}

export default Buttoon
