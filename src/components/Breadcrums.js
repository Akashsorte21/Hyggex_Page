import React from 'react'
import arrow_icon from './Assets/breadcrum_arrow.png'
import Vector from './Assets/Vector.png'

const Breadcrums = () => {
    return (
        <div className="flex px-20 text-lg my-12 font">
        <img src={Vector} alt="" /> <img src={arrow_icon} alt="" /> Flashcard <img src={arrow_icon} alt="" /> Mathematics
        <img src={arrow_icon} alt="" /><span className='text-[#06286E] font-semibold'>Relation and Function</span>
    </div>
    )
}

export default Breadcrums
