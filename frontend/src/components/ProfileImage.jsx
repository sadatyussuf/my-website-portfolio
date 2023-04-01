import React from 'react'
import image from '../assets/profile_pic.jpg'

const ProfileImage = () => {
  return (
    <div className='flex justify-center md:w-1/2'>
        <img src={image} alt="profile pic"  className="rounded-full h-full mid:w-3/5"/>
    </div>
  )
}

export default ProfileImage