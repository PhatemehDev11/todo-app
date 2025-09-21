import { CgClose } from "react-icons/cg";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { TiDelete } from "react-icons/ti";


function TaskList({ tasks }) {


    console.log("Tasks in TodoList:", tasks);


    const getStatuseBadget = (status) => {
        switch (status) {
            case "not-started":
                return `bg-red-300 text-red-900`;
            case "in-progress":
                return `bg-yellow-300 text-yellow-900`;
            case "completed":
                return `bg-green-400 text-white`;
            default:
                return `bg-gray-200 text-gray-800`;
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
          case "not-started": return "Not Started";
          case "in-progress": return "In Progress";
          case "completed": return "Completed";
          default: return "Unknown";
        }
      };

    return (
        <>
            <div className="w-[100%] mb-3   md:w-3/4 overflow-auto ">
                <div className="w-full bg-red-50 rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4  text-red-900">Task List</h2>
                    {tasks.map(task => (
                        <div key={task.id} className="flex justify-between items-center mb-2  p-2">
                            <span>{task.title}</span>
                            <div className="flex gap-3">
                            <span className={`${getStatuseBadget(task.status)}  px-2 py-1 rounded-full text-sm`}>
                                {getStatusLabel(task.status)}
                            </span>
                            <TiDelete   size={30}  className="text-red-900 mt-[3px]"/>
                            </div>
                           
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default TaskList;