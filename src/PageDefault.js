import React, { useState } from "react";
import "./PageDefault.css";
import { Link } from "react-router-dom";
function PageDefault() {
  const [itemdot, setDot] = useState(false);
  const showDot = () => setDot(!itemdot);
  const dotitems = [
    { title: "รายงานกระทู้นี้" },
    {
      title: "ดูนามบัตรเจ้าของกระทู้",
    },
    { title: "ดูไปรไฟล์" },
  ];
  const Modeitems = [
    {
      nameMode: "กีฬา",
      icons: (
        <img className="icons-M" src="./IMGmodepng/sports.png" alt=""></img>
      ),
    },
    {
      nameMode: "ครอบครัว",
      icons: (
        <img className="icons-M" src="./IMGmodepng/family.png" alt=""></img>
      ),
    },
    {
      nameMode: "ความรัก",
      icons: <img className="icons-M" src="./IMGmodepng/love.png" alt=""></img>,
    },
    {
      nameMode: "งาน",
      icons: <img className="icons-M" src="./IMGmodepng/work.png" alt=""></img>,
    },
    {
      nameMode: "เพลง",
      icons: (
        <img className="icons-M" src="./IMGmodepng/music.png" alt=""></img>
      ),
    },
    {
      nameMode: "ภาพยนตร์",
      icons: (
        <img className="icons-M" src="./IMGmodepng/movie.png" alt=""></img>
      ),
    },
    {
      nameMode: "เกมส์",
      icons: <img className="icons-M" src="./IMGmodepng/game.png" alt=""></img>,
    },
    {
      nameMode: "อาหาร",
      icons: <img className="icons-M" src="./IMGmodepng/food.png" alt=""></img>,
    },
  ];
  return (
    <div className="PageDefaultCTN">
      <div className="ContainerPDF">
        <div className="PictureSlide-Container">

          <div className="slideshow-item">
            <img className="PictureSet" src="./IMGpageDF/snow.jpg" alt=""></img>
           <div className="slide-show-item-Text-1">
              <text className="T1-face">Welcome to website ! </text>
              <li className="T2-face">บอกถึงปัญหาของของคุณ ให้ผู้อื่นรับรู้และได้ช่วยคุณแก้ไขมัน </li>
              <li className="T2-face">สามารถ ลบ/แก้ไข โพสต์ของคุณได้</li>
              <li className="T2-face">กรุณาเคารพความคิดเห็นของผู้อื่น </li>
            </div>
            <div className="slide-show-item-Text-2">
              
            </div>
          </div>
         
        </div>
        <div className="CTN-USER-AND-MODE">
          <div className="bar-news-item-css">กระทู้ยอดฮิต 5 อันดับ</div>
          <div className="Top5-cantainer"></div>
          <div className="bar-New-post-css">ใหม่ล่าสุด</div>
          <div className="Newpost-cantainer"></div>
          <div className="bar-activity-css">กิจกรรม</div>
          <div className="Activity-cantainer"></div>
        </div>
      </div>
    </div>
  );
}

export default PageDefault;
