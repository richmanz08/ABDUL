import React, { Component, useState } from "react";
import ModePage from "./ModePage";
import "./ShowKratu.css";
import { Input } from "antd";
import { Button, notification, Space } from 'antd';
import id from '../src/components/BlogList'; 
function ShowKratuScreen(props) {
  
  
  
  
  const [newTerm, SetTerm] = useState(props.location.state);

  const maxindex = () => {
    setEnd(end + 2);
  };
  const [start, setStart] = useState("0");
  const [end, setEnd] = useState(4);
  const openNotificationWithIcon1 = type => {
    notification[type]({
      message: <div style={{fontFamily:'kanit'}}>กดให้ดาวเรียบร้อย</div>,
      // description:
      //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  const openNotificationWithIcon2 = type => {
    notification[type]({
      message: <div style={{fontFamily:'kanit'}}>ยกเลิกแล้ว</div>,
      // description:
      //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

const mixfunction1 =() =>{
  setNowstar(nowstar+1);
  openNotificationWithIcon1('success')
}
const mixfunction2 =() =>{
  setNowstar(nowstar-1);
  openNotificationWithIcon2('error')
}

  const [nowstar,setNowstar] = useState(30);
  
  const [countstar,Setcountstar] = useState(false)
  const Sethookstar =() =>{
 Setcountstar(!countstar)
 fuctionCount()
    }
 
    const fuctionCount = () =>{
      if (countstar == false) {
        return mixfunction1()
        
      }
      if (countstar == true) {
        return mixfunction2()
      }
    }

  const { TextArea } = Input;
  const [comment, Setcomment] = useState(false);
  const ShowComment = () => Setcomment(!comment);
  const [who, Setwho] = useState();
  const [sticker, Setsticker] = useState(false);
  const ShowpickSticker = (data) => {
    Setsticker(true);
    Setwho(data);
  };
  const Deletechose = () => {
    Setsticker(false);
  };

  
  const DATATABLEkt = [
    { id: 14477, title: "ข้อมูลชุดที่ 1" },
    { id: 21145, title: "ข้อมูลชุดที่ 2" },
    { id: 32211, title: "ข้อมูลชุดที่ 3" },
  ];

  const commentlistAll = [
    {
      name: "คุณอาริษา อยู่ยง",
      comment: "น่ากินจังเลยค่ะ",
      sticker: (
        <img className="controlIMG" src="./IMGinventory/sticker.png"></img>
      ),
      profilepicture: (
        <img className="Controlprofile" src="./IMGprofile/user.jpg"></img>
      ),
    },
    {
      name: "คุณอานนท์ รุ่งเรือง",
      comment:
        "เดวไปหารับประทานนะค่ะ เร็วๆนี้ แล้วนำเข้าเครื่องปั่นเทน้ำมันมะกอกลงไปด้วยให้ปั่นง่ายขึ้น ปั่นพอให้ละเอียดแล้วเทใส่กะทะ ใส่ใบไทม์รูดเอาแต่ใบ(ถ้าไม่มีสดใช้แห้งได้)ใส่เนยลงผัดกับเห็ดบดไฟกลาง เห็ดจะคายน้ำออกให้ผัดจนน้ำแห้งเติมเกลือ พริกไทยให้ได้รสชาติพอดีแล้วพักรอไว้นำเนื้อสันในทั้งชิ้นที่เป็นท่อนมาทาด้วยเกลือพริกไทยให้ทั่วแล้วนำไปนาบกับกะทะ ใส่เนยนิดหน่อยกับใบไทม์สด2ก้านเพิ่มความหอม นาบแค่พอให้ผิวด้านนอกเปลี่ยนสีให้ทั่วทั้งชิ้น เอาวางพักไว้ ทามัสตาร์ดให้ทั่วทั้งชิ้นเนื้อรอไว้ วางแผ่นแรปพลาสติกก่อนแล้วนำแฮมมาวางเรียงเท่าความยาวของเนื้อ ทาด้วยเห็ดดุ๊กเซลล์ครึ่งนึงก่อนให้ทั่วแล้ววางชิ้นเนื้อลง ทา",
      sticker: (
        <img className="controlIMG" src="./IMGinventory/sticker1.png"></img>
      ),
      profilepicture: (
        <img className="Controlprofile" src="./IMGprofile/user.jpg"></img>
      ),
    },
    {
      name: "คุณพิชชาภา ยงยุทธ",
      comment: "น่ากินจังเลยค่ะ",
      sticker: (
        <img className="controlIMG" src="./IMGinventory/sticker4.png"></img>
      ),
      profilepicture: (
        <img className="Controlprofile" src="./IMGprofile/user.jpg"></img>
      ),
    },
    {
      name: "คุณไร้รนาม",
      comment: "น่ากินจังเลยค่ะ",
      sticker: (
        <img className="controlIMG" src="./IMGinventory/sticker2.png"></img>
      ),
      profilepicture: (
        <img className="Controlprofile" src="./IMGprofile/user.jpg"></img>
      ),
    },
    {
      name: "คุณอาหหหหห",
      comment: "น่ากินจังเลยค่ะ",
      sticker: (
        <img className="controlIMG" src="./IMGinventory/sticker3.png"></img>
      ),
      profilepicture: (
        <img className="Controlprofile" src="./IMGprofile/user.jpg"></img>
      ),
    },
  ];

  const choseStickerTest = [
    {
      id: 20,
      sticker: (
        <img
          className="SetsizeFollowSticker"
          src="./IMGinventory/sticker2.png"
        ></img>
      ),
    },
    {
      id: 20,
      sticker: (
        <img
          className="SetsizeFollowSticker"
          src="./IMGinventory/sticker1.png"
        ></img>
      ),
    }
    
  ];
  const TablePost = [
    {
      name: "Yamika aliso",
      date: "10/30/21",
      mode: "อาหาร",
      topic:
        "อาหารรสเลิศระดับภัตาคารที่หารับประทานไม่ได้ง่ายๆ แนะนำร้านนี้เลยครับ พิกัดแถว งามวงวาร มาหาทานกันได้เลย ราคาไม่แพง แถมเครื่องเคียงแรงมากนะขอบอกเลย",
      DesCription:
        "ขั้นตอนแรกทำเห็ดดุ๊กเซลล์ไว้ก่อน หั่นเห็ด หอมแดง กระเทียมแล้วนำเข้าเครื่องปั่นเทน้ำมันมะกอกลงไปด้วยให้ปั่นง่ายขึ้น ปั่นพอให้ละเอียดแล้วเทใส่กะทะใส่ใบไทม์รูดเอาแต่ใบถ้าไม่มีสดใช้แห้งได้ใส่เนยลงผัดกับเห็ดบดไฟกลาง เห็ดจะคายน้ำออกให้ผัดจนน้ำแห้งเติมเกลือ พริกไทยให้ได้รสชาติพอดีแล้วพักรอไว้นำเนื้อสันในทั้งชิ้นที่เป็นท่อนมาทาด้วยเกลือพริกไทยให้ทั่วแล้วนำไปนาบกับกะทะ ใส่เนยนิดหน่อยกับใบไทม์สด2ก้านเพิ่มความหอม นาบแค่พอให้ผิวด้านนอกเปลี่ยนสีให้ทั่วทั้งชิ้น เอาวางพักไว้ ทามัสตาร์ดให้ทั่วทั้งชิ้นเนื้อรอไว้ วางแผ่นแรปพลาสติกก่อนแล้วนำแฮมมาวางเรียงเท่าความยาวของเนื้อ ทาด้วยเห็ดดุ๊กเซลล์ครึ่งนึงก่อนให้ทั่วแล้ววางชิ้นเนื้อลง ทาทับด้วยเห็ดที่เหลือปิดทับให้ทั่วเนื้อแล้วนำแฮมมาคลุมทับแล้วค่อยๆม้วนด้วยพลาสติกแรปให้พอแน่น ม้วนพันหัวท้ายไว้แล้วนำเข้าแช่เย็นไว้ก่อน30นาที ถ้าใช้แป้งพัฟสำเร็จแช่แข็งให้เอามาไว้ตู้เย็นธรรมดาก่อน3-4ชั่วโมงนะคะ ตัดแผ่นแป้งให้พอดีที่จะพันเนื้อ โรยแป้งนวลก่อนกันติด วางเนื้อไว้ตรงกลาง ทาด้วยไข่รอบๆแป้งแล้วม้วนพันให้ปิดชิ้นเนื้อให้มิด รึอยากทำแบบตาข่ายให้ตัดแป้งพัฟเป็นเส้นแล้วเรียงสานสลับกันให้เป็นตาข่ายทับด้านบนอีกที เปิดวอล์มเตาอบไว้ก่อนใช้ไฟ200 ทาไข่ให้ทั่วแป้งพัฟแล้วใช้มีดกรีดหน้าแป้งเบาๆอย่าให้ขาดถึงเนื้อถ้าทำตาข่ายด้านบนไม่ต้องกรีดค่ะ เข้าอบประมาณ30นาที(แล้วแต่เตาอบของแต่ละคนนะ) แป้งพัฟดูสุกแล้วนำออกมาวางพักไว้ก่อน5–10นาทีก่อนตัด เนื้อที่ได้จะต้องมีสีชมพูต้องไม่สุกเกินไปเนื้อจะด้านไม่นุ่มและไม่อร่อยค่ะ เสริฟพร้อมผักอบตามชอบ",
      star: 30,
      commentSum: 60,
    },
  ];
  const TableRow = ({ data }) => (
    <div className="GroupBox-cc">
                   
                    <div className="itemCCZ">
                      {data.comment}
                      <div className="setStcikerCC">{data.sticker}</div>
                    </div>
                    <div className="Whoisthis">
                      <div className="setitemprofile">
                        {data.profilepicture}
                      </div>
                      {data.name}
                    </div>
                  </div>
  );
  return (
    <div className="Layout"><div>{newTerm.blogs}</div>
      <div className="Content-align">
        <div className="BacktopBG-container">
          <img className="SetBGWHITE" src="./IMGshow/studybg.jpeg"></img>
        </div>
        {TablePost &&
          TablePost.map((item, index) => (
            <div>
              <div className="Topic-and-picture-contenner">
                <div className="Left-pic-controll">
                  <div className="Box-import-pic">
                    <img className="imagemain" src="./IMGshow/food.jpg"></img>
                  </div>
                </div>
                <div className="Right-pic-controll">
                  
                  <text className="S-topic">ผู้โพสต์</text>
                  <text className="S-set">{item.name}</text>
                  <text className="S-topic">วันที่โพสต์</text>
                  <text className="S-set">{item.date}</text>
                  <text className="S-topic">หมวดหมู่</text>
                  <div className="Css-BTN-mode">{item.mode}</div>
                  <text className="topic-style">{item.topic}</text>
                </div>
              </div>
              <div className="Body-detail-container">
                <div className="linespace-S"></div>
                <text className="Description-text">{item.DesCription}</text>
              </div>
              <div className="Button-zone">
                <div className="bt-star">
                  <img
                    className="star-click"
                    src="./IMGshow/star.png"
                    onClick={() => Sethookstar(item.star)}
                  ></img>
                  <text className="All-star">{nowstar}</text>
                </div>
                <div className="Count-Comment">
                  <text className="cc1">ความคิดเห็นทั้งหมด</text>
                  <text className="cc2">{item.commentSum}</text>
                  <text className="cc3">รายการ</text>
                </div>
              </div>
            </div>
          ))}
          <div className="linespace-S"></div>
        <div className="Comment-container">
          <div className="LLISTCOMMENT">
            <text className="headerlistcommett">
              รายการแสดงความคิดเห็นทั้งหมด
            </text>
            <div className="Box-comment-list">
            {commentlistAll &&
            commentlistAll.reduce((item, index, i) => {
              if (i >= start && i <= end) {
                const row = <TableRow key={i} data={index} />;
                item.push(row);
              }
              return item;
            }, [])}
              
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="setIconsShow"
          src="./IMGshow/chat.png"
          onClick={() => ShowComment()}
        ></img>
        <div className={comment ? "CommentContainer" : "displayComment"}>
          <div className="setitemment">
            <div className="Topicthink">แสดงความคิดเห็นของคุณ</div>
            <div className="Text1125">เนื้อหา</div>
            <TextArea
              className="setTeaxtArea-comment"
              rows={4}
              style={{
                padding: 10,
                fontFamily: "kanit",
                width: 320,
                height: 300,
              }}
              placeholder="บอกให้ผู้คนรับรู้ถึงเรื่องที่คุณอยากจะบอก"
              maxlength="150"
            />
            <div className="Text1125-1">เพิ่มสติ๊กเกอร์</div>
            <div className="ChoseStickercontainer">
              {choseStickerTest &&
                choseStickerTest.map((item, index) => (
                  <div classname="YOUchose">
                    <div
                      className="stickerItem-chose"
                      onClick={() => ShowpickSticker(index)}
                    >
                      {item.sticker}
                    </div>
                    <div
                      className={
                        sticker && who == index ? "pickcss" : "pickdisplay"
                      }
                    >
                      เลือกแล้ว
                    </div>
                  </div>
                ))}
            </div>
            <div className="DontChose" onClick={() => Deletechose()}>
              ไม่เลือก
            </div>
            <button className="accept-post">ตกลง</button>
          </div>
        </div>
      </div>
      <div className="footer-show">
       <button className="Btn-showmore-show" onClick={() => maxindex()}>แสดงเพิ่มเติม</button>
      </div>
    </div>
  );
}
export default ShowKratuScreen;
