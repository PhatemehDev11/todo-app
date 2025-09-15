import { Outlet } from 'react-router-dom';
import Sidebar from '../component/sidebar/sidebar'

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';




function Layout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='w-[100%]  h-[50rem] bg-sky-900 h-[100%]  flex p-[1rem] m-0  gap-2'>

        <Sidebar isOpen={sidebarOpen} 
        isClose={() => setSidebarOpen(false)} />
        <div className='w-[100%]  md:w-[80%] h-[100%] rounded-3xl  bg-red-100   block'>
          <div className='w-full flex h-10'>
            <GiHamburgerMenu size={30}
             className=' md:hidden text-sky-900 mt-2  ml-7 ' 
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