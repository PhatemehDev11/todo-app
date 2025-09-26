import AddTaskForm from "../component/addTaskForm/addTaskForm";
import SearchBar from "../component/searchBar/searchBar";
import TaskList from "../component/TaskList/TaskList";
import {  useState, useEffect } from "react";
import TaskData from "../data/Tasks.json"
import EditModal from "../component/updateTaskForm/UpdateTask";

function  MainPage() {

const [tasks , setTasks] = useState(()=>{
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : TaskData;
});

const [Search, setSearch] = useState("");


const filteredTasks = tasks.filter(task =>
  task.title.toLowerCase().includes(Search.toLowerCase())
);

const [edititingTask, setEditingTask] = useState(null);



console.log("Filtered tasks:", filteredTasks);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
return(
    <>
    <div  className="w-full">
    <SearchBar  Search={Search}  setSearch={setSearch}/>
    <div  className="w-full  h-auto md:flex  md:gap-5  p-7 mt-10  md:mt-2 ">
    <TaskList  tasks={filteredTasks}  setTasks={setTasks}/>
    <AddTaskForm    tasks={tasks} setTasks={setTasks} />
    {/* <EditModal/> */}
    </div>
    </div>
    </>
)
}

export default MainPage;