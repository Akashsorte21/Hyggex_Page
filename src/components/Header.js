import React from 'react'
import Logo from './Assets/Logo.png'

const Header = () => {
    return (
        <div>
            <header>
                <nav className='flex justify-between items-center px-20 my-5 font'>
                    <img src={Logo} alt="" />
                    <ul className='flex gap-x-10 items-center text-lg cursor-pointer'>
                        <li>Home</li>
                        <li>Flashcard</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <button className='py-[13px] px-[40px] text-white text-bg rounded-[32px]'>Login</button>
                      
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
