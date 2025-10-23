import man from "../../assets/mansIcon.jpg"

function SearchBar({ Search, setSearch }) {

   return (
      <>
         <div className="w-[100%]   h-[7rem]  md:h-[4rem]  p-4 flex   flex-col  md:flex-row gap-2   ">
            <input type="text"
               placeholder="Search Task"
               className="w-[100%] md:w-[80%] lg:w-[85%]  xl:w-[89%] h-[2rem]   bg-gray-200   p-7 
               rounded-full border-0  shadow-md placeholder-gray-600  focus:outline-none"
               value={Search}
               onChange={(e) => setSearch(e.target.value)}
            />
            <div className=" h-[4rem]  md:w-[20%]  lg:w-[15%]  xl:w-[11%] rounded-xl flex gap-2 shadow-md  md:p-2  p-3   bg-sky-100">
               <div className="flex   flex-col font-bold   ">
                  <span className="text-sky-900">Fatemeh</span>
                  <span className="text-red-800"  >Amiri</span>
               </div>
               <img src={man} alt="" className="w-10  h-10 border rounded-full  border-sky-900" />
            </div>
         </div>



      </>
   )

}

export default SearchBar;