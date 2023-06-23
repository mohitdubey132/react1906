import React from "react";
import "./download.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import Fromate from '../../Asset/formate1.png'
const Download = () => {
  return (
    <div id="download">
      <div className="title">Download</div>
      <div className="download__items__Container">
      <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
            >
<div className="download__items__area">        <div className="download__items">
        <img src={Fromate} alt="hey" width={"86px"} height={"124px"} />{" "}
         <FormControlLabel value="1" control={<Radio />} />
        </div>
        <div className="download__items">
        <img src={Fromate} alt="hey" width={"86px"} height={"124px"} />{" "}
         <FormControlLabel value="2" control={<Radio />} />
        </div>
        </div>
       
        </RadioGroup>
          </FormControl>
        <div className="Download__footer">
          <div>
            {" "}
            <Button
              style={{
                backgroundColor: "rgba(35,35,35,1)",
                padding: "10px 20px",
                color: "#fff",
                fontSize: "18ppx",
                fontWeight: "500",
              }}
            >
              Download
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              font: "12px 400 rgba(106, 122, 128, 1)",
              marginTop: "10px",
            }}
          >
            Note: for better & best Resume fill your all details in Resume
            Builder.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
              