import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Sidebar from './component/sidebar/sidebar'
import MainPage from './page/mainPage';
import AppRouter from './Router/react-App-Router';
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>
     <Toaster position="top-center" />
     <AppRouter/>
    </>
  )
}

export default App;
