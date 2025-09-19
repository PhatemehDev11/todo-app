import AddTaskForm from "../component/addTaskForm/addTaskForm";
import SearchBar from "../component/searchBar/searchBar";
import TaskList from "../component/TaskList/TaskList";
import {  useState } from "react";
import TaskData from "../data/Tasks.json"

function  MainPage() {
const [tasks , setTasks] = useState(TaskData);
const [Search, setSearch] = useState("");

const filteredTasks = tasks.filter(task =>
  task.title.toLowerCase().includes(Search.toLowerCase())
);
console.log("Filtered tasks:", filteredTasks);
return(
    <>
    <div  className="w-full">
    <SearchBar  Search={Search}  setSearch={setSearch}/>
    <div  className="w-full  h-auto md:flex  md:gap-5  p-7 mt-10  md:mt-2 ">
    <TaskList  tasks={filteredTasks}/>
    <AddTaskForm    tasks={tasks} setTasks={setTasks} />
    </div>
    
    </div>
     </>
)
}

export default MainPage;