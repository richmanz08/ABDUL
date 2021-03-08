
import "./HOME.css";
import Mainwebsite from './Mainwebsite'
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import React, { useState } from "react";
import { triggerFocus } from "antd/lib/input/Input";
import Password from "antd/lib/input/Password";

function HOME() {
 
  const [loginmodal,SetmodalLogin] = useState(false)
  const handdleShowlogin = () => { 
    SetmodalLogin(!loginmodal)
    SetmodalRegis(false)
  }
  const [Regismodal,SetmodalRegis] = useState(false)
  const handdleShowRegis = () => 
  { SetmodalRegis(!Regismodal)
     SetmodalLogin(false)
  }
 
  
  const contentStyle = {
    
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width:'100%'
  };



  return (
    <div className="Frame">
      <div className="OverlayContainer">
      <Carousel autoplay className="Carousel" >
    <div className="Courousel-item1">
       <img className="imgset" src="./IMGhome/bg1.jpg"></img>
    </div>
    <div  className="Courousel-item2">
    <img className="imgset" src="./IMGhome/bg2.jpg"></img>
    </div>
    
   
  </Carousel>
     <div  className="Glass-Login">
       <div className="Head">
         <div className="Group-tool">
           <img className="icons-web" src="./IMGhome/logo.png"></img>
           <text className="style-button">กรอบโปลไฟล์</text>
           <text className="style-button">สติ้กเกอร์</text>
           <text className="style-button">จัดการโพสต์</text>
           <text className="style-button">รูปภาพ</text>
           <text className="style-button">ดาว</text>
           <button className="loginbutton1" onClick={handdleShowlogin}>เข้าใช้งาน</button>
           <img className="iconsphone" src="./IMGhome/iconphone.png"></img>
           <text className="tphone">098-4437-173</text>
        </div>
           <div className="Line-Hori"></div>
       </div>
       <div className="Body">
       <text className="t1">ยินดีต้อนรับ</text>
      <text className="t2">หากคุณยังไม่มีบัญชีผู้ใช้ ให้ทำการสมัครสมาชิกก่อน หากคุณมีบัญชีอยู่แล้วสามารถเข้าใช้งานระบบได้ที่ปุ่ม "เข้าใช้งาน" ด่านล่าง</text>
       <div className="zonebutton">
       <button className="loginbutton2" onClick={handdleShowlogin} >เข้าใช้งาน</button>
       <button className="Registered" onClick={handdleShowRegis}>สมัครสมาชิก</button>
       </div>
       </div>
     </div>
     </div>
     <div className="Line-Hori2"></div>
     <div className="florr">
       <div className="item1">
         <text className="hli">การเข้าใช้งานระบบ</text>
         <li>ให้ท่านกรอก Username ของท่านให้ถูกต้อง</li>
         <li>ให้ท่านกรอก Password ของท่านให้ถูกต้อง</li>
         <li>หลังจากนั้นกดที่ปุ่มเข้าใช้งานเพื่อเข้าสู่ระบบ ท่านสามารถเข้าถึงทุกฟังก์ชันการใช้งานได้</li>
       </div>
       <div className="item2">
       <text className="hli">การสมัครสมาชิก</text>
         <li>ให้ท่านกรอก Firstname และ Lastname </li>
         <li>ให้ท่านกรอก Username ของท่าน คำแนะนำควรเป็นยูสเซอร์เนมที่ปลอดภัยและจดจำได้ง่าย</li>
         <li>ให้ท่านกรอก Password ของท่าน และกรอกอีกครั้งเพื่อยืนยัน</li>
         <li>หลังจากนั้นให้ท่า</li>
       </div>
       <div className="item3">
       <text className="hli">ฟังก์ชันในระบบ</text>
         <li>มีระบบดาว เพื่อใช้ในการส่งกับกระทู้ที่ท่านถูกใจ หรือแลกเปลี่ยนไอเทมต่างๆ</li>
         <li>ระบบโพสต์ที่สามารถเพิ่มรูปภาพ เพื่อความน่าสนใจของเนื้อหา</li>
         <li>การจัดการกับโพสต์ของตัวเอง</li>
         <li>การจัดการโปรไฟล์ ท่านสามารถเปลี่ยนชื่อของท่านได้</li>
       </div>
       <div className="item4">
         <text className="Teamtex"> Team Developers</text>
         <text className="namedev">@Alongkorn</text>
         <text className="namedev">@Arnon Rungrueng</text>
         <div className="Groupicons">
           <img className="seticons" src="./IMGhome/facebook.png"></img>
           <img className="seticons" src="./IMGhome/line.png"></img>
           <img className="seticons" src="./IMGhome/ig.jpg"></img>
         </div>
       </div>
       </div>
      <div className={loginmodal ? "Containermodal" : "Container"}>
        <div className='boxlogin'> 
        <img className="setlogologin"  src="./IMGhome/logo.png"></img>
          <text className="singingeadertext">เข้าใช้งานระบบ</text>
         
  
         <text className="setUP">ยูสเซอร์เนม</text> 
          <input type='username' className="inputstyle" maxLength={18}></input>
          <text className="setUP">รหัสผ่าน</text>
          <input type='password'  className="inputstyle" maxLength={15}></input>
          <button className="BTN-accept-loginstyle">เข้าสู่ระบบ</button>
        </div>
      </div>
      <div className={Regismodal ? "Containermodal2" : "Container2"}>
        <div className="Box-regisstyle">
        <img className="icons-regis" src="./IMGhome/logo.png"></img>
          <text className="Text-regis">สมัครสมาชิก</text>
          <text className="Text">  หลังจากยืนยันเสร็จสิ้น สามารเข้าใช้งานระบบได้ทันที</text>
        </div>
        <div className="Boxregis">
          <div className="row1"> 
          <text className="settexttopic">Firstname</text> <text className="settexttopic SLlastname">Lastname</text>
         </div>
          <div className="row2">
          <input type="text" className="Firsname-regis inputstyleA" maxLength={20}></input> 
          <input type="text" className="Lastname-regis inputstyleA" maxLength={20}></input>
          </div>
         
          <text className="settexttopic">สร้างยูสเซอร์เนมของคุณ</text>
          <input type='username' className="username-regis inputstyleB"  maxLength={18}></input>
          <text className="settexttopic">รหัสผ่าน</text>
          <input type="password" className="password-regis inputstyleB" maxLength={15}></input>
          <text className="settexttopic">กรอกรหัสผ่านอีกครั้งเพื่อยืนยัน</text>
          <input type="password" className="Re-check-password inputstyleB" maxLength={15}></input>
         <text className="settexttopic">เบอร์โทรศัพท์</text>
         <input type="text" className="Number-regis inputstyleB" maxLength={10}></input>
         <button className="BTN-accept-regis">ยืนยัน</button>
        </div>




        
      </div>
      










     </div>
   
  
  )
  }

export default HOME;
