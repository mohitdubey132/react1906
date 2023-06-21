import React from 'react'
import { Dialog ,DialogTitle ,IconButton} from '@mui/material';
import CloseIcon  from '@mui/icons-material/Close';
import './index.css';
const UpdateDocDialog = ({isOpen,closeModal}) => {
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
      },
      }}
    > 
    <div className='base__diaalog'> 
  <div className='Dialog__header'>
  <DialogTitle sx={{padding:'20px 0px 28px 0px'}}>Update Docment</DialogTitle>
   <IconButton onClick={closeModal} >< CloseIcon height="20px" width='20px'  />
   </IconButton>
</div>
<div className='UpdateJobPre__subTitle'>
Documents Details
        </div>
        <div style={{display:"flex",flexWrap:"wrap",font:"16px lato rgba(106, 122, 128, 1)"}}>
        Upload These Necessary Documents, Company will ask to Upload During Document verification Process.
        </div>
  </div></Dialog>
  )
}

export default UpdateDocDialog