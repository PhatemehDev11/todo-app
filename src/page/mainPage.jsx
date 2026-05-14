import AddTaskForm from "../component/addTaskForm/addTaskForm";
import SearchBar from "../component/searchBar/searchBar";
import TaskList from "../component/TaskList/TaskList";
import { useState, useEffect } from "react";
import EditModal from "../component/updateTaskForm/UpdateTask";
import DeleteModal from "../component/Delete modal/deleteModal";
import { todoService } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function MainPage() {
  const [tasks, setTasks] = useState([]);
  const [Search, setSearch] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }
    todoService.getAll().then(data => {
      if (data.message === "Unauthorized") { navigate("/login"); return; }
      setTasks(data);
    });
  }, []);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(Search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await todoService.delete(id);
      setTasks(prev => prev.filter(t => t._id !== id));
      toast.success("تسک با موفقیت حذف شد");
      setDeletingTask(null);
    } catch (error) {
      toast.error("خطا در حذف تسک");
    }
  };

  return (
    <>
      <div className="w-full">
        <SearchBar Search={Search} setSearch={setSearch} />
        <div className="w-full h-auto flex gap-5 flex p-7 mt-10 md:mt-2 md:flex-row flex-col-reverse">
          <TaskList tasks={filteredTasks} setTasks={setTasks} setEditingTask={setEditingTask} setDeletingTask={setDeletingTask} />
          <AddTaskForm tasks={tasks} setTasks={setTasks} />
          {editingTask && (
            <EditModal task={editingTask} setTasks={setTasks} onClose={() => setEditingTask(null)} />
          )}
          {deletingTask && (
            <DeleteModal
              task={deletingTask}
              onConfirm={handleDelete}
              onClose={() => setDeletingTask(null)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
