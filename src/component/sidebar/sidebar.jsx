import { Link, NavLink } from "react-router-dom";
import React from "react";
function Sidebar({isOpen}) {
  const baseClasses =
    `hover:bg-sky-700   w-[100%]  p-2  rounded-3xl  text-center  duration-200  hover:bg-sky-600`;


  return (
    <>
      <div className={`bg-sky-900 h-[100%]   w-[20%]   flex flex-col   text-xl  
        text-white gap-4  p-3  border-2  border-red-100   rounded-3xl md:translate-x-0
        fixed  top-0 left-0 z-50  transform transition-transform  duration-300 md:relative 
        ${isOpen? 'translate-x-0':
          '-translate-x-[10rem]'
        } `}>

        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? `${baseClasses} bg-sky-700 text-white  hover:bg-sky-600`
            : `${baseClasses} text-white hover:bg-sky-600  `
        }> Today Task</NavLink>
        <NavLink to="/calender" className={({ isActive }) =>
          isActive
            ? `${baseClasses} bg-sky-700 text-white  `
            : `${baseClasses} text-white  `
        }>Calender</NavLink>
      </div>
    </>
  )
}

export default Sidebar;