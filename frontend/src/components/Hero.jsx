import React from 'react'
import Welcome from './WelcomeMsg'
import ProfileImage from './ProfileImage'

const Hero = () => {
  return (
      <section className='flex flex-col md:flex-row items-center mx-auto px-6 h-[90vh]' >
        <Welcome/>
        <ProfileImage/>

    </section>
  )
}

export default Hero