import BaseButton from "../common/BaseButton";

 function EditModal() {
return(
    <>
    <div className="fixed inset-0 bg-black bg-opacity-70  transition-opacity
           duration-300  flex items-center justify-center  ">
        <div  className="w-[20rem]  h-[18rem]  bg-sky-200  rounded-2xl p-3">
        <h2 className="text-xl font-bold text-sky-900 mb-4">Edit Task</h2>
                  <form
                
                    className="flex flex-col gap-3 p-4   "
                >
                   
                    <input
                        type="text"
                        placeholder="Task Name"
                        className="p-2 rounded border border-gray-300"
                       
                    />
                    <select
                        className="p-2 rounded border border-gray-300"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
            
                    <BaseButton Text="Update"      />
                    <BaseButton Text="cancle"      />
                
                  
                 
                </form>
        </div>
    </div>
    </>
)
}

export default EditModal;