import React from "react";
import { Dialog, IconButton, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HiringIcon from "../../Asset/HiringIcon.png";
import  './index';
const Process =[{number:1,title:"Job Posting & Application Phase",subTitle:"Every Employer Post a Job from there side, after all verification the Job will be Active on Recruitr which will be visible to Applicants just within few minutes."},
{number:2,title:"Shortlisting Phase for Employers",subTitle:"After receiving Applications within a Month Employer will short-list all Applicants according to there needs and Move them to next Phase of Assessment."},
{number:3,title:"Assessment Phase",subTitle:"After Shortlist/Screen in Employer will send Assessment to all the Candidates with 1-2 Days of Screen in, Assessment will be submit from Employer on first Phase itself for easy process."},
{number:4,title:"Interview Phase",subTitle:"After Shortlisting the Assessment candidates will be Moved to Interview Phase & Interview will be Conducted within 4-5 Days.Note: Interviews can be more than one."}]
const HiringProcessDetailDialog = ({ isOpen, closeModal }) => {

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
      className="MainDialog"
      PaperProps={{
        sx: {
          height: "720px",
          width: "443px",
          position: "fixed",
          top: "-30px",
          right: "0px",
          border: "1.5px solid #DADADA",
          boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.06)",
          borderRadius: "12px",
          background: "linear-gradient(180deg, #F6F9FF 0%, #5197FF 100%)",
        },
      }}
    >
      <div className="base__diaalog" style={{marginBottom:"0px"}}>
        <div className="Dialog__header">
          <DialogTitle sx={{ padding: "20px 0px 28px 0px" }}>
            Update Docment
          </DialogTitle>
          <IconButton onClick={closeModal}>
            <CloseIcon height="20px" width="20px" />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            top: "27px",
          }}
        >
          <img src={HiringIcon} alt="HiringIcon" height="127px" width="127px" />
          <div
            style={{ display: "flex", margin: "8px 65px", textAlign: "center" }}
          >
            <TextContent
              size={16}
              weight={600}
              text={"Get Job with our Simplest Hiring Process"}
            />
          </div>

          <div
            style={{
              display: "flex",
              margin: "8px 45px 13px 45px",
              textAlign: "center",
            }}
          >
            <TextContent
              size={12}
              weight={300}
              text={
                "We provide you a very user Friendly process so that no Employee & Employer waste to much time in Hiring Process, Our Simplest Process Will Work according to you."
              }
            />
          </div>
        </div>
        </div>
        <div className="HiringProcess" >
          <div className="base__diaalog " style={{margin:"19px 30px 0px 25px",width:"300px",height:"500px" ,top:"364px",position:"fixed"}}/>
          <div className="base__diaalog specialBorder"  style={{margin:"19px 30px 0px 25px"}} >
           {Process.map((process)=>(<ProcessofHiring number={process.number} title={process.title}
           subTitle={process.subTitle}/>))}     
          </div>
        </div>
      
    </Dialog>
  );
};

export default HiringProcessDetailDialog;
const TextContent = ({ size, weight, text, dark }) => {
  return (
    <div
      style={{
        fontSize: `${size}px`,
        fontFamily: "Lato",
        color: { ...(dark ? "rgba(23,23,23,1)" : "rgba(154, 167, 172, 1)") },
        fontWeight: `${weight}`,
      }}
    >
      {text}
    </div>
  );
};

/**process */
const ProcessofHiring =({number,title,subTitle})=>{
  return(
    <div style={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center",border:"1px solid #DADADA",borderRadius:"20px",padding:"10px 0px"}}>
    <div style={{height:"21px",width:"31px",translate:'-8px -5px',backgroundColor:"#1363DF",textAlign:"center",borderRadius:"100%",color:"#fff",alignItems:"center",fontSize:"14px",justifyContent:"center"}}><div>{number}</div></div>
    <div style={{display:"flex",flexDirection:"column",gap:"5px",justifyContent:"center",textAlign:"left"}}>
      <TextContent text={title} size={16} weight={300} dark={true}/>
      <TextContent text={subTitle} size={12} dark={false}/>
    </div>
    </div>
  )
}