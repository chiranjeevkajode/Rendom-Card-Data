import React from 'react'


function card({details}) {

  if(!details || Object.keys(details).length === 0){
    return <div></div>
  }
  const fullName = details && details.name ? `${details.name.first} ${details.name.last}` : '';
  
  return (
      <div style={{justifyContent:"center",alignItems:"center",position:"absolute",left:"50%",transform:"translateX(-50%)",
      padding:"30px",paddingBottom:"10px",fontFamily:"sans-serif",border: "1px solid #d1d1cf",
      backgroundColor: "#5d6161",borderRadius:"5px",maxWidth:"90vw",marginTop:"20px"}}>
        <img src={details.picture?.large} alt="User" style={{ width: "200px", height: "200px", justifyItems:"center",margin:"auto",display:"block"}} />
        
        <h1 style={{color:"#fff",fontSize:"15px"}}>Name : {fullName}</h1>
        <div style={{fontSize:"10px",display:"flex",color : "#fff", gap:"5px",marginTop:"-15px"}}>
          <h2 >Gender : {details.gender}</h2>
          <h2 >Age : {details.dob?.age}</h2>

        </div>
        <div style={{marginTop:"-18px",color : "#fff", justifyContent:"center", alignItems:"center", fontSize:"10px"}}>
          <h2>Contry : {details.location?.country}</h2>
        <h2>City : {details.location?.city}</h2>
        <p style={{fontSize:"15px"}}>Email : {details.email}</p>
        </div>
        

      </div>
    
  )
}

export default card