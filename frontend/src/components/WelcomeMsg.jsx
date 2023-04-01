import React from 'react'

const Welcome = () => {
  return (
    // mb-32
    <div className='flex flex-col  space-y-12 md:w-1/2'> 
        <span className='max-w-md font-Rampart text-4xl font-bold tracking-wider text-lightBlue text-center md:text-6xl md:text-left'>Hi,👋</span>

        <span className=' max-w-lg font-Rampart text-4xl md:text-6xl text-lightBlue text-center md:text-left'>Welcome To My Personal Portfolio!</span>

        <span className='max-w-lg text-center text-greyishBlue md:text-left md:text-2xl'>My Name is <span className='capitalize text-lg text-lightBlue md:text-3xl'>anwur sadat yussuf issah</span> ,I am a software developer and geospatial analyst, and I am passionate about using technology to solve real-world problems.</span>

    </div>
  )
}

export default Welcome