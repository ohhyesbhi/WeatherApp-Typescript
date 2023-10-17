import Maindata from "../components/Maindata/Maindata"
import Sidebar from "../components/Sidebar/Sidebar"

import NightImage from "../assets/NightImage.jpg"

function Home(){
    return (

        <>
        <div className="min-h-[100vh] flex flex-row justify-center items-stretch px-8 py-8 " style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${NightImage})`}}>
                 <Sidebar/>
                 <Maindata/>
        </div>

        </>
    )
}

export default Home