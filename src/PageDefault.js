import React, { useState } from "react";
import "./PageDefault.css";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { render } from "@testing-library/react";
function PageDefault() {
  const DataTest = [
    {
      id: 10,
      topic:
        "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง11111 กินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้ กินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
      mode: "อาหาร",
      star: 40,
      date: "10/2/13",
      name: "Arnonruengrueang",
    },
    {
      id: 11,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง222222",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
      mode: "อาหาร",
      star: 40,
      date: "10/2/13",
      name: "Arnonruengrueang",
    },
    {
      id: 12,
      topic:
        "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง333333333",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
      mode: "อาหาร",
      star: 40,
      date: "10/2/13",
      name: "Arngrueang",
    },
    {
      id: 13,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง44444",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
      mode: "อาหาร",
      star: 40,
    },
    {
      id: 14,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง5555555",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
    },
    {
      id: 15,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง6666666",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
    },
    {
      id: 16,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง777777",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
    },
    {
      id: 17,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง888888",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
    },
    {
      id: 18,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง99999",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
    },
    {
      id: 19,
      topic: "อาหารชนิดนี้น่ากินจังเลยค้าบไปหามาจากไหนน้าเอามาแบ่งบ้าง1000000",
      picture: (
        <img
          style={{ width: "100%", height: "100%" }}
          src="./IMGpageDF/FoodC.jpeg"
        ></img>
      ),
    },
  ];
  const maxindex = () => {
    setEnd(end + 2);
  };
  const [start, setStart] = useState("0");
  const [end, setEnd] = useState(2);

  const Top4 = [
    {
      picture: "./IMGpageDF/top41.jpg",
      mode: "กีฬา",
      topic: "เมสซี่กำลังที่จะย้ายทีมไหน ทีมไหนเตรียมคว้าตัวเมสซี่",
    },
    {
      picture: "./IMGpageDF/top42.jpg",
      mode: "ภาพยนตร์",
      topic: "กำลังจะเข้าโรงในวันที่ 24 มีนาคนนี้ แล้วพบกันในโรงภาพยนตร์",
    },
    {
      picture: "./IMGpageDF/top43.jpg",
      mode: "เพลง",
      topic: "พบกับซิงเกิ้ลใหม่ของ อตอม ชนกัณต์ ได้แล้วที่ joox music"
    },
    {
      picture: "./IMGpageDF/top44.jpg",
      mode: "ภาพยนตร์",
      topic: "รีวิว อ้ายคนหล่อลวง ภาพยนตร์สุดแนวจากผู้กำกับสุดเก๋ามากประสบการณ์",
    },
  ];

  const TableRow = ({ data }) => (
    <div className="Box-lastUp">
      <div className="Picture-lastup">{data.picture}</div>
      <div className="Topic-lastup">{data.topic}</div>

      <div className="Mode-and-Star-date">
        <div className="mode-Btnn">{data.mode}</div>
        <div className="star-Btnn">
          <img
            style={{ width: 25, height: 25 }}
            src="./IMGpageDF/star.png"
          ></img>
          {data.star}
        </div>
        <div className="date-Btnn">{data.date}</div>
        <div className="name-Btnn">@{data.name}</div>
      </div>
    </div>
  );

  return (
    <div className="PageDefaultCTN">
      <div className="ContainerPDF">
        <div className="PictureSlide-Container">
          <div className="slideshow-item">
            <img className="PictureSet" src="./IMGpageDF/snow.jpg" alt=""></img>
            <div className="slide-show-item-Text-1">
              <text className="T1-face">Welcome to website ! </text>
              <li className="T2-face">
                บอกถึงปัญหาของของคุณ ให้ผู้อื่นรับรู้และได้ช่วยคุณแก้ไขมัน{" "}
              </li>
              <li className="T2-face">สามารถ ลบ/แก้ไข โพสต์ของคุณได้</li>
              <li className="T2-face">กรุณาเคารพความคิดเห็นของผู้อื่น </li>
            </div>
            <div className="slide-show-item-Text-2"></div>
          </div>
        </div>
        <div className="Box-containerDF">
          <div className="Leftcontain">
            <Carousel autoplay className="Carousel-PD">
              <div className="Courousel-item1-PD">
                <img className="imgset-PD" src="./IMGpageDF/family.jpeg"></img>
              </div>
              <div className="Courousel-item1-PD">
                <img className="imgset-PD" src="./IMGpageDF/FoodC.jpeg"></img>
              </div>
              <div className="Courousel-item1-PD">
                <img className="imgset-PD" src="./IMGpageDF/Cineme.jpeg"></img>
              </div>
              <div className="Courousel-item1-PD">
                <img className="imgset-PD" src="./IMGpageDF/sportC.jpeg"></img>
              </div>
            </Carousel>
            <div className="Overlaytext-s">
              <img className="iconCCou" src="./IMGpageDF/logo.png"></img>
              <div className="Box-allthink-txt">ทุกความคิดเห็นมีคุณค่า</div>
            </div>
          </div>
          <div className="rightcontain">
            <div className="BoxbtnCss">
              <Link to="/CreateScreens">
                <img className="SizeWH" src="./IMGpageDF/t1.png"></img>
              </Link>
              <div>สร้างกระทู้</div>
            </div>
            <div className="BoxbtnCss">
              <Link to="/Modepage">
                <img className="SizeWH" src="./IMGpageDF/t2.png"></img>
              </Link>{" "}
              <div>หมวดหมู่</div>
            </div>

            <div className="BoxbtnCss">
              <Link to="/ShopScreen">
                <img className="SizeWH" src="./IMGpageDF/t3.png"></img>
              </Link>
              <div>ร้านค้า</div>
            </div>

            <div className="BoxbtnCss">
              <Link to="/PostkratuManagement">
                <img className="SizeWH" src="./IMGpageDF/t6.png"></img>
              </Link>{" "}
              <div>จัดการ</div>
            </div>
            <div className="BoxbtnCss">
              <Link to="/Inventory">
                <img className="SizeWH" src="./IMGpageDF/t5.png"></img>
              </Link>{" "}
              <div>กระเป๋าของคุณ</div>
            </div>
            <div className="BoxbtnCss">
              <Link to="/profile">
                <img className="SizeWH" src="./IMGpageDF/t4.png"></img>
              </Link>{" "}
              <div>โปรไฟล์</div>
            </div>
          </div>
        </div>
        <div className="TextPort">กระทู้ที่น่าสนใจ 4 อันดับ</div>
        <div className="portfolio">
          {Top4 &&
            Top4.map((item, index) => (
              <div className="portfolio-item graphic-design">
                <img className="portfolio-bg" src={item.picture} alt=""></img>
                <div className="portfolio-description">
                  <h4>{item.mode}</h4>
                  <p>{item.topic}</p>
                </div>
              </div>
            ))}
        </div>
        {/*------------------------------------------------------- Container post new -----------------------------------------------------------------------------------------------------*/}
        <div className="Area-new-post">
          <div className="TextPort">กระทู้ล่าสุด</div>
          {DataTest &&
            DataTest.reduce((item, index, i) => {
              if (i >= start && i <= end) {
                const row = <TableRow key={i} data={index} />;
                item.push(row);
              }
              return item;
            }, [])}
            
        </div>
      </div>
      <div className="footer-b">
          <button className="ButtonStyleshowmore" onClick={() => maxindex()}>
            โหลดเพิ่มเติม
          </button></div>
    </div>
  );
}

export default PageDefault;
