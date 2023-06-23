import React from "react";
import profile from "../../Asset/profilepic.png";
import { Link } from "react-router-dom";
import {CustomBtn} from "../index";
import '../../index.css';
import {Exprence,Download} from '../Pages'
import {Routes,Route} from 'react-router-dom';
const Profile = () => {
  return (
    <div
      style={{
        padding: "0px 0px 0px 0px",
        position: "absolute",
        width: "1140px",
        height: "515px",
        display: "flex",
        background: "#FFFFFF",
        left: "70px",
        border: "1px solid #DADADA",
        borderRadius: "12px",
        zIndex:2
      }}
    >
      {/* seccession 1 */}
      <div 
        style={{
          width: "372px",
          height: "100%",
          borderRight: "1px solid #DADADA",
          overflowX:"auto"
        }}
      >
        {/* profile Card */}
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            backgroundColor: "rgba(19, 99, 223, 1)",
            margin: "13px 8px 14px 12.5px",
            textAlign: "center",
            color: "rgba(255, 255, 255, 1)",
            width: "351",
            borderRadius: "7.8px",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <img
            src={profile}
            alt="profile"
            height="48px"
            width="48px"
            style={{
              objectFit: "fill",
              alignSelf: "center",
              margin: "5px 0px 0px 0px",
            }}
          />
          <TextContent weight={400} size={12} text={"Rpbin Singh"} />
          <TextContent weight={400} size={9} text={"+91 9876543210"} />
          {/* some importent elements */}
          <div
            style={{ display: "flex", gap: "5px", justifyContent: "center" }}
          >
            <ImportentElements text={"UI/UX"} />
            <ImportentElements text={"Full Time"} />
            <ImportentElements text={"Perks"} />
            <ImportentElements text={"Canteen"} />
          </div>
          <Link style={{ textDecoration: "None" }}>
            <TextContent
              weight={400}
              size={12}
              text={"Update Personal Details  >"}
            />
          </Link>
        </div>
        <div
          style={{
            position: "absolute",
            width: "144px",
            height: "124px",
            left: "238.25px",
            top: "-33.75px",
            borderRadius: "50%",
            background: "#FFFFFF",
            opacity: "0.08",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "150.5px",
            height: "140.5px",
            left: "6px",
            top: "83px",
            borderRadius: "50%",
            background: "#FFFFFF",
            opacity: "0.08",
          }}
        />
        {/* Options of seccession one */}
        <div
          style={{
            width: "351px",
            // height: "100%",
            margin: "13px 8px 14px 12.5px",
            display: "flex",
            borderTop: "1px solid #DADADA",
            gap:"8px"
          }}
        >
          <div style={{ display:"flex",flexDirection:"column",padding: "22px 0px 10x 0px", margin: "12px 0px" ,gap:"8px" }}>
            {/* <TextContent size={16} weight={600} text={'Build Resume with Recruitr'} /> */}
            <div style={{
                fontSize: `16px`,
                fontFamily: "H3 Lato-S.bold",
                color: "rgba(32, 32, 32, 1)",
                fontWeight: `600`,
              }}
            >
              Build Resume with Recruitr
            </div>
            <div style={{
              display:"flex",
                fontSize: `12px`,
                fontFamily: "Lato",
                color: "rgba(154, 167, 172, 1)",
                fontWeight: `400`,
              }}
            >
              Update these details for better chances of selection,
These Information can be view by Hiring Teams.
            </div>
            {/* <CustomBtn title={'Work Experience & Skills'} subTitle={'Add all your Internships, Work Details.'}/> */}
          </div>
        </div>
        <div style={{margin:"0px 2px 0px 8px" ,gap:"5px" ,display:"flex",flexDirection:"column"}}>
<Link to={'/Experience'} style={{textDecorationLine:"none" ,color:"rgba(35,35,3,1)" ,textDecorationColor:"black"}} >       <CustomBtn title={'Work Experience & Skills'} subTitle={'Add all your Internships, Work Details...' } /></Link>
        <CustomBtn title={'Qualifications'} subTitle={'Highlight your Education in the eye of recruiters..'}/>
        <CustomBtn title={'Highlights, Sports...'} subTitle={'Show your Highlights & Sports etc to recruiting te..'}/>
        <CustomBtn title={'Recommendations'} subTitle={'Provide Recommendations,get Recommendation..'}/>
        <CustomBtn title={'Upload Video Resume'} subTitle={'Now share your details in video form to Employer'}/>
        <Link to={'/Download'} style={{textDecorationLine:"none" ,color:"rgba(35,35,3,1)"}} >
                  <CustomBtn title={'Download Resume'} subTitle={'All data will be combined in a format, you can dow...'} />
        </Link>
        </div>
      </div>
      {/* seccession 2 */}
      <Routes>
      <Route path="/Experience" element={<Exprence/>}/>
      <Route path='/Download' element={<Download/>}/>
      
    </Routes>
    </div>
  );
};

export default Profile;

const TextContent = ({ size, weight, text }) => {
  return (
    <div
      style={{
        fontSize: `${size}px`,
        fontFamily: "Lato",
        color: "rgba(255, 255, 255, 1)",
        fontWeight: `${weight}`,
      }}
    >
      {text}
    </div>
  );
};

const ImportentElements = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "#EEF2FF",
        color: "rgba(35,35,35,1)",
        fontSize: "6.7px",
        fontFamily: "lato",
        fontWeight: "400",
        border: "0.375px solid #1363DF",
        padding: "1.5px 6px",
        borderRadius: "6.54624px",
      }}
    >
      {text}
    </div>
  );
};
