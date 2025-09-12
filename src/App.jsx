import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Sidebar from './component/sidebar/sidebar'


function App() {


  return (
    <>

      <div className='w-[100%]  h-[50rem] bg-sky-900 h-[100%]  flex p-[1rem] m-0'>
        <BrowserRouter>
          <Sidebar />
          <div  className='w-[85%]  h-[100%] rounded-3xl  bg-red-100'>
            <Outlet/>
          </div>
        </BrowserRouter>
      </div>


    </>
  )
}

export default App;
