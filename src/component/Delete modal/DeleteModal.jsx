import BaseButton from "../common/BaseButton";
import toast from "react-hot-toast";


function DeleteModal({task , onConfirm, onClose}) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70  transition-opacity
           duration-300  flex items-center justify-center  ">
                <div className="w-[20rem]  h-[10rem]  bg-sky-200  rounded-2xl p-3">
                    <h2 className="text-xl font-bold text-sky-900 mb-4">Are you sure you want to delete"{task.title}"?</h2>
                    <div  className="w-[100%] flex items-center  justify-between ">
                        <button 
                            className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded w-[9rem]"
                            type="submit"
                            onClick={() => {
                                onConfirm(task.id);
                                toast.error("Task deleted!");
                                onClose;
                            }}
                        >
                            Delete
                        </button  >
                        <button 
                         className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded w-[9rem] "
                         onClick={onClose}
                        >
                           cancle
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal;