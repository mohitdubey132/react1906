import React ,{useState}from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import "./global.css";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import GradeIcon from '@mui/icons-material/Grade';
import udateDocument from '../../Asset/UpdateDocument.png';
import HiringProcess from '../../Asset/HiringProcess.png';
import User from '../../Asset/UserIcon1.png';
import {ProfileDialog,
  UpdateDocDialog,
  UpdateJobPreferenceDialog,
  RefertoFriendsDialog,
  HiringProcessDetailDialog,
SubscriptionDetailsDialog} from '../Dialog';
const MainDialog = ({ isOpen, closeModal }) => {
  const [isOpenProfile,setIsOpenProfile] =useState(false);
  const [isOpenUpdateDoc,setIsOpenUpdateDoc] =useState(false);
  const [isOpenUpdateJobPre,setIsOpenUpdateJobPre] =useState(false);
  const [isOpenRefer,setIsOpenRefer] =useState(false);
  const [isOpenHiringProcess,setIsOpenHiringProcess] =useState(false);
  const [isOpenSubscription,setIsopenSubscription] = useState(false)
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
      className="MainDialog"
      PaperProps={{
        sx: {
          height: "245px",
          width: "170px",
          position: "fixed",
          top: "60px",
          right: "160px",
          border: "1.5px solid #DADADA",
          boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.06)",

        },
      }}
    > 
    <div style={{margin:"0px 4px",display:"flex",flexDirection:"column" ,color:"rgba(35,35,35,1)"}}>
      <IconButton className="dialog__button" onClick={()=>(setIsOpenProfile(true))}
      style={{margin:"14px 0px 0px 13.7 ",gap:"9.7px",borderRadius:0,
      display:"flex",
      justifyContent:"flex-start",
      fontSize:"12px",
      fontFamily:"Lato",
      fontWeight:"400"}}
      >
       <img src={User} height="14px" width="14px" style={{padding:"0px 4px 0px 4px"}}/>
       <div className="dialog__button__text">Profile</div>
      </IconButton>
      <IconButton className="dialog__button" onClick={()=>(setIsOpenUpdateJobPre(true))}
      style={{margin:"14px 0px 0px 13.7 ",gap:"9.7px",borderRadius:0,
      display:"flex",
      justifyContent:"flex-start",
      fontSize:"12px",
      fontFamily:"Lato",
      fontWeight:"400"}}
      >
       <EditOutlinedIcon height="12px" width="12px"/>
       <div className="dialog__button__text">Update Job Preference</div>
      </IconButton>
      <IconButton className="dialog__button"  onClick={()=>(setIsOpenUpdateDoc(true))}
      style={{margin:"14px 0px 0px 13.7 ",gap:"9.7px",borderRadius:0,
      display:"flex",
      justifyContent:"flex-start",
      fontSize:"12px",
      fontFamily:"Lato",
      fontWeight:"400"}}
      >
       <img src={udateDocument} height="14px" width="14px" style={{padding:"0px 4px 0px 4px"}}/>
       <div className="dialog__button__text">Update Documents</div>
      </IconButton>
      <IconButton className="dialog__button" onClick={()=>(setIsOpenHiringProcess(true))}
      style={{margin:"14px 0px 0px 13.7 ",gap:"9.7px",borderRadius:0,
      display:"flex",
      justifyContent:"flex-start",
      fontSize:"12px",
      fontFamily:"Lato",
      fontWeight:"400"}}
      >
       <img src={HiringProcess} alt="hiringProcess" height="14px" width="14px" style={{padding:"0px 4px 0px 4px"}}/>
       <div className="dialog__button__text">Hiring Process Detail</div>
      </IconButton>
      <IconButton className="dialog__button" onClick={()=>{setIsopenSubscription(true)}}
      style={{margin:"14px 0px 0px 13.7 ",gap:"9.7px",borderRadius:0,
      display:"flex",
      justifyContent:"flex-start",
      fontSize:"12px",
      fontFamily:"Lato",
      fontWeight:"400"}}
      >
       <GradeIcon height="14px" width="14px" style={{color:"yellow"}}/>
       <div className="dialog__button__text"> Subscription Details</div>
      </IconButton>
      <IconButton className="dialog__button" onClick={()=>{setIsOpenRefer(true)}}
      style={{margin:"14px 0px 0px 13.7 ",gap:"9.7px",borderRadius:0,
      display:"flex",
      justifyContent:"flex-start",
      fontSize:"12px",
      fontFamily:"Lato",
      fontWeight:"400"}}
      >
       <img src={User} height="14px" width="14px" style={{padding:"0px 4px 0px 4px"}}/>
       <div className="dialog__button__text">Refer to Friends</div>
      </IconButton>     
      <IconButton className="dialog__button" 
      style={{margin:"14px 0px 0px 13.7 ",gap:"9.7px",borderRadius:0,
      display:"flex",
      justifyContent:"flex-start",
      fontSize:"12px",
      fontFamily:"Lato",
      fontWeight:"400",
      borderTop:"1px solid #DADADA"
    }}
      >
       <LogoutIcon height="14px" width="14px" style={{color:"red"}}/>
       <div className="dialog__button__text">Logout</div>
      </IconButton>
      </div>
      <ProfileDialog isOpen={isOpenProfile} closeModal={()=>{setIsOpenProfile(false)}}/>
  <UpdateDocDialog isOpen={isOpenUpdateDoc} closeModal={()=>{setIsOpenUpdateDoc(false)}}/>
  <UpdateJobPreferenceDialog isOpen={isOpenUpdateJobPre} closeModal={()=>{setIsOpenUpdateJobPre(false)}}/>
  <RefertoFriendsDialog isOpen={isOpenRefer} closeModal={()=>{setIsOpenRefer(false)}}/>
  <HiringProcessDetailDialog isOpen={isOpenHiringProcess} closeModal={()=>{setIsOpenHiringProcess(false)}}/>
<SubscriptionDetailsDialog isOpen={isOpenSubscription} closeModal={()=>{setIsopenSubscription(false)}}/>     
    </Dialog>
  );
};

export default MainDialog;
