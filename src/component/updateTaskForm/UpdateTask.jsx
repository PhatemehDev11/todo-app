import { useState } from "react";
import BaseButton from "../common/BaseButton";

function EditModal({ task, setTasks , onClose }) {

    const [title, setTitle] = useState(task.title || "");
    const [status, setStatus] = useState(task.status || "Low")


    const handleSubmite = (e) => {
        e.preventDefault();
        setTasks(prev => prev.map(t =>
            t.id === task.id ? { ...t, title, status } : t
        ));
          onClose();
    }
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70  transition-opacity
           duration-300  flex items-center justify-center  ">
                <div className="w-[20rem]  h-[18rem]  bg-sky-200  rounded-2xl p-3">
                    <h2 className="text-xl font-bold text-sky-900 mb-4">Edit Task</h2>
                    <form
                         onSubmit={handleSubmite}
                        className="flex flex-col gap-3 p-4   "
                    >

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
                            onChange={(e)=> setStatus(e.target.value)}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <button  className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded "
                        type="submit"
                        >
                            Update
                        </button>
                        <BaseButton Text="cancle" 
                        onClick={onClose}
                        />
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditModal;