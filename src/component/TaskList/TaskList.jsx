
import { GrEdit } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";


function TaskList({ tasks, setTasks ,  setEditingTask }) {


    console.log("Tasks in TodoList:", tasks);


    const getStatuseBadget = (status) => {
        switch (status) {
            case "High":
                return `bg-red-500 text-red-100`;
            case "Medium":
                return `bg-yellow-500 text-red-50`;
            case "Low":
                return `bg-green-500 text-white`;
            default:
                return `bg-gray-200 text-gray-800`;
        }
    };


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
                            <div className="flex gap-3">
                                <div className="w-[10px]  h-[10px] rounded-xl bg-sky-900 mt-2"></div>
                                <span className="text-right ">{task.title}</span>
                            </div>
                            <div className="flex gap-3">
                                <span className={`${getStatuseBadget(task.status)}  px-2 py-1
                                 font-bold w-[75px]  h-[30px] text-center rounded-full text-sm`}>
                                    {task.status}
                                </span>
                                <GrEdit size={25} className="text-sky-900  mt-1  cursor-pointer" 
                                  onClick={() => setEditingTask(task)}
                                />
                                <TiDelete size={30} className="text-red-900  cursor-pointer"
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