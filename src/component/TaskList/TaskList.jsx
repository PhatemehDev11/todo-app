

function TaskList({tasks}) {


    console.log("Tasks in TodoList:", tasks);

  
    return (
        <>
            <div className="w-[100%] mb-3   md:w-3/4 overflow-auto ">
                <div className="w-full bg-red-50 rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4  text-red-900">Task List</h2>
                    {tasks.map(task=>(
                        <div  key={task.id} className="flex justify-between items-center mb-2  p-2">
                            <span>{task.title}</span>
                            <span className="bg-red-300 text-red-900 px-2 py-1 rounded-full text-sm ">{task.status}</span>
                        </div>

                        ))}
                   
                    <div className="flex justify-between items-center mb-2  p-2">
                        <span>Task 4</span>
                        <span className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-sm">In Progress</span>
                    </div>
                    <div className="flex justify-between items-center mb-2  p-2">
                        <span>Task 6</span>
                        <span className="bg-green-400 text-white px-2 py-1 rounded-full text-sm">Completed</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskList;