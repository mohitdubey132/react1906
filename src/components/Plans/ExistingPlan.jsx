import React from 'react';
import Fresher from './Assets/Fresher.png';

const ExistingPlan = ({plan:{Plan,buyingDaate,vaild_till}}) => {
  return (
    <div style={{border:"1px solid rgba(19, 99, 223, 1)",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",borderRadius:"20px"}}>
       <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <TextContent text={Plan} size={18} weight={700} dark={true}/>
        <TextContent text={buyingDaate} size={12} weight={400} />
        <TextContent text={vaild_till} size={12} weight={400}/>
       </div>
       <img src={Fresher} alt='fresher' height={'47px'} width={'65px'}/>
    </div>
  )
}

export default ExistingPlan;
const TextContent = ({ size, weight, text, dark }) => {
  return (
    <div
      style={{
        fontSize: `${size}px`,
        fontFamily: "Lato",
        color: { ...(dark ? "rgba(35,35,35,1)" : "rgba(106, 122, 128, 1)") },
        fontWeight: `${weight}`,
      }}
    >
      {text}
    </div>
  );
};