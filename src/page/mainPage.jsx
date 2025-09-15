import AddTaskForm from "../component/addTaskForm/addTaskForm";
import SearchBar from "../component/searchBar/searchBar";
import TaskList from "../component/TaskList/TaskList";


function  MainPage() {
return(
    <>
    <div  className="w-full">
    <SearchBar/>
    <div  className="w-full  h-auto flex  border">
    <TaskList/>
    <AddTaskForm/>
    </div>
    
    </div>
     </>
)
}

export default MainPage;