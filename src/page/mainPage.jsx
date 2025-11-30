import AddTaskForm from "../component/addTaskForm/addTaskForm";
import SearchBar from "../component/searchBar/searchBar";
import TaskList from "../component/TaskList/TaskList";
import { useState, useEffect } from "react";
import TaskData from "../data/Tasks.json"
import EditModal from "../component/updateTaskForm/UpdateTask";
import DeleteModal from "../component/Delete modal/deleteModal";

function MainPage() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : TaskData;
  });

  const [Search, setSearch] = useState("");


  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(Search.toLowerCase())
  );

  const [editingTask, setEditingTask] = useState(null);



  console.log("Filtered tasks:", filteredTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  const [deletingTask, setDeletingTask] = useState(null)
  return (
    <>
      <div className="w-full">
        <SearchBar Search={Search} setSearch={setSearch} />
        <div className="w-full  h-auto flex gap-5 flex  p-7 mt-10  md:mt-2 md:flex-row  flex-col-reverse  ">
          <TaskList tasks={filteredTasks} setTasks={setTasks} setEditingTask={setEditingTask} setDeletingTask={setDeletingTask} />
          <AddTaskForm tasks={tasks} setTasks={setTasks} />
          {editingTask && (
            <EditModal task={editingTask}
              setTasks={setTasks}
              onClose={() => setEditingTask(null)} />
          )}
          {deletingTask && (
            <DeleteModal
              task={deletingTask}
              onConfirm={(id) => setTasks(prev => prev.filter(t => t.id !== id))}
              onClose={() => setDeletingTask(null)}
            />
          )}


        </div>
      </div>
    </>
  )
}

export default MainPage;