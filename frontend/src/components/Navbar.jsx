import React from 'react'

const Navbar = () => {

    return (
    <nav className='relative container mx-auto p-6 bg-yellow-400'>
        <div className="flex items-center justify-between">

            <div className='pt-0'>
                {/* <img src="" alt="" /> */}
                <p>portfolio</p>
            </div>
            <div className="hidden md:flex space-x-6 ">
                <a href="#">about</a>
                <a href="#">contact</a>
                <a href="#">menu</a>
                <a href="#">portfolio</a>
            </div>

            <div className='flex'>
                {/* <ul>
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul> */}
            </div>
        </div>

    </nav>
    )
}

export default Navbar