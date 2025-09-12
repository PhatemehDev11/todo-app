import { Link } from "react-router-dom";

function Sidebar() {
   return(
    <>
    <div  className="bg-sky-900 h-[100%]   w-[20%]   flex flex-col   text-xl  text-white  gap-4  p-3 ">
         <Link  to="/"> <button   className="hover:bg-sky-700   w-[100%]  p-2  rounded-3xl">Today Task</button></Link>
         <Link  to="/calender"><button    className="hover:bg-sky-700   w-[100%]  p-2  rounded-3xl">Calender</button></Link>
    </div>
    </>
   )
}

export default Sidebar;