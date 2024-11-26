import React from 'react'

const Buttoon = ({children} ) => {
  return (
    <div className='bg-yellow cursor-pointer hover:bg-foundation hover:border-yellow hover:border-4 hover:rounded-lg hover:text-white capitalize font-bold py-3 px-4 my-7 leading-tight rounded-md text-center '>
      {children}
    </div>
  )
}

export default Buttoon
