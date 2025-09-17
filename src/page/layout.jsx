import { Outlet } from 'react-router-dom';
import Sidebar from '../component/sidebar/sidebar'

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';




function Layout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='w-[100%]  min-h-[100vh]  max-h-auto  bg-sky-900 h-[100%]  flex p-[1rem] m-0  gap-2'>

        <Sidebar isOpen={sidebarOpen} 
        isClose={() => setSidebarOpen(false)} />
        <div className='w-[100%]  md:w-[80%] h-[auto] rounded-3xl  bg-red-100   block'>
          <div className='w-full flex h-10  md:hidden'>
            <GiHamburgerMenu size={30}
             className='  text-sky-900 mt-2  ml-7 ' 
            onClick={() => setSidebarOpen(!sidebarOpen)}/>
            <h2 class="text-xl  font-bold mb-4   text-sky-900  ml-5  leading-10 ">Today Task</h2>
          </div>
          <Outlet/>
        </div>
      </div>
    </>
  )
}


export default Layout;