
import { useState } from "react";
import BaseButton from "../common/BaseButton";
function AddTaskForm({ tasks, setTasks }) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Easy");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            status,
        };

        setTasks([...tasks, newTask]);
        setTitle("");
        setStatus("Easy");
    };




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
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <BaseButton Text="Add" />
                </form>
            </div>

        </>
    )
}

export default AddTaskForm;