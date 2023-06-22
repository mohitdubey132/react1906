import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import {ExistingPlan,UpgradePlan} from '../Plans';
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
const Existing = [{ Plan: "Recruitr Fresher Candidate", buyingDaate: "Purchased on: 27th Mar 2023", vaild_till: "Valid Till: 27th Jun 2023" }];
const Upgrade = [
  {
    Plan: "Recruitr Gold Candidate",
    price: "₹200",
    old_price: "₹400",
    offer: "50% OFF",
    planType: "Gold",
    Details: [{ title: "Get a Chance to Apply Jobs which asking Experience", info: "Using our Gold subscription package, one can also Apply to the jobs which asking Experienced Candidates." },
    { title: "Get a Chance to Apply Jobs which asking Experience", info: "Using our Gold subscription package, one can also Apply to the jobs which asking Experienced Candidates." },
    { title: "Get a Chance to Apply Jobs which asking Experience", info: "Using our Gold subscription package, one can also Apply to the jobs which asking Experienced Candidates." }],
  },
  {
    Plan: "Recruitr Diamond Candidate",
    price: "₹400 ",
    old_price: "₹800",
    offer: "50% OFF",
    planType: "Diamond",
    Details: [{ title: "", info: "" }],
  },
];
const SubscriptionDetailsDialog = ({ isOpen, closeModal }) => {
  const [existing, setExisting] = useState([]);
  const [upGrade, setUpGrade] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState([]);
  useEffect(()=>{
    setExisting(Existing);
    setUpGrade(Upgrade);},[])
  
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
          height: "720px",
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
            Subscription Details
          </DialogTitle>
          <IconButton onClick={closeModal}>
            <CloseIcon height="20px" width="20px" />
          </IconButton>
        </div>
        <TextContent
          size={18}
          weight={700}
          text={"Existing Plan"}
          dark={true}
        />
        {existing?.map((plan)=>(<ExistingPlan plan={plan}/>))}
        <TextContent
          size={18}
          weight={700}
          text={"Upgrade Your Plan to"}
          dark={true}
        />
        {upGrade?.map((plan)=>(<UpgradePlan plan={plan}/>))}
        <Button
          style={{
            backgroundColor: "rgba(35,35,35,1)",
            borderRadius: "10px",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: "500",
            }}
          >
            Upgrade Subscription
          </div>
        </Button>
      </div>
    </Dialog>
  );
};

export default SubscriptionDetailsDialog;

const TextContent = ({ size, weight, text, dark }) => {
  return (
    <div
      style={{
        fontSize: `${size}px`,
        fontFamily: "Lato",
        color: { ...(dark ? "rgba(35,35,35,1)" : "rgba(106, 122, 128, 1)") },
        fontWeight: `${weight}`,
      }}
    >
      {text}
    </div>
  );
};
