import BaseButton from "../common/BaseButton";



function DeleteModal(){
    return(
        <>
         <div className="fixed inset-0 bg-black bg-opacity-70  transition-opacity
           duration-300  flex items-center justify-center  ">
                <div className="w-[20rem]  h-[18rem]  bg-sky-200  rounded-2xl p-3">
                    <h2 className="text-xl font-bold text-sky-900 mb-4">Are you sure you want to delete?</h2>
                        <button  className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded "
                        type="submit"
                        >
                            Delete
                        </button>
                        <BaseButton Text="cancle" 
                       
                        />
        
                </div>
            </div>
        </>
    )
}

export default DeleteModal;