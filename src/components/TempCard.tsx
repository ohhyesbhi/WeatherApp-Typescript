import React from 'react'

function TempCard({temperature , image , title} : {temperature:string|number , image:string, title:string }) {
  return (
    <div className='hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300  flex flex-col justify-between items-center border bg-white rounded-lg p-2 h-[8rem] w-[5.5rem]'>
    <div className=' font-semibold'>
      {title}
    </div>
    <div className='h-[45%] '>      
       <img
        className='h-full'
        src={image}
       />        
    </div>
    
    <div>
        {temperature}
    </div>
    </div>

  )
}

export default TempCard
