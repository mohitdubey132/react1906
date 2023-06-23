import React ,{useState} from 'react';
import {} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './btn.css';
import {useNavigate} from 'react-router-dom';
const CustomBtn = ({title,subTitle ,links}) => {
  const useNaavigation = useNavigate();
  const [isSelected, setIsSelected] =useState(false);
  const haandleClick =()=>{
    if(isSelected){
      setIsSelected(false)
    }
    else{
      setIsSelected(true)
    }
  }
  return (
    <div  onMouseEnter={haandleClick} onMouseLeave={haandleClick} >
    <div className='custombtn'style={isSelected?{borderBottom:"2px solid #DADADA",color:"white",backgroundColor:"black" }:{borderBottom:"2px solid #DADADA"}}>
        <div className='custombtn__contente'>
            <div className='custombtn__contente__title'
            >{title}</div>
            <div className='custombtn__contente__subTitle'>{subTitle}</div>
            </div>
        <IconButton className='custombtn__icon' //onClick={useNaavigation(links ??"/")}
         style={isSelected?{color:"white",backgroundColor:"black" ,margin:"0px",alignSelf:"flex-end"}:{margin:"0px",alignSelf:"flex-end"}}
          >
            <AddCircleOutlineOutlinedIcon className='custombtn__icon' style={{height:"20px",width:"20px"}}/>
        </IconButton>
    </div>
    </div>
  )
}

export default CustomBtn;