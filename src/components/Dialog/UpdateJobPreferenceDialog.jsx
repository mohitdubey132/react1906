import React from 'react'
import { Dialog, DialogTitle ,IconButton ,Button,Input, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import './index.css';
import Checkbox from '@mui/material/Checkbox';
import {  SearchRounded } from '@mui/icons-material';
import CloseIcon  from '@mui/icons-material/Close';
const UpdateJobPreferenceDialog = ({isOpen,closeModal}) => {
 const preference =['UI/UX Designer','Senior Java Developer','IOS Developer','Graphic Designer','Lawyer']
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
  <DialogTitle sx={{padding:'20px 0px 28px 0px'}}>User Job Preference</DialogTitle>
   <IconButton onClick={closeModal} >< CloseIcon height="20px" width='20px'  />
   </IconButton>

  </div>
  <div className='job_prefer__search'
          style={{
            display: "flex",
            border: "1px solid",
            borderColor: "gray",
            borderRadius: "8px",
            alignContent:"center",
            justifyContent:"space-between"
          }}
        >
          <Input
            placeholder="Search job.."
            disableUnderline={true}
            style={{
              fontFamily: "Lato",
              padding: "0px 0px 0px 5px",
              border: "2px",
            }}
          />
          <Button style={{margin:"0px"}}>
            <SearchRounded  style={{color:"black"}}/>
          </Button>
        </div>
        <div className='UpdateJobPre__subTitle'>
          Popular jobs Title
        </div>
        <List sx={{padding:'0px',margin:"0px"}}>
          <ListItem sx={{padding:'0px',margin:"0px"}}>
            <ListItemIcon>
              <Checkbox/>
              </ListItemIcon>
              <ListItemText>UI/UX Developer</ListItemText>
          </ListItem>
          <ListItem sx={{padding:'0px',margin:"0px"}}>
            <ListItemIcon>
              <Checkbox/>
              </ListItemIcon>
              <ListItemText>Product Manager</ListItemText>
          </ListItem>
          <ListItem sx={{padding:'0px',margin:"0px"}}>
            <ListItemIcon>
              <Checkbox/>
              </ListItemIcon>
              <ListItemText>Sales Executive</ListItemText>
          </ListItem>
          <ListItem sx={{padding:'0px',margin:"0px"}}>
            <ListItemIcon >
              <Checkbox/>
              </ListItemIcon>
              <ListItemText>Human Resource Manager</ListItemText>
          </ListItem>
        </List>
        <div className='UpdateJobPre__subTitle'>
          Your Preference
        </div>
        <div className='dis-flex' style={{flexWrap:"wrap",gap:"10px",}}>
         {preference.map((item)=>(<CustomPreference title={item}/>))}
        </div>
        
        </div>
  </Dialog>
  )
}

export default UpdateJobPreferenceDialog;
const CustomPreference =({title})=>{
  return(
   <div className='dis-flex just-between' style={{border:"1px solid blue" ,alignItems:"center",justifyContent:"center" ,padding:"0px 8px" ,borderRadius:"20px"}} >
    <div style={{font:"12px lato"}}>{title}</div>
    <IconButton style={{margin:"0px"}}>
      <CloseIcon height='17px' width='17px' />
    </IconButton>
   </div>
  )
}