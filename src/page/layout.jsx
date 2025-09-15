import { BrowserRouter, Outlet } from 'react-router-dom';
import Sidebar from '../component/sidebar/sidebar'
import MainPage from '../page/mainPage';

function Layout() {


  return (
    <>
      <div className='w-[100%]  h-[50rem] bg-sky-900 h-[100%]  flex p-[1rem] m-0  gap-2'>
          <Sidebar />
          <div  className='w-[100%]  md:w-[80%] h-[100%] rounded-3xl  bg-red-100   flex'>
            <Outlet/>
          </div>
      </div>
    </>
  )
}


export default Layout;