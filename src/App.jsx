import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Sidebar from './component/sidebar/sidebar'


function App() {


  return (
    <>
    <BrowserRouter>
    <Sidebar/>
    </BrowserRouter>
     
    </>
  )
}

export default App;
