import React from 'react'
import {FcLike} from "react-icons/fc"

export default function Card({courses}) {

    
    function clickHandler(){

    }
    
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className="relative">
            <img src={courses.image.url} alt="" />
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center">
                <button onClick={clickHandler}><FcLike fontSize="1.75rem"/></button>
            </div>
        </div>
        <div className="p-4">
            <p className='text-white font-semibold text-lg leading-6'>
                {courses.title}
                {courses.description}
            </p>
        </div>
    </div>
  )
}
