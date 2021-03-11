import React, { useState } from "react";
import "./ModePage.css";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
function ModePage(props) {
  const [idd,setidd] = useState('')
const[passID,SetpassID] = useState(idd);
const history =useHistory()
const routeChange = () =>{ 
    let path = `Showkratu`; 
    history.push(path);
  }
  
  // extension in a user
  
 
  const listmodeitems = [
    {
      value: "กีฬา",
      icons: (
        <img className="icons-M-MP" src="./IMGmodepng/sports.png" alt=""></img>
      ),
      
      sumpost:50,
      description:  'เป็นต้นมา PUBG ได้ทำให้เกิดเกมแนวใหม่ที่ทั้งเกมเมอร์และตลาดEsports ต่างเปิดรับเข้ามาอย่างเต็มใจทั้งยังเป็นความสดใหม่ของโลกเกมเมอ'
    },
    {
      value: "ครอบครัว",
      icons: (
        <img className="icons-M-MP" src="./IMGmodepng/family.png" alt=""></img>
      ),
      sumpost:112,
      description:  'เป็นต้นมา ครอบครัว ได้ทำให้เกิดเกมแนวใหม่ที่ทั้งเกมเมอร์และตลาดEsports ต่างเปิดรับเข้ามาอย่างเต็มใจทั้งยังเป็นความสดใหม่ของโลกเกมเมอ'
    },
    {
      value: "ความรัก",
      icons: (
        <img className="icons-M-MP" src="./IMGmodepng/love.png" alt=""></img>
      ),
      sumpost:30,
      description:  'เป็นต้นมา ความรัก ได้ทำให้เกิดเกมแนวใหม่ที่ทั้งเกมเมอร์และตลาดEsports ต่างเปิดรับเข้ามาอย่างเต็มใจทั้งยังเป็นความสดใหม่ของโลกเกมเมอ'
     },
    // {
    //   value: "งาน",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/work.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "เพลง",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/music.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "ภาพยนตร์",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/movie.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "เกมส์",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/game.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "อาหาร",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/food.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "ธุรกิจ",
    //   icons: (
    //     <img
    //       className="icons-M-MP"
    //       src="./IMGmodepng/business.png"
    //       alt=""
    //     ></img>
    //   ),
    // },
    // {
    //   value: "บ้านเมือง",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/city.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "ซีรีย์",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/serie.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "รถยนต์",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/car.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "สุขภาพ",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/health.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "แฟชั่น",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/fashion.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "ท่องเที่ยว",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/airplan.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "กฎหมาย",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/law.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "เทคโนโลยี",
    //   icons: (
    //     <img
    //       className="icons-M-MP"
    //       src="./IMGmodepng/technology.png"
    //       alt=""
    //     ></img>
    //   ),
    // },
    // {
    //   value: "รีวิว",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/review.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "ความงาม",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/beauty.png" alt=""></img>
    //   ),
    // },
    // {
    //   value: "สัตว์เลี้ยง",
    //   icons: (
    //     <img className="icons-M-MP" src="./IMGmodepng/pet.png" alt=""></img>
    //   ),
    // },
  ];
  const datagame = [
    {
      id: 14477,
      picture: (<img className="sizepictureset" src="./IMGmodepng/dota2.jpg"></img>),
      Topic:
        "Dota 2 ขึ้นแท่นเกมที่มีผู้ชมเฝ้าติดตามอย่างเหนียวแน่นที่สุดในด้าน Esports Hoodwink ฮีโร่ลำดับที่ 120 ของ Dota 2 ได้อัปเดตเข้าสู่เกมแล้ว พร้อมแพทช์ 7.28 Mistwoods พร้อมการเปลี่ยนแปลงมากมายในเกม โดยคาดว่าจะเป็น Hero เพียงคนเดียวที่จะเข้าเกมในปีนี้",
      like: "20",
      profile: (
        <img className="picture-progile" src="./IMGmodepng/car.png"></img>
      ),
      name: "อลงกรณ์ ชุ่มชื่น",
      day: "10/20/11",
      comment: "51",
    },
    {
      id: 21145,

      picture: (
        <img className="sizepictureset" src="./IMGmodepng/pubg2.jpg"></img>
      ),
      Topic:
        "PUBG ขึ้นแท่นเกมที่มีผู้ชมเฝ้าติดตามอย่างเหนียวแน่นที่สุดในด้านเกม FPS",
      profile: <img className="picture-progile" src="./non.jpg"></img>,
      name: "อานนท์ รุ่งเรือง",
      day: "10/20/11",
      comment: "30",
      like: "1211",
    },
    {
      id: 32211,

      picture: (
        <img className="sizepictureset" src="./IMGmodepng/pubg3.jpg"></img>
      ),
      Topic:
        "PUBG ขึ้นแท่นเกมที่มีผู้ชมเฝ้าติดตามอย่างเหนียวแน่นที่สุดในด้านเกม FPS",
      profile: <img className="picture-progile" src="./non.jpg"></img>,
      name: "อานนท์ รุ่งเรือง",
      day: "10/20/11",
      comment: "30",
      like: "1211",
    },
  ];
const [namemode,Setnamemode] = useState('กีฬา')
const[description,SetDrescription] = useState( 'เป็นต้นมา PUBG ได้ทำให้เกิดเกมแนวใหม่ที่ทั้งเกมเมอร์และตลาดEsports ต่างเปิดรับเข้ามาอย่างเต็มใจทั้งยังเป็นความสดใหม่ของโลกเกมเมอ')
const[iconsmode,Seticonsmode] = useState(null)
const [sumpost,Setsum] = useState('50')
const [saveIndex,Setsaveindex] = useState()
 
  if(Seticonsmode == null) {
   return <img src="./IMGmodepng/game.png"></img>
 }
  

 const Clickmode = (a,b) => {
   Setsaveindex(a)
   Setnamemode(a.value)
   Seticonsmode(a.icons)
   Setsum(a.sumpost)
   SetDrescription(a.description)
  //  window.location.reload(false); code นีใช้ในการ Refreh หน้า
 }
 const Table1 = [
 {
   name:'กีฬา'
 },
 {
   name:'ครอบครัว'
 },
 {
   name:'ความรัก'
 }

 ];

  return (
    <div className="PageModeContainer">
      <div className="PageModeContent">
        <div className="box-show-mode">
 
              


          <div className="Box-Left">
           
            <div className="NameTexts">{namemode}</div>

            <div className="boxImageitems">
              {iconsmode}
            </div>
          </div>
          <div className="Box-Right">
            <div className="NumberALLmode">
              <div>จำนวนกระทู้ทั้งหมด</div>
              <div className="numberBox-right">{sumpost}</div>
              <div>กระทู้</div>
            </div>
            <div className="meantext">
              {description}
            </div>
            

          </div>

          


        </div>
        <div className="Select-Mode-Dropdown">
          <div className="Bar-selection" >
            เลือกหมวดหมู่
            <img className="setsortIMG" src="./IMGmodepng/sort2.png"></img>{" "}
          </div>

         
             

           
              <div className="SelectionCtn">
                <div className="set-wrap-selec">
                  {listmodeitems &&
                    listmodeitems.map((item, Index) => (
                      <div className="box-mode-text" onClick={() =>Clickmode(item,Index)} >
                        <div className="setsizeiconsmode">{item.icons}</div>
                        <div className="Name-mode-text">{item.value}</div>
                      </div>
                    ))}
                </div>
                <div className="tab-footer"></div>
              </div>
            
          
        </div>
        <div className="postshowlistfollowmode">
          <div className="headmodelist-text">หมวดหมู่-เกมส์</div>
          {/* map */}
          {datagame &&
            datagame.map((item, index) => (
              <div className="itemlistAll-container" idd={item.id}    onClick={()=>routeChange(passID)} >
                <div className="zonepicture" >{item.picture}</div>
                <div className="zonecontent">
                  <div className="Text-content">{item.Topic}</div>
                </div>
              </div>
            ))}
          {/* map */}
        </div>
      </div>
    </div>
  );
}

export default ModePage;
