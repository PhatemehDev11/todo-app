
import { TiDelete } from "react-icons/ti";


function TaskList({ tasks , setTasks }) {


    console.log("Tasks in TodoList:", tasks);


    const getStatuseBadget = (status) => {
        switch (status) {
            case "High":
                return `bg-red-300 text-red-900`;
            case "Medium":
                return `bg-yellow-300 text-yellow-900`;
            case "Easy":
                return `bg-green-400 text-white`;
            default:
                return `bg-gray-200 text-gray-800`;
        }
    };

    // const getStatusLabel = (status) => {
    //     switch (status) {
    //         case "not-started": return "Not Started";
    //         case "in-progress": return "In Progress";
    //         case "completed": return "Completed";
    //         default: return "Unknown";
    //     }
    // };


    const deleteTask = (id) => {
        setTasks(del => del.filter(task => task.id !== id));
      };

    return (
        <>
            <div className="w-[100%] mb-3  md:w-3/4 overflow-auto ">
                <div className="w-full bg-red-50 rounded-lg  min-h-[30rem] shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4  text-red-900">Task List</h2>
                    {tasks.map(task => (
                        <div key={task.id} className="flex justify-between items-center mb-2  p-2">
                            <span>{task.title}</span>
                            <div className="flex gap-3">
                                <span className={`${getStatuseBadget(task.status)}  px-2 py-1 rounded-full text-sm`}>
                                    {task.status}
                                </span>
                                <TiDelete size={30} className="text-red-900 mt-[3px]" 
                                 onClick={() => deleteTask(task.id)}
                                />
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default TaskList;