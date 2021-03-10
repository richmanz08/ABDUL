import React, { Component, useState } from "react";
import ModePage from "./ModePage";
import "./ShowKratu.css";
function ShowKratuScreen({ passID }) {
  // const ChoseID = id;
  //   if(ChoseID==DATATABLEkt[id]){
  //     return (
  //       <div>{id}</div>
  //     )
  //   }
  const [id, saveID] = useState(passID);
  const DATATABLEkt = [
    { id: 14477, title: "ข้อมูลชุดที่ 1" },
    { id: 21145, title: "ข้อมูลชุดที่ 2" },
    { id: 32211, title: "ข้อมูลชุดที่ 3" },
  ];
  return (
    <div className="Layout">
      {/* {DATATABLEkt && DATATABLEkt.map((item,index)=>(
        <div style={{fontSize:50}}>
        <text> {item.id}</text>
        <text> {item.title}</text>
      </div>))  }    */}
      <div className="Content-align">
        <div className="BacktopBG-container">
          <img className="SetBGWHITE" src="./IMGshow/bg1.jpeg"></img>
        </div>
        <div className="Topic-and-picture-contenner">
          <div className="Left-pic-controll">
            <div className="Box-import-pic">
              <img className="imagemain" src="./IMGshow/food.jpg"></img>
            </div>
          </div>
          <div className="Right-pic-controll">
            <text className="S-topic">ผู้โพสต์</text>
            <text className="S-set">@arnon ruengrueang</text>
            <text className="S-topic">วันที่โพสต์</text>
            <text className="S-set">10/30/21</text>
            <text className="S-topic">หมวดหมู่</text>
            <div className="Css-BTN-mode">อาหาร</div>
            <text className="topic-style">อาหารรสเลิศระดับภัตาคารที่หารับประทานไม่ได้ง่ายๆ แนะนำร้านนี้เลยครับ พิกัดแถว งามวงวาร มาหาทานกันได้เลย ราคาไม่แพง แถมเครื่องเคียงแรงมากนะขอบอกเลย</text>
          </div>
        </div>
        <div className="Body-detail-container">
          <div className="linespace-S"></div>
          <text className="Description-text">ขั้นตอนแรกทำเห็ดดุ๊กเซลล์ไว้ก่อน หั่นเห็ด หอมแดง กระเทียมแล้วนำเข้าเครื่องปั่นเทน้ำมันมะกอกลงไปด้วยให้ปั่นง่ายขึ้น ปั่นพอให้ละเอียดแล้วเทใส่กะทะ
          ใส่ใบไทม์รูดเอาแต่ใบ(ถ้าไม่มีสดใช้แห้งได้)ใส่เนยลงผัดกับเห็ดบดไฟกลาง เห็ดจะคายน้ำออกให้ผัดจนน้ำแห้งเติมเกลือ พริกไทยให้ได้รสชาติพอดีแล้วพักรอไว้นำเนื้อสันในทั้งชิ้นที่เป็นท่อนมาทาด้วยเกลือพริกไทยให้ทั่วแล้วนำไปนาบกับกะทะ ใส่เนยนิดหน่อยกับใบไทม์สด2ก้านเพิ่มความหอม นาบแค่พอให้ผิวด้านนอกเปลี่ยนสีให้ทั่วทั้งชิ้น เอาวางพักไว้ ทามัสตาร์ดให้ทั่วทั้งชิ้นเนื้อรอไว้ วางแผ่นแรปพลาสติกก่อนแล้วนำแฮมมาวางเรียงเท่าความยาวของเนื้อ ทาด้วยเห็ดดุ๊กเซลล์ครึ่งนึงก่อนให้ทั่วแล้ววางชิ้นเนื้อลง ทาทับด้วยเห็ดที่เหลือปิดทับให้ทั่วเนื้อแล้วนำแฮมมาคลุมทับแล้วค่อยๆม้วนด้วยพลาสติกแรปให้พอแน่น ม้วนพันหัวท้ายไว้แล้วนำเข้าแช่เย็นไว้ก่อน30นาที ถ้าใช้แป้งพัฟสำเร็จแช่แข็งให้เอามาไว้ตู้เย็นธรรมดาก่อน3-4ชั่วโมงนะคะ ตัดแผ่นแป้งให้พอดีที่จะพันเนื้อ โรยแป้งนวลก่อนกันติด วางเนื้อไว้ตรงกลาง ทาด้วยไข่รอบๆแป้งแล้วม้วนพันให้ปิดชิ้นเนื้อให้มิด รึอยากทำแบบตาข่ายให้ตัดแป้งพัฟเป็นเส้นแล้วเรียงสานสลับกันให้เป็นตาข่ายทับด้านบนอีกที เปิดวอล์มเตาอบไว้ก่อนใช้ไฟ200 ทาไข่ให้ทั่วแป้งพัฟแล้วใช้มีดกรีดหน้าแป้งเบาๆอย่าให้ขาดถึงเนื้อถ้าทำตาข่ายด้านบนไม่ต้องกรีดค่ะ เข้าอบประมาณ30นาที(แล้วแต่เตาอบของแต่ละคนนะ) แป้งพัฟดูสุกแล้วนำออกมาวางพักไว้ก่อน5–10นาทีก่อนตัด เนื้อที่ได้จะต้องมีสีชมพูต้องไม่สุกเกินไปเนื้อจะด้านไม่นุ่มและไม่อร่อยค่ะ เสริฟพร้อมผักอบตามชอบ
          </text>
        </div>
        <div className="Comment-container">
          <div className="Button-zone">
            <div className="bt-star">
              <img className="star-click" src="./IMGshow/star.png"></img>
              <text className="All-star">25</text>
            </div>
            <div className="Count-Comment">
               <text>ความคิดเห็นทั้งหมด</text>
               <text>20</text>
               <text>รายการ</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowKratuScreen;
