import man from "../../assets/mansIcon.jpg"

function SearchBar({ Search, setSearch }) {

      const username = localStorage.getItem("username") || "user";
      

   return (
      <>
         <div className="w-[100%]   h-[7rem]  md:h-[4rem]  p-4 flex   flex-col  md:flex-row gap-2   ">
           
            <div className=" h-[4rem]  md:w-[20%]   rounded-xl flex gap-2 shadow-md  md:p-2  p-3  flex justify-between bg-sky-100">
               <div className="flex   flex-col font-bold   ">
                  <span className="text-sky-900">Hello,</span>
                  <span className="text-red-800"  >{username}</span>
               </div>
               <img src={man} alt="" className="w-10  h-10 border rounded-full  border-sky-900" />
            </div>
            <input type="text"
               placeholder="Search Task"
               className="w-[100%] md:w-[80%]   h-[2rem]   bg-gray-200   p-7 
               rounded-full border-0  shadow-md placeholder-gray-600  focus:outline-none"
               value={Search}
               onChange={(e) => setSearch(e.target.value)}
            />
         </div>



      </>
   )

}

export default SearchBar;

