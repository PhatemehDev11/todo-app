import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function EditModal({ task, setTasks, onClose }) {
  
  const [title, setTitle] = useState(task ? task.title : "");
  const [status, setStatus] = useState(task ? task.status : "Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks(prev =>
      prev.map(t => 
        t.id === task.id ? { ...t, title, status } : t
      )
    );

    toast.success("Task updated!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center  animate-fadeIn">
      <div className="bg-sky-200 p-4 rounded-xl w-[20rem]  animate-scaleIn">
        <h2 className="text-xl font-bold mb-4 text-sky-900">Edit Task</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            className="border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>



          <div className="flex justify-between mt-4  gap-3">

          <button type="submit"
              className="bg-sky-700 hover:bg-sky-600 text-white p-2 rounded w-[9rem]">
              Save
            </button>
            <button type="button" onClick={onClose}
              className="bg-red-700  hover:bg-red-600  text-white px-3 py-1 w-[9rem] rounded">
              Cancel
            </button>

           
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditModal;
