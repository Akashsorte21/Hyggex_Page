import React from 'react'
import DownArrow from './Assets/Down_Arrow.png'

const FAQ = () => {
    return (
        <>
            <div className='px-20 my-10'>
                <h1 className='text-5xl font-bold text-[#06286e] mb-10 font'>FAQ</h1>

                <div className='mt-5 font-semibold text-base font'>
                    <div className='w-[848px] h-[58px] border border-[#217EEC] rounded-xl py-4 px-4 mb-5'>
                        <div className='flex justify-between'>
                            <p>Can education flashcards be used for all age groups?</p>
                            <img src={DownArrow} alt="" />
                        </div>
                    </div>

                    <div className='w-[848px] h-[58px] border border-[#217EEC] rounded-xl py-4 px-4 mb-5'>
                        <div className='flex justify-between'>
                            <p>Can education flashcards be used for all age groups?</p>
                            <img src={DownArrow} alt="" />
                        </div>
                    </div>

                    <div className='w-[848px] h-[58px] border border-[#217EEC] rounded-xl py-4 px-4 '>
                        <div className='flex justify-between'>
                            <p>Can education flashcards be used for all age groups?</p>
                            <img src={DownArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default FAQ
