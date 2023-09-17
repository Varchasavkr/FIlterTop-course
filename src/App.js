import React, { useEffect } from "react";
import { useState } from "react";
import {apiUrl,filterData} from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";    
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { ToastContainer, toast } from 'react-toastify';
const App = () => {


  const[courses,setCourses] =useState(null);
  const [loading ,setLoading]=useState(true);
  useEffect(() => {
  const fetchdata=async() =>{
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output=await res.json();
      // console.log(data);
      setCourses(output.data);
    }
    catch (error) {
      toast.error("someting went wrong");
    }
    setLoading(false);

  }
  fetchdata();
},[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
       <div className="">
          <Navbar/>
       </div>
       <div className="">
          <Filter filterData={filterData}></Filter>
       </div>
       <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       {
          loading? (<Spinner></Spinner>) :(<Cards courses={courses}></Cards>)
       }
       </div>
    </div>
  );
};

export default App;
