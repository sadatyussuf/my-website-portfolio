import React from 'react'
import Welcome from './WelcomeMsg'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row '>
        <Welcome/>
        <div>Picture</div>

    </section>
  )
}

export default Hero