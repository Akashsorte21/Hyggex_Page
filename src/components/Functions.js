import React from 'react'
import Bulb from './Assets/Bulb.png'
import Volume from './Assets/Volume.png'
import Left from './Assets/left.png'
import Right from './Assets/right.png'
import Square from './Assets/square.png'
import Reload from './Assets/reload.png'
import Logo2 from './Assets/Frame 41.png'
import Plus from  './Assets/Plus.png'

const Functions = () => {
    return (
        <main>
            <div className='px-20'>
                <h1 className='text-3xl font-bold font-color text-[#06286E] fontMonter
'>Relations and Functions (Mathematics)</h1>
            </div>

            <article>
                <div className='flex justify-center items-center my-10 cursor-pointer font'>
                    <ul className='flex gap-x-10 text-xl'>
                        <li className='underline underline-offset-8 font-bold text-[#06286E]'>Study</li>
                        <li className='font-medium text-[#696671]'>Quest</li>
                        <li className='font-medium text-[#696671]'>Test</li>
                        <li className='font-medium text-[#696671]'>Game</li>
                        <li className='font-medium text-[#696671]'>Others</li>
                    </ul>

                </div>

                <div className='w-[712px] h-[393px] bg-black mx-auto my-10 rounded-[42px] bgColor'>
                    <div className='flex justify-between p-10'>
                        <img src={Bulb} alt="" />
                        <img src={Volume} alt="" />
                    </div>
                    <div className='text-center mt-14 text-4xl text-white font-bold fontLato tracking-wider'>
                        <p>9 + 6 + 7x - 2x - 3 </p>
                    </div>
                </div>

                    <div className='flex justify-evenly w-[612px]  items-center mx-auto'>
                        <img src={Reload} alt="" />
                        <img src={Left} alt="" />
                        <p className='text-2xl text-[#202B37] font-bold font'>01/10</p>
                        <img src={Right} alt="" />
                        <img src={Square} alt="" />
                    </div>

                    <div className='flex justify-between items-center px-20 my-10'>
                        <img src={Logo2} alt="" />
                        <div className='flex items-center gap-x-2'>
                        <img src={Plus} alt="" /> <p className='text-[28px] font-semibold text-[#06286E] font'>Create Flashcard</p>
                        </div>
                    </div>
            </article>
        </main>
    )
}

export default Functions
