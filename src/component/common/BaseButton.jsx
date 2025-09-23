  function BaseButton ({Text}){
    return (
        <>
         <button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded ">
          {Text}
        </button>
        </>
    )
  }

  export default BaseButton