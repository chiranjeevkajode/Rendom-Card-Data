import React, {  useState } from 'react'
import Card from "./card"
import Axios from "axios"

function App() {
    const [details , setDetails] = useState ({})

    const featchDetails = async () => {
        const {data} = await Axios.get("https://randomuser.me/api/")
        
        console.log("RESPONSE", data);

        
        const details = data.results[0]
        setDetails(details)
    }


  return (
    <>
    <Card details ={details}/>
    <div 
    style={{display:"flex",justifyContent:"center",bottom:"30px",position:"absolute",left:"50%",transform:"translate(-50%)"}}>
      <button onClick={featchDetails} style={{padding:"7px 10px",borderRadius:"5px", border:"none",fontFamily:"sans-serif",backgroundColor:"#2ce5f2",color:"#4a4a4a",cursor: "pointer"}}
    onMouseEnter={(e) => e.target.style.backgroundColor = "#fff"}
    onMouseLeave={(e) => e.target.style.backgroundColor = "#2ce5f2"}
    >User Data</button>
    </div>
    
    </>
  )
}

export default App