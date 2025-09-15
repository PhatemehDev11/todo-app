
import BaseButton from "../common/BaseButton";
function AddTaskForm() {
  return(
    <>
     <form
        className="flex flex-col gap-3  bg-sky-100 rounded-lg shadow-md p-4  mt-6  w-[23%]"
      >
        <input
          type="text"
          placeholder="Task Name"
     
          
          className="p-2 rounded border border-gray-300"
        />
        <select
          className="p-2 rounded border border-gray-300"
        >
          <option value="not-started">Not Started</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
       <BaseButton   Text="Add"  />
      </form>
    </>
  )
}

export default AddTaskForm;