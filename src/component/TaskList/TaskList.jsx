import { GrEdit } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";
import { todoService } from "../../services/api";
import toast from "react-hot-toast";

function TaskList({ tasks, setTasks, setEditingTask, setDeletingTask }) {
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

    const handleToggleComplete = async (task) => {
        try {
            const updated = await todoService.update(task._id, {
                completed: !task.completed
            });
            setTasks(prev => prev.map(t => t._id === task._id ? updated : t));
            toast.success(updated.completed ? "Task completed!" : "Task reopened!");
        } catch (error) {
            toast.error("Failed to update task");
        }
    };

    return (
        <>
            <div className="w-[100%] mb-3 md:w-3/4 overflow-auto">
                <div className="w-full bg-red-50 rounded-lg min-h-[30rem] shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4 text-red-900">Task List</h2>
                    {tasks.map(task => (
                        <div key={task._id} className="flex justify-between items-center mb-2 p-2">
                            <div className="flex gap-3 items-center">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleComplete(task)}
                                    className="w-4 h-4 cursor-pointer"
                                />
                                <span className={`text-right ${task.completed ? 'line-through text-gray-400' : ''}`}>
                                    {task.title}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <span className={`${getStatuseBadget(task.status)} px-2 py-1 font-bold w-[75px] h-[30px] text-center rounded-full text-sm`}>
                                    {task.status}
                                </span>
                                <GrEdit 
                                    size={25} 
                                    className="text-sky-900 mt-1 cursor-pointer" 
                                    onClick={() => setEditingTask(task)}
                                />
                                <TiDelete 
                                    size={30} 
                                    className="text-red-900 cursor-pointer"
                                    onClick={() => setDeletingTask(task)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TaskList;
