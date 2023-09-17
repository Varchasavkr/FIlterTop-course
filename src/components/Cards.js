import React from 'react'
import Card from './Card';
import { useState } from 'react';




export default function Cards({courses}) {
    const [likedCourses,setLikedCourses]=useState([])
    let allCourses =[];
    const getCourses=()=>{
        Object.values(courses).forEach((coursesCategory)=>{
             coursesCategory.forEach((course)=>{
                allCourses.push(course);
             })
        })
        return allCourses;
    }



  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
        getCourses().map((courses)=>{
            return(
            <Card courses={courses} key={courses.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
            );
        })

    }
    </div>
  )
}
