

function HighlightCard({footer,data,title}:{footer:string|number,data:string,title:string}   ) {

return (
    <div className='hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300s flex flex-col justify-between items-center border bg-white rounded-3xl p-1 h-[10rem] w-[15rem]'>
      <div className='font-bold text-lg w-full text-left ml-8 mt-2 text-[#c2c2c2]'>
            {title}
      </div>
      <div className='text-3xl font-semibold'>
        {data}
      </div>
      <div className='text-lg w-full text-left ml-8 mb-2'>
        {footer}
      </div>
    </div>
  )
}

export default HighlightCard
