import React,{useState} from "react";
import "./profile.css";
import { Tabs ,Input} from 'antd';



function profile() {
  const { TabPane } = Tabs;
  const { TextArea } = Input;
  const onChange = e => {
    console.log(e);
  };
function callback(key) {
  console.log(key);
}





  return (
    <div className="profileCTN">
      <div className="Box-profile">
       <div className="column-left-Profile"></div>
       <div className="column-Right-Profile">
         <div className="Background-Image-Header">
           <img className="Topimage-BG" src="./IMGprofile/bg1.jpg"></img>
           <text className="text-myprofile">
             <text className="tm1" >My Profile</text>
             <div className="Tab-tm1-bar">Tell me What you want ?</div>
             </text>
         </div>
         {/* Bog tap components */}
         <div className="tab-container">
         <Tabs  onChange={callback} type="card">
    <TabPane  tab={<text className="setstyle-tab">โปรไฟล์</text>} key="1">
<div className="ProfileResult-container">
  <img className="setsizeProfile" src="./unnamed.png"></img>
 <div  className="fontstyle-results">รูปโปรไฟล์</div>
 <text className="fontstyle-results">ชื่อบัญชีผู้ใช้งาน : Richmanz </text>
 <text className="fontstyle-results" >ยูสเซอร์ไอดี : rizhmanz2018</text>
 <text className="fontstyle-results">รหัสผ่านปัจจุบันของคุณคือ : 0112456</text>
 <text className="fontstyle-results">เบอร์โทรศีพท์ : 112135</text>
 <text className="fontstyle-results">Description : ไม่มี</text>
</div>
<div className="box-warning-results">
  <text>ท่านสามารถแก้ไขบัญชีผู้ใช้ของท่านได้ โหมดของการ "แก้ไขโปรไฟล์"  แต่ท่านจะไม่สามารถแก้ไขเบอร์โทรศัพท์ที่ได้ทำการยืนยันไว้แล้วได้</text>
</div>


     
 
 
 
 
 
 
 
 
  </TabPane>
    <TabPane tab={<text className="setstyle-tab">แก้ไขโปรไฟล์</text>} key="2">
      แก้ไข-ชื่อบัญชีผู้ใช้งาน
    <Input placeholder="Rizhmanz" allowClear onChange={onChange} />
    Description
    <TextArea
          placeholder="ไม่มี"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />

        แก้ไขรูปโปรไฟล์
        <div></div>
     <div > 
     
     </div>




    </TabPane>
    <TabPane tab={<text className="setstyle-tab">ตั้งค่าบัญชีผู้ใช้</text>} key="3">
      Content of Tab Pane 3
    </TabPane>
    
  </Tabs>

         </div>
       </div>
      </div>
    </div>
  );
}

export default profile;
