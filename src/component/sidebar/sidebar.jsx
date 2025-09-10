import { Link } from "react-router-dom";

function Sidebar() {
   return(
    <>
    <div  className="bg-sky-900 h-[100%]   w-[20%]">
         <Link  to="/"> <button>Today Task</button></Link>
         <Link  to="/calender"><button>Calender</button></Link>
    </div>
    </>
   )
}

export default Sidebar;