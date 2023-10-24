import Lowerhalf from "./Lowerhalf"
import Upperhalf from "./Upperhalf"

function Sidebar(){
    
    return (
        <>
          <div className="basis-2/12 flex flex-col justify-center items-center text-black rounded-tl-3xl rounded-bl-3xl" style={{background:"rgba(255,255,255,0.65)"}}>
              <Upperhalf />
              <Lowerhalf />
           </div>
        </>
    )
}

export default Sidebar