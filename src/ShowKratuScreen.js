import React, {Component, useState } from "react";
import ModePage from './ModePage'

function ShowKratuScreen({passID}) {
// const ChoseID = id;
//   if(ChoseID==DATATABLEkt[id]){
//     return (
//       <div>{id}</div>
//     )
//   }
const [id,saveID] = useState(passID)
const DATATABLEkt =[
  { id: 14477, title: 'ข้อมูลชุดที่ 1'},
  { id: 21145, title: 'ข้อมูลชุดที่ 2'},
  {  id: 32211, title: 'ข้อมูลชุดที่ 3' }]
  return (
    <div className="Layout">
      {DATATABLEkt && DATATABLEkt.map((item,index)=>(
        <div style={{fontSize:50}}>
        <text> {item.id}</text>
        <text> {item.title}</text>
      </div>))  }   
    </div>
  );
}
export default ShowKratuScreen;
