import {Grid, CssBaseline} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {Footers, Header ,Profile} from './components';
// import './index.css';
function App() {
  return (<> 
    <div className="App" style={{padding:"'0px 0px 0px 70px'" ,margin:0,width:"100vw"}}>
    <Header/>
    <div style={{fontSize:"24px ",
    fontFamily:"Lato",
    color:"rgba(23, 23, 23, 1)",
    padding:"26px 0px 12px 75px"}} >Profile</div>
    <Profile/>
    <Routes>
      {/* <Route path='/' element={<Foo/>}/> */}
    </Routes>
    <Footers/>
    </div></>
  );
}

export default App;
const Foo =()=>{

  return (<h1>dkkdd</h1>)
}