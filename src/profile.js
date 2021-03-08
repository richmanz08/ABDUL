import React, { useState } from "react";
import "./profile.css";
import { Tabs, Input } from "antd";
import { Select } from "antd";

function Profile() {
  const { Option } = Select;
  const { TabPane } = Tabs;
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log(e);
  };
  function callback(key) {
    console.log(key);
  }
  function handleChange(value) {
    console.log(value);
  }

  const Template = [
    {
      TemplateID: 1155,
      value: "กรอบรูปที่ 31",
      templatitems: <img className="tem" src="./IMGprofile/tem1.jpg" />,
    },
    {
      TemplateID: 1156,
      value: "กรอบรูปที่ 21",
      templatitems: <img className="tem" src="./IMGprofile/tem1.jpg" />,
    },
    {
      TemplateID: 1157,
      value: "กรอบรูปที่ 20",
      templatitems: <img className="tem" src="./IMGprofile/tem1.jpg" />,
    },
    {
      TemplateID: 1158,
      value: "กรอบรูปที่ 19",
      templatitems: <img className="tem" src="./IMGprofile/tem1.jpg" />,
    },
  ];

  return (
    <div className="profileCTN">
      <div className="Box-profile">
        <div className="column-left-Profile">
          <div className="style-box-shadow">
            <div className="set-Template">
              <img className="item-template" src="./IMGprofile/tem1.jpg"></img>
              <img className="set-IMGprofile" src="./IMGprofile/user.jpg"></img>
            </div>
            <text className="usernametext">Richmanz</text>
            <text>You hace a starpoint </text>
            <div className="G-star">
              <img className="star" src="./IMGprofile/star.png"></img>
              <text className="pcs-star">5</text>
            </div>
            <div className="style-tab"></div>
          </div>
        </div>

        <div className="column-Right-Profile">
          <div className="Background-Image-Header">
            <img className="Topimage-BG" src="./IMGprofile/bg1.jpg"></img>
            <text className="text-myprofile">
              <text className="tm1">My Profile</text>
              <div className="Tab-tm1-bar">Tell me What you want ?</div>
            </text>
          </div>
          {/* Bog tap components */}
          <div className="tab-container">
            <Tabs onChange={callback} type="card">
              <TabPane
                tab={<text className="setstyle-tab">โปรไฟล์</text>}
                key="1"
              >
                <div className="ProfileResult-container">
                  <text className="fontstyle-results">ชื่อบัญชีผู้ใช้งาน</text>
                  <text className="this-is">Richmanz </text>
                  <text className="fontstyle-results">อีเมล</text>
                  <text className="this-is">rizhmanz2018</text>

                  <text className="fontstyle-results">รหัสผ่าน</text>
                  <text className="this-is">0112456</text>
                  <text className="fontstyle-results">เบอร์โทรศัพท์</text>
                  <text className="this-is">0984437173</text>
                </div>
                <div className="box-warning-results">
                  <text>
                    ท่านสามารถแก้ไขบัญชีผู้ใช้ของท่านได้ โหมดของการ
                    "แก้ไขโปรไฟล์"
                    แต่ท่านจะไม่สามารถแก้ไขเบอร์โทรศัพท์ที่ได้ทำการยืนยันไว้แล้วได้
                  </text>
                </div>
              </TabPane>
              <TabPane
                tab={<text className="setstyle-tab">แก้ไขโปรไฟล์</text>}
                key="2"
              >
                แก้ไข-ชื่อบัญชีผู้ใช้งาน
                <Input placeholder="Rizhmanz" allowClear onChange={onChange} />
                Description
                <TextArea
                  placeholder="ไม่มี"
                  autoSize={{ minRows: 2, maxRows: 6 }}
                />
                <div className="TP-CTN">
                  <div className="c1">
                    <Select
                      className="SelectContainer"
                      size="middle"
                      style={{ width: 200, fontFamily: "kanit" }}
                      labelInValue
                      defaultValue={{
                        value: (
                          <div style={{ fontFamily: "kanit" }}>
                            กรอบรูปที่ 21
                          </div>
                        ),
                      }}
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      {Template &&
                        Template.map((item, index) => (
                          <Option
                            value={item.value}
                            style={{ fontFamily: "kanit" }}
                          >
                            {item.value}
                          </Option>
                        ))}
                    </Select>
                  </div>
                  <div className="c2">
                    <text>รูปตัวอย่างของกรอบโปรไฟล์</text>
                    <div className="ShowTemplatFollowUS">
                      <div className="FollowusItem-picture"></div>
                    </div>
                   {/* <button></button> */}
                  </div>
                </div>
              </TabPane>
              <TabPane
                tab={<text className="setstyle-tab">ตั้งค่าบัญชีผู้ใช้</text>}
                key="3"
              >
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
