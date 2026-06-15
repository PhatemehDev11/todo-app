import { NavLink, useNavigate } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { MdLogout } from "react-icons/md";

function Sidebar({ isOpen, isClose }) {
  const navigate = useNavigate();
  const baseClasses = `hover:bg-sky-700 w-[100%] p-2 rounded-3xl text-center duration-200 hover:bg-sky-600`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={isClose}
      ></div>

      <div className={`bg-sky-900 min-h-[100vh] w-[80%] md:w-[20%] flex flex-col text-xl text-white gap-4 p-3 border-2 border-red-100 md:rounded-3xl md:translate-x-0 fixed top-0 left-0 z-50 transform transition-transform duration-300 md:relative ${isOpen ? 'translate-x-0' : '-translate-x-[40rem]'}`}>
        
        <h2 className="text-2xl font-bold mb-4 text-white ml-5 leading-10 h-[1rem] flex">
          <MdMenuOpen size={40} />
          Menu
        </h2>

        <NavLink to="/" className={({ isActive }) =>
          isActive ? `${baseClasses} bg-sky-700 text-white` : `${baseClasses} text-white`
        }>Today Task</NavLink>

        <NavLink to="/calender" className={({ isActive }) =>
          isActive ? `${baseClasses} bg-sky-700 text-white` : `${baseClasses} text-white`
        }>Calender</NavLink>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className={`${baseClasses} text-white flex items-center justify-center gap-2`}>
            <MdLogout size={22} />
            Logout
          </button>
        </div>

      </div>
    </>
  );
}

export default Sidebar;