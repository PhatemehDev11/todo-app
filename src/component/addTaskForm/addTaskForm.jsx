
import { useState } from "react";
import BaseButton from "../common/BaseButton";
function AddTaskForm({ tasks, setTasks }) {
    const [title, setTitle] = useState("");
    const [status, setStatuse] = useState("not-started");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
    }

   const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    status,
   }


   

   setTasks([...tasks, newTask]);
    return (
        <>
            <div className="md:w-[25%]  h-[20rem] bg-sky-100 rounded-lg shadow-md ">
                <form
                     onSubmit={handleSubmit}
                    className="flex flex-col gap-3 p-4   "
                >
                    <h2 className="text-xl  font-bold mb-4   text-sky-900">Add Task</h2>
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
                        onChange={(e) => setStatuse(e.target.value)}
                    >
                        <option value="not-started">Not Started</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <BaseButton Text="Add" />
                </form>
            </div>

        </>
    )
}

export default AddTaskForm;