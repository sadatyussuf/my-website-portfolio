import React from 'react'
import {pages,socials} from '../helpers/links'

const Navbar = () => {

    return (
    <nav className='relative container mx-auto p-6 h-[10vh]'>
        <div className="flex items-center justify-between ">

            <div className='pt-0'>
                {/* <img src="" alt="" /> */}
                <p>portfolio</p>
            </div>
            <div className="hidden md:flex space-x-6 ">
                {
                    pages.map((page) =>{
                       return ( <a href={page.url} key={page.id} className='relative group capitalize'>
                            <span>{page.name}</span>
                            <span className='absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full'></span>
                        </a>)
                    })
                }
                
            </div>

            <div className='hidden md:flex space-x-3 '>
                {
                    socials.map((social) =>{
                        return (
                            <a href={social.url} key={social.id}> {social.icon} </a>
                        )
                    })
                }
            </div>
        </div>

    </nav>
    )
}

export default Navbar