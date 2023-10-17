

function TopRow() {
  return (
    <div className="flex justify-between items-center w-full px-8 mt-2">
      <div className="flex items-center justify-center font-semibold text-xl">
        {/* today or week */}
         <div className="mr-4 hover:text-[#0284c7] cursor-pointer">
          Today   
         </div>
         <div className="ml-4 hover:text-[#0284c7] cursor-pointer">
          Week
         </div>   
      </div>

      <div className="flex items-center justify-center">
          {/* C or F */}
          <div className="mr-8 border rounded-[100%] bg-black text-white px-3 py-2 hover: cursor-pointer  ">
           °C
          </div>
          <div  className="mr-8 border rounded-[100%] bg-black text-white px-[12.75px] py-[8.5px] hover: cursor-pointer ">
            °F
          </div>
        
      </div>
    </div>
  )
}

export default TopRow
