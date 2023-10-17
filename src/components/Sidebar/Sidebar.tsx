import Lowerhalf from "./Lowerhalf"
import Upperhalf from "./Upperhalf"

function Sidebar(){
    return (
        <>
          <div className="basis-3/12 h-full flex flex-col justify-center items-center text-black rounded-tl-3xl rounded-bl-3xl" style={{background:"rgba(255,255,255,0.55)"}}>
              <Upperhalf/>
              <div className="h-[2px] w-[87%] bg-[#cbd5e1]"></div>
              <Lowerhalf/>
           </div>
        </>
    )
}

export default Sidebar