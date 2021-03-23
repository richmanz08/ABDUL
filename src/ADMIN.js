import React, { useState } from 'react'
import './ADMIN.css';
import Account from './components/Account';
import Dashbord from './components/Dashbord';
import Request from './components/Request';
import SandP from './components/SandP';


function ADMIN() {
//   function call dashbord
const [dashbord,setDashbord] = useState(true);
const clickedDashbord =() => {
setDashbord(!dashbord)
setAccount(false)
setRequest(false)
setSandP(false)
}
//  function call Management Account
const [account,setAccount] = useState(false);
const clickedAccount =() => {
setAccount(!account)
setDashbord(false)
setRequest(false)
setSandP(false)
}
//  function call Request
const [request,setRequest] = useState(false);
const clickedRequest =() => {
setRequest(!request)
setSandP(false)
setAccount(false)
setDashbord(false)

}
//  function call SandP
const [sandp,setSandP] = useState(false);
const clickedSandP =() => {
setSandP(!sandp)
setDashbord(false)
setRequest(false)
setAccount(false)
}
  return (
    <div className="Layout-admin">
    <div className="BarItem">
      <img className="icons-logo-add" src="./IMGadmin/logo.png"></img>
      <text className="t-addmin">Admin Screen</text>
      <button className="setBstyle" onClick={clickedDashbord}><text>Dashbord</text><div className="btndashcssLine"></div> </button>
      <button className="setBstyle" onClick={clickedAccount}><text>Management Account</text><div className="btndashcssLine"></div></button>
      <button className="setBstyle" onClick={clickedRequest}><text>Request</text><div className="btndashcssLine"></div></button>  
      <button className="setBstyle" onClick={clickedSandP}><text>Sticker/Portrait</text><div className="btndashcssLine"></div></button>
      

    </div>
    {/* ---------------------dasbord component------------------ */}
    <div className={ dashbord ?"Body-Dashbord" : "dashbordDisplay"}>
       
        <Dashbord/>

    </div>
       {/* ---------------------Management component ------------------ */} 
    <div className={ account ?"Body-Management" : "managementDisplay"}>
       
        <Account/>
    </div>
      {/* ---------------------Sticker component------------------ */} 
      <div className={ request ?"Body-Request" : "requestDisplay"}>
   
         <Request/>
    </div>
     {/* --------------------Stciker portrait component------------------ */} 
     <div className={ sandp?"Body-SandP" : "SandPDisplay"}>
        Sticker/Portrait
       <SandP/>
    </div>
         
    </div>
  );
}
export default ADMIN;