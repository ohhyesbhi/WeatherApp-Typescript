import Maindata from "../components/Maindata/Maindata"
import Sidebar from "../components/Sidebar/Sidebar"

import NightImage from "../assets/NightImage.jpg"

function Home(){
    return (

        <>
        <div className="h-[100vh] px-8 py-8 " style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${NightImage})`}}>
              <div className="h-[90%]  flex flex-row justify-center items-center">
                 <Sidebar/>
                 <Maindata/>
              </div>
        </div>

        </>
    )
}

export default Home