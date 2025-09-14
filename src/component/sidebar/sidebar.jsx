import { Link, NavLink } from "react-router-dom";

function Sidebar() {
   const baseClasses =
   `hover:bg-sky-700   w-[100%]  p-2  rounded-3xl  text-center  duration-200  hover:bg-sky-600`;


   return(
    <>
    <div  className="bg-sky-900 h-[100%]   w-[20%]   flex flex-col   text-xl  text-white  gap-4  p-3  border-2  border-red-100   rounded-3xl ">
         <NavLink  to="/"     className={({ isActive }) =>
          isActive
            ? `${baseClasses} bg-sky-700 text-white  hover:bg-sky-600`
            : `${baseClasses} text-white hover:bg-sky-600  `
        }> Today Task</NavLink>
         <NavLink  to="/calender"   className={({ isActive }) =>
          isActive
            ? `${baseClasses} bg-sky-700 text-white  `
            : `${baseClasses} text-white  `
        }>Calender</NavLink>
    </div>
    </>
   )
}

export default Sidebar;