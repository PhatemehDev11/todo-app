
import TasksData from "../../data/Tasks.json"

function TaskList() {
    return (
        <>
            <div class="w-[100%] mb-3   md:w-3/4 overflow-auto ">
                <div class="w-full bg-red-50 rounded-lg shadow-md p-4">
                    <h2 class="text-xl font-bold mb-4  text-red-900">Task List</h2>
                    {TasksData.map(task=>(
                        <div class="flex justify-between items-center mb-2  p-2">
                            <span>{task.title}</span>
                            <span class="bg-red-300 text-red-900 px-2 py-1 rounded-full text-sm ">{task.status}</span>
                        </div>

                        ))}
                   
                    <div class="flex justify-between items-center mb-2  p-2">
                        <span>Task 4</span>
                        <span class="bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-sm">In Progress</span>
                    </div>
                    <div class="flex justify-between items-center mb-2  p-2">
                        <span>Task 6</span>
                        <span class="bg-green-400 text-white px-2 py-1 rounded-full text-sm">Completed</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskList;