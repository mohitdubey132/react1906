import React from 'react'
import { Input, Select, MenuItem, FormControl, InputLabel, Button, Grid } from '@mui/material';
import './exprence.css';
const Exprence = () => {
  const [jobTitle, setJobTitle] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [employmentType, setEmploymentType] = React.useState('');
  const [workingLocation, setWorkingLocation] = React.useState('');
  const [workingStatus, setWorkingStatus] = React.useState('');
  const [ctc, setCtc] = React.useState('');
  const [startingDate, setStartingDate] = React.useState('');
  const [endingDate, setEndingDate] = React.useState('');
  const [describe,setDescribe] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here or perform any necessary actions
    console.log('Form submitted!');
    console.log({
      jobTitle,
      companyName,
      employmentType,
      workingLocation,
      workingStatus,
      ctc,
      startingDate,
      endingDate
    });
  };


    return (
      <div id='Experience'>
        <div className='title'>Add Experience</div> 
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          Job title
          <Input
            placeholder="Example: Product manager"
            fullWidth
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            style={{border:"1px solid rgba(218, 218, 218, 1)" ,padding:"10px",borderRadius:"5px"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        Company Name
          <Input
            placeholder="Example: Google"
            fullWidth
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={{border:"1px solid rgba(218, 218, 218, 1)" ,padding:"10px",borderRadius:"5px"}}
         />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            {/* <InputLabel>Employment Type</InputLabel> */}
            Employment Type
            <Select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            >
              <MenuItem value="full-time">Full-Time</MenuItem>
              <MenuItem value="part-time">Part-Time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
              <MenuItem value="freelance">Freelance</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          Working Status
            <Select
              value={workingStatus}
              onChange={(e) => setWorkingStatus(e.target.value)}
            >
              <MenuItem value="Currently Working">Currently Working</MenuItem>
              <MenuItem value="Currently Not Working">Currently Not Working</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          Work Location
          <Input
            placeholder="Example: London-Work from home"
            fullWidth
            value={workingLocation}
            onChange={(e) => setWorkingLocation(e.target.value)}
            style={{border:"1px solid rgba(218, 218, 218, 1)" ,padding:"10px",borderRadius:"5px"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        Add C.T.C.
          <Input
            placeholder="#only figure entry in salary"
            fullWidth
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
            style={{border:"1px solid rgba(218, 218, 218, 1)" ,padding:"10px",borderRadius:"5px"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        Starting Date
          <Input
            placeholder="Starting Date"
            type="date"
            fullWidth
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
            inputProps={{
              min: '1900-01-01',
              max: '2100-12-31',
            }}
            style={{border:"1px solid rgba(218, 218, 218, 1)" ,padding:"10px",borderRadius:"5px"}}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <div style={{color:"rgba(218, 218, 218, 1)"}}>    Ending Date</div>
          <Input
            placeholder="Ending Date"
            type="date"
            fullWidth
            value={endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
            inputProps={{
              min: '1900-01-01',
              max: '2100-12-31',
            }}
            style={{border:"1px solid rgba(218, 218, 218, 1)" ,padding:"10px",borderRadius:"5px"}}
          />
        </Grid>
        
        <Grid item xs={12} sm={12}>
        Starting Date
          <Input
            placeholder="Description about you..."
            type="text"
            fullWidth
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
            style={{border:"1px solid rgba(218, 218, 218, 1)" ,padding:"10px",borderRadius:"5px"}}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>
  );
};
export default Exprence;

