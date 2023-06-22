import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import { Button } from "@mui/material";
import "./upgradePlan.css";
import GoldStar from './Assets/Gold.png';
import Diamaad from './Assets/Diamaad.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const UpgradePlan = ({
  plan: { Details, planType, offer, old_price, price, Plan },
}) => {
  const [seeMore, setSeeMore] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [borderColor, setBprderColor] = useState("");
  return (
    <div
      className="CardContainer"
      style={{
        border: `1px solid ${planType === "Gold" ? "gold" : "blue"}`,
        borderRadius: "20px",
      }}
    >
      <div className="Card__header">
        <div className="Card__header__plan">
          <Radio
            checked={selectedValue === "a"}
            // onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
              <div className="Card__header__plan__info">
                <TextContent text={Plan} size={18} weight={700} color={'black'}/>
                <div style={{display:"flex",gap:"10px" ,alignItems:"center"}}>
                 <TextContent text={price} size={16} weight={400}  color={'blue'}/>
                 <strike style={{color:"gray"}}>  <TextContent text={old_price} size={14} weight={400} color={'gray'}/></strike>
                 <div style={{display:"flex",padding:"5px 8px",borderRadius:"10px",backgroundColor:"blue",color:"#ffff"}}>
                  <TextContent size={12} weight={400} text={offer} color={'#FFFF'}/>
                 </div>
                </div>
              </div>

        </div>
      <img src={planType==="Gold"?GoldStar:Diamaad} alt="stary" height={'47px'} width={'65px'}/>
      </div>
      <div className="card__footer"        >
          {seeMore !== true ? (
            <Button onClick={()=>(setSeeMore(true))} style={{ alignSelf: "center" }}><ExpandMoreIcon/> View More</Button>
          ) : (
            <div style={{borderTop: `1px solid ${planType === "Gold" ? "gold" : "blue"}`, width:"90%"}}
            >
                   <Carousel infiniteLoop={true} autoPlay={true} 
                   showArrows={false}
                   >
      {Details?.map((detail, index) => (
        <div key={index} className="carousel-slide">
          <h2 className="slide-title">{detail.title}</h2>
          <p className="slide-info">{detail.info}</p>
        </div>
      ))}
    </Carousel>
      
              <Button onClick={()=>(setSeeMore(false))} style={{ alignSelf: "center" }}><ExpandLessIcon/> View less</Button>
            </div>
          )}
        </div>
    </div>
  );
};

export default UpgradePlan;
const TextContent = ({ size, weight, text, dark ,color }) => {
  return (
    <div
      style={{
        fontSize: `${size}px`,
        fontFamily: "Lato",
        color: { ...(dark ? "rgba(35,35,35,1)" : "rgba(106, 122, 128, 1)") },
        fontWeight: `${weight}`,
        color :`${color}`
      }}
    >
      {text}
    </div>
  );
};
