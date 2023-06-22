import React from 'react'
import { Dialog ,IconButton,DialogTitle,Button} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import copyIcon from '../../Asset/copy.png'
import Reddit from '../../Asset/reditt.png';
import Instagram from '../../Asset/instagram.jpeg';
import whatsapp from '../../Asset/whatapp.png';
import slack from '../../Asset/slack.png';
import faceBook from '../../Asset/faceBook.png';
import './index.css'; 
const RefertoFriendsDialog = ({isOpen,closeModal}) => {
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
        // background: "linear-gradient(180deg, #F6F9FF 0%, #5197FF 100%)",
      
      },
    }}
  > 
  <div className="base__diaalog" style={{marginBottom:"0px"}}>
        <div className="Dialog__header">
          <DialogTitle sx={{ padding: "20px 0px 28px 0px" }}>
          Refer to your Friends
          </DialogTitle>
          <IconButton onClick={closeModal}>
            <CloseIcon height="20px" width="20px" />
          </IconButton>
        </div>
        <div style={{border:"1px solid rgba(218, 218, 218, 1)",borderRadius:"5px" ,fontSize:"16px",fontWeight:"400",color:"rgba(106, 122, 128, 1)",display:"flex",padding:"10px"}}>
        Hey! It's been a game-changer for me in finding job opportunities and connecting with employers. Join now to level up our careers together! Get it from: https://recruitr.com/invite linkexample - Sender name
        </div>
        <Button style={{gap:"5px"}}><img src={copyIcon} alt={'copy'} height={'16px'} width={'16px'}/>
        <div style={{font:"18px  Lato blue",fontWeight:"700"}}>  Copy</div>
        </Button>
        <div style={{display:"flex" ,justifyContent:"space-between"}}>
          <div className='socialMedia'>
            <a href='https://www.reddit.com'>
              <img src={Reddit} alt='reddit' height='40px' width='40px'/>
              </a>  <div>Reddit</div>
          </div>
          <div className='socialMedia'>
            <a href='https://www.instagram.com'>
              <img src={Instagram} alt='Instagram' height='40px' width='40px'/>
              </a> <div>Instgram</div>
          </div>
          <div className='socialMedia'>
            <a href='https://www.facebook.com'>
              <img src={faceBook} alt='reddit' height='40px' width='40px'/>
              </a> <div>Facebook</div>
          </div>
          <div className='socialMedia'>
            <a href='https://www.whatsapp.com'>
              <img src={whatsapp} alt='reddit' height='40px' width='40px'/>
              </a> <div>Whatsapp</div>
          </div>
          <div className='socialMedia'>
            <a href='https://www.slack.com'>
              <img src={slack} alt='reddit' height='40px' width='40px'/>
              </a> <div>Slack</div>
          </div>
        </div>
    </div>
  </Dialog>
  )
}

export default RefertoFriendsDialog