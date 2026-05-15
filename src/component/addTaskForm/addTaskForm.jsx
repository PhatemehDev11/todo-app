import { useState } from "react";
import BaseButton from "../common/BaseButton";
import toast from "react-hot-toast";
import { todoService } from "../../services/api";

function AddTaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Low");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newTask = await todoService.create({ title, status });
      setTasks(prev => [...prev, newTask]);
      toast.success("Task added successfully!");
      setTitle("");
      setStatus("Low");
    } catch (error) {
      toast.error("Failed to add task");
    }
  };

  return (
    <div className="md:w-[25%] h-[20rem] bg-sky-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">
        <h2 className="text-xl font-bold mb-4 text-sky-900">Add Task</h2>
        <input
          type="text"
          placeholder="Task Name"
          className="p-2 rounded border border-gray-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="p-2 rounded border border-gray-300"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <BaseButton Text="Add" />
      </form>
    </div>
  );
}

export default AddTaskForm;
