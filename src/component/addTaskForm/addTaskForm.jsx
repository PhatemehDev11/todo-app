
import BaseButton from "../common/BaseButton";
function AddTaskForm() {
    return (
        <>
        <div  className="md:w-[25%]  h-[20rem] bg-sky-100 rounded-lg shadow-md ">
        <form
                className="flex flex-col gap-3 p-4   "
            >
                   <h2 class="text-xl  font-bold mb-4   text-sky-900">Add Task</h2>
                <input
                    type="text"
                    placeholder="Task Name"
                    className="p-2 rounded border border-gray-300  "
                />
                <select
                    className="p-2 rounded border border-gray-300"
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