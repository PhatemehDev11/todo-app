import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Sidebar from './component/sidebar/sidebar'
import MainPage from './page/mainPage';
import AppRouter from './Router/react-App-Router';

function App() {


  return (
    <>
     <AppRouter/>
    </>
  )
}

export default App;
