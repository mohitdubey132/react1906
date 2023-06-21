import React from 'react'

const Footers = () => {
  return (
    <div style={{position:"absolute",
    borderTop:"1px solid #6A7A80",top:"675px",width:"1318px",fontFamily:"Lato",fontSize:"14px",fontWeight:"400",display:"flex",justifyContent:"space-between",padding:"20px 50px 14px 70px",right:"-38px"}}>
        <div>© 2023 Recruitr</div>
        <div style={{display:"flex",gap:"20px"}}>
            <div>Customer Support</div>
            <div>Privacy Policy</div>
        </div>
        </div>
  )
}

export default Footers