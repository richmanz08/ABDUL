import React, { useState, Component } from "react";
import "./create.css";
import "antd/dist/antd.css";
import { Input, Select } from "antd";
import FolderIcon from "./assets/uploadimg.png";
import CloseIcon from "./assets/close.png";
import { Button, notification, Space } from 'antd';
function CreateScreens() {
  const { Option } = Select;
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  const openNotificationWithIcon = type => {
    notification[type]({
      message: <div style={{fontFamily:'kanit',color:"#006600"}}>แจ้งเตือน</div> ,
      description:<div style={{fontFamily:'kanit',color:'#333'}}>
        ระบบได้ทำการโพสต์กระทู้ของคุณเป็นที่เรียบร้อยแล้วสามารถตรวจสอบได้ที่ 'จัดการกระทู้'</div>
    });
    
  };
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }
  const { TextArea } = Input;
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div className="Layout-container-create">
      <div className="Center-containner-CreateScreens">
        <div className="Add-picture-container">
          <div className="Layout-img">
            <div className="Container-img">
              <div className="UYM-Set">Upload your image</div>
              <div className="show-mini-text">แสดงภาพตัวอย่าง </div>

              <div className="BoxUpload">
                <div className="image-upload">
                  {!isUploaded ? (
                    <>
                      <label htmlFor="upload-input">
                        <img
                          src={FolderIcon}
                          draggable={"false"}
                          alt="placeholder"
                          style={{ width: 100, height: 100 }}
                        />
                        <p style={{ color: "#444" }}>Click to upload image</p>
                      </label>
                      <div className="ss">
                        <input
                          id="upload-input"
                          size="small"
                          type="file"
                          accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                          onChange={handleImageChange}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="ImagePreview">
                      <img
                        className="close-icon"
                        src={CloseIcon}
                        alt="CloseIcon"
                        onClick={() => {
                          setIsUploaded(false);
                          setImage(null);
                        }}
                      />
                      {typeFile.includes("video") ? (
                        <video
                          id="uploaded-image"
                          src={image}
                          draggable={false}
                          controls
                          autoPlay
                          alt="uploaded-img"
                        />
                      ) : (
                        <img
                          id="uploaded-image"
                          src={image}
                          draggable={false}
                          alt="uploaded-img"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {isUploaded ? (
                <div className="type-name">ชนิดของรูปภาพนี้คือ {typeFile}</div>
              ) : null}

              <div className="type-name2">ชนิดของรูปภาพที่รองรับ</div>
              <div
                className="normal-text"
                // href="https://github.com/kingaspx/ImagePreview-React"
                rel="noreferrer"
                target={"_blank"}
                style={{ marginTop: -10 }}
              ></div>

              <h3>JPG,PNG,GIF</h3>
            </div>
          </div>
          <div className="subcontainer-selectedmode">
            <div className="zone-selected">
              <text className="please-select-text">กรุณาเลือกหมวดหมู่</text>
              <Select
                className="font-style-select"
                size="large"
                showSearch
                style={{ width: 200 }}
                placeholder="เลือก"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option
                  className="op-setfont"
                  style={{ fontFamily: "kanit" }}
                  value="jack"
                >
                  เกมส์
                </Option>
                <Option
                  className="op-setfont"
                  style={{ fontFamily: "kanit" }}
                  value="lucy"
                >
                  ครอบครัว
                </Option>
                <Option
                  className="op-setfont"
                  style={{ fontFamily: "kanit" }}
                  value="tom"
                >
                  ภาพยนตร์
                </Option>
              </Select>
              <text className="settext-Warning">
                ***คำแนะนำ -
                ควรเลือกให้ตรงกับเนื้อหาของท่านเพื่อความเหมาะสมและความถูกต้อง***
              </text>
              <div className="tag-content">#ภาพยนตร์</div>
              <div className="TextBox-Topic">
                <h3>เพิ่มหัวข้อ</h3>
                <TextArea
                  rows={4}
                  style={{ padding: 10, fontFamily: "kanit" }}
                  size="small"
                  placeholder="บอกให้ผู้คนรับรู้ถึงเรื่องที่คุณอยากจะบอก"
                  maxlength="150"
                />
                <text className="h4set">จัดกัดอยู่ที่ 150 ตัวอักษร</text>
              </div>
            </div>
          </div>
        </div>
        <div className="body-Container">
          <div className="bar-css "></div>
          <div className="setcolumn1-2">
          <div className="column-1">
            <div className="TextBox">
              <h3>เพิ่มเนื้อหา</h3>
              <TextArea
                rows={4}
                style={{ marginBottom: 2 }}
                size="large"
                placeholder="พิมพ์เนื้อหาของคุณตรงนี้ ความยาวเนื้อหาของท่านต้องไม่เกิน 1500 ตัวอักษร"
                maxlength="1500"
              />
            </div><button className="Style-button-accept" onClick={() => openNotificationWithIcon('success')}>ตกลง</button>
          </div> 
          <div className="column-2">
           <div className="box-tip">
             <text>คำแนะนการใช้งานเบื้องต้น</text>
             <text>1. คุณสามารถอัปโหลดรูปภาพจากคอมพิวเตอร์ของคุณได้ หรือเลือกที่จะไม่อัปโหลดก็ได้</text>
             <text>2. ท่านจำเป็นต้องเลือก 1 หมวดหมู่ และกรอกข้อมูลในส่วนอื่นๆให้ถูกต้อง</text>
             <text>3. กรุตรวจสอบข้อมูลให้ถูกต้องก่อนทำการโพสต์ </text>
             <text>4. แอดมินมีสิทธิในการกระทำเกี่ยวกับโพสต์นั้นๆ ถ้าหากตรวจสอบพบว่าเป็นโพสต์ที่ไม่เหมาะสม</text>
           </div>
          </div></div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default CreateScreens;
