import React,{useState} from "react";
import { SearchRounded } from "@mui/icons-material";
import { Button, Box, Input, Grid } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import image1 from './Vector.png';
import profile from '../../Asset/profilepic.png';
import MainDialog from "./MainDialog";
const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div
      style={{
        top: "0px",
        display: "flex",
        margin: "0px 10px",
        padding: "0px 70px 10px 70px",
        boxShadow: " 0px 6.22222px 17.7778px rgba(0, 0, 0, 0.06)",
        borderBottom: "0.888889px solid #DADADA ",
        width: "80vw",
      position:"sticky",
      background:"white",
      zIndex:"10",
      alignItems:"center",
        justifyContent:"space-between"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {/* logo*/}
        <div
          style={{
            fontSize: "19px",
            fontWeight: "600",
            color: "rgba(19, 99, 223, 1)",
          }}
        >
          Recritr
        </div>
        <div
          style={{ fontSize: "8.3px", fontWeight: "102.68", color: "#9AA7AC" }}
        >
          Your gateway to success!
        </div>
      </div>
      {/* user Area */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "block",
            border: "1px solid",
            borderColor: "gray",
            borderRadius: "8px",
            alignItems:"center",
            justifyContent:"center",
            height:"40px"
          }}
        >
          <Input
            placeholder="Search job.."
            disableUnderline={true}
            style={{
              fontFamily: "Lato",
              padding: "0px 0px 0px 5px",
              border: "2px",
              margin:"0px"
            }}
          />
          <Button style={{margin:"0px",}}>
            <SearchRounded />
          </Button>
        </div>
        <div
          className="UserArea"
          style={{
            display: "flex",
            gap: "10px",
            justifyItems: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <GridViewIcon
            className="User__Area__icon"
            style={{
              height: "14px",
              width: "14px",
              color: "rgba(154, 167, 172, 1)",
            }}
          />
          <div
            className="User__Area__Content"
            style={{
              fontSize: "14px",
              fontFamily: "Lato",
              color: "rgba(154, 167, 172, 1)",
            }}
          >
            Dashboard
          </div>
        </div>
        <div
          className="UserArea"
          style={{
            display: "flex",
            gap: "10px",
            justifyItems: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <BusinessCenterRoundedIcon
            className="User__Area__icon"
            style={{
              height: "14px",
              width: "14px",
              color: "rgba(154, 167, 172, 1)",
            }}
          />
          <div
            className="User__Area__Content"
            style={{
              fontSize: "14px",
              fontFamily: "Lato",
              color: "rgba(154, 167, 172, 1)",
            }}
          >
            Find Jobs
          </div>
        </div>
        <div
          className="UserArea"
          style={{
            display: "flex",
            gap: "10px",
            justifyItems: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <TaskAltOutlinedIcon
            className="User__Area__icon"
            style={{
              height: "14px",
              width: "14px",
              color: "rgba(154, 167, 172, 1)",
            }}
          />
          <div
            className="User__Area__Content"
            style={{
              fontSize: "14px",
              fontFamily: "Lato",
              color: "rgba(154, 167, 172, 1)",
            }}
          >
            Applied Jobs
          </div>
        </div>
      </div>
      {/* Important Notification */}
      <div className="Message__Notification"  style={{
          display: "flex",
          gap: "30px",
          margin:'10px',
          padding:"0px 30px",
          alignContent: "center",
          justifyContent: "center",
          borderLeft:"1px solid #DADADA",
          borderRight:"1px solid #DADADA"
          

        }}>
           <SmsOutlinedIcon style={{height:"21px",width:"21px"}}/>
           <img src={image1} height={'22px'} width={"22px"} style={{objectFit:"fill"}}/>
        </div>
        {/* Profile Button */}
        <div className="Profile" style={{
          display: "flex",
          gap: "11px",
          margin:'8px',
          padding:"3px 10px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"rgba(223, 230, 235, 1)",
          borderRadius:"7px"
          }}>

<img src={profile} alt={'Prpfile pic'} style={{objectFit:"fill",height:"27px",width:"27px"}}/>
<div className="" style={{ fontSize: "18px",
              fontFamily: "Lato",
            color:"rgba(19, 99, 223, 1)"}}>
              Robin
            </div>
            <Button onClick={() => setIsOpen(true)} style={{border:"None",backgroundColor:"inherit"}}>
           {isOpen?"▲":"▼"} 
            </Button>
            <MainDialog isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
        </div>
       
    </div>
  );
};

export default Header;
