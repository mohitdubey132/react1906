import React from "react";
import { Dialog, DialogTitle, IconButton, InputBase,Input  } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import deleteIcon from '../../Asset/fi-rr-trash.png'
import "./index.css";
const UpdateDocDialog = ({ isOpen, closeModal }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
      className="MainDialog"
      PaperProps={{
        sx: {
          width: "443px",
          position: "fixed",
          top: "-30px",
          right: "0px",
          border: "1.5px solid #DADADA",
          boxShadow: "0px 7px 20px rgba(0, 0, 0, 0.06)",
        },
      }}
    >
      <div className="base__diaalog">
        <div className="Dialog__header">
          <DialogTitle sx={{ padding: "20px 0px 28px 0px" }}>
            Update Docment
          </DialogTitle>
          <IconButton onClick={closeModal}>
            <CloseIcon height="20px" width="20px" />
          </IconButton>
        </div>
        <div className="UpdateJobPre__subTitle">Documents Details</div>
      
         <TextContent size={16} dark={false} text={'Upload These Necessary Documents, Company will ask to Upload During Document verification Process.'}/>          
      
        <div className="InputArea" >
          <TextContent size={16} weight={600} text={'Upload Pan Card'} dark={true}/>
          <div className="InputArea__InputBox">
            <InputBase type="" placeholder="Upload only jpg/Pdf/jpeg... " >
              {/* <Input type="file" /> */}
            </InputBase>
            {/* <IconButton style={{margin:0}}> */}
            <button className="update__doc__btn">
            <FileUploadOutlinedIcon height='18px' width='18px' />
            </button>
            {/* </IconButton> */}
          </div>
          <TextContent size={12} weight={400} text={'Note: PDF file only | 2-5 MB file size maximum'} dark={false}/>
        </div>
        <div className="InputArea" >
          <TextContent size={16} weight={600} text={'Upload Blank Cheque'} dark={true}/>
          <div className="InputArea__InputBox">
            <InputBase type="" placeholder="Upload only jpg/Pdf/jpeg... " >
              {/* <Input type="file" /> */}
            </InputBase>
            {/* <IconButton style={{margin:0}}> */}
            <button className="update__doc__btn">
            <FileUploadOutlinedIcon height='18px' width='18px' />
            </button>
            {/* </IconButton> */}
          </div>
          <TextContent size={12} weight={400} text={'Note: PDF file only | 2-5 MB file size maximum'} dark={false}/>
        </div>
        <div className="InputArea" >
          <TextContent size={16} weight={600} text={'Reliving Letter (Previous Company)'} dark={true}/>
          <div className="InputArea__InputBox">
            <InputBase type="" placeholder="Upload only jpg/Pdf/jpeg... " >
              {/* <Input type="file" /> */}
            </InputBase>
            {/* <IconButton style={{margin:0}}> */}
            <button className="update__doc__btn">
            <img src={deleteIcon} alt="delete-icon" height='18px' width='18px' />
            </button>
            {/* </IconButton> */}
          </div>
          <TextContent size={12} weight={400} text={'Note: PDF file only | 2-5 MB file size maximum'} dark={false}/>
        </div><div className="InputArea" >
          <TextContent size={16} weight={600} text={'Resignation Letter (Previous Company)'} dark={true}/>
          <div className="InputArea__InputBox">
            <InputBase type="" placeholder="Upload only jpg/Pdf/jpeg... " >
              {/* <Input type="file" /> */}
            </InputBase>
            {/* <IconButton style={{margin:0}}> */}
            <button className="update__doc__btn">
            < img src={deleteIcon} alt="delete-icon" height='18px' width='18px' />
            </button>
            {/* </IconButton> */}
          </div>
          <TextContent size={12} weight={400} text={'Note: PDF file only | 2-5 MB file size maximum'} dark={false}/>
        </div><div className="InputArea" >
          <TextContent size={16} weight={600} text={'Upload Driving Licence'} dark={true}/>
          <div className="InputArea__InputBox">
            <InputBase type="" placeholder="Upload only jpg/Pdf/jpeg... " >
              {/* <Input type="file" /> */}
            </InputBase>
            {/* <IconButton style={{margin:0}}> */}
            <button className="update__doc__btn">
            < img src={deleteIcon} alt="delete-icon" height='18px' width='18px' />
            </button>
            {/* </IconButton> */}
          </div>
          <TextContent size={12} weight={400} text={'Note: PDF file only | 2-5 MB file size maximum'} dark={false}/>
        </div>
        <TextContent size={16} weight={300} text={'Note: Contact Customer Support to Upload other documents.'} dark={false}/>
      </div>
    </Dialog>
  );
};

export default UpdateDocDialog;

const TextContent = ({ size, weight, text ,dark }) => {
  return (
    <div
      style={{
        fontSize: `${size}px`,
        fontFamily: "Lato",
        color: {...dark?"rgba(23,23,23,1)":"rgba(154, 167, 172, 1)"},
        fontWeight: `${weight}`,
      }}
    >
      {text}
    </div>
  );
};
