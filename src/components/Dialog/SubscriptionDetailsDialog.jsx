import React from 'react';
import { Dialog } from '@mui/material';

const SubscriptionDetailsDialog = ({isOpen,closeModal}) => {
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
    ></Dialog>
  )
}

export default SubscriptionDetailsDialog