import man from "../../assets/mansIcon.jpg"

function SearchBar() {

   return (
      <>
         <div  className="w-[100%]   h-[5rem]  p-4  flex gap-3">
            <input type="text"  placeholder="input Task Title" className="w-[90%]   h-[2rem]   bg-gray-200   p-7  rounded-full border-0  shadow-md " />
            <div  className="h-[4rem] rounded-xl flex gap-3 shadow-md  p-2  bg-sky-100">
               <div  className="flex   flex-col font-bold   ">
                       <span  className="text-sky-900">Fatemeh</span>
                       <span  className="text-red-800"  >Amiri</span>
               </div>
               <img src={man} alt=""  className="w-10  h-10 border rounded-full  border-sky-900 " />
            </div>
         </div>



      </>
   )

}

export default SearchBar;