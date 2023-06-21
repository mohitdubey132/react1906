import React from 'react'
import { Dialog } from '@mui/material'
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

      },
    }}
  ></Dialog>

  )
}

export default HiringProcessDetailDialog