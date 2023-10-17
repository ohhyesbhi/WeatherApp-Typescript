import React from 'react'

function TempCard({temperature , image , title} : {temperature:string , image:string, title:string }) {
  return (
    <div className='flex flex-col justify-between items-center border bg-white rounded-lg p-2 h-[8rem] w-[5.5rem]'>
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
