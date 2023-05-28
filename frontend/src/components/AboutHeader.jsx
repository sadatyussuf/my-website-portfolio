import React from 'react'

const AboutHeader = ({props}) => {
  console.log(props)
  return (
    <section className='flex flex-col border-2 border-red-500 rounded-md w-full'>
      <p>Date</p>
      <h3>Place Title</h3>
      <p>Place Name</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in ea rerum consequatur placeat harum consectetur ad omnis illum delectus veniam exercitationem est eveniet aperiam, commodi nostrum. Sunt, ab harum.</p>
    </section>
  )
}

export default AboutHeader