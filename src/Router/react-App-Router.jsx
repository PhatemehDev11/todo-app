import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import mainPage from "../page/mainPage";
import Calender from "../page/calenderPage";

function AppRouter() {
    return(
        <Router>
          <Routes>
            <Route  path="/" element={<mainPage/>} ></Route>
            <Route   path="/calender"  element={<Calender/>}></Route>
          </Routes>
        </Router>
    )
}

export default AppRouter;

