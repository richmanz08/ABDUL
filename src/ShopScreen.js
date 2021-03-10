import React, { useState, Component } from "react";
import "antd/dist/antd.css";
import "./ShopScreen.css";
import { Tabs } from "antd";
import {
 
  QqOutlined ,
  WindowsOutlined,
  ProfileOutlined,
} from "@ant-design/icons";


function ShopScreen() {
  const { TabPane } = Tabs;
  const [sortS, setSorts] = useState(false);
  const showSorts = () => setSorts(!sortS);
  const StickerALL = [
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker1.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่1",
      price: 10,
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker2.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่2",
      price: 5,
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker3.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่3",
      price: 2,
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker4.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่4",
      price: 13,
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker5.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่5",
      price: 5,
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
      price: 1,
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
      price: 8,
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },

    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },
    {
      sticker: (
        <img
          className="setSticker-size-shop"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },
  ];
  const [selected, setSelected] = useState("");
  const [TradeCTN, SetTrade] = useState(false);
  const showTrade = (data) => {
    SetTrade(!TradeCTN);
    setSelected(data);
  };
  return (
    <div className="Layout-container-ShopScreen">
      <div className="Center-containner-ShopScreen">
        <Tabs defaultActiveKey="1" style={{ backgroundColor: "#fff" }}>
          <TabPane
            tab={
              <span
                style={{ fontSize: 25, color: "#333", fontFamily: "kanit" }}
              >
                <QqOutlined />
                สติ้กเกอร์
              </span>
            }
            key="1"
          >
            <text className="header-all-list-txt"> item all 133 pcs</text>
            <div className="classname-container">
              {StickerALL &&
                StickerALL.map((item, index) => (
                  <div
                    className="bodycontainer-sticker-shop Eventclicked"
                    onClick={() => {
                      showTrade(index);
                    }}
                    // onClick={showSorts}
                  >
                    <div className="box-sticker-shop">{item.sticker}</div>

                    <div className="box-name-shop">
                      <div className="name-s-shop">ชื่อสติ้กเกอร์</div>
                      <div className="stickername-s-shop">{item.name}</div>
                      <div className="star-container">
                        <img
                          className="sizestar-shop"
                          src="../IMGshop/star.png"
                        ></img>
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
                  <div className="Largbar"></div>
                  <div className="Want-tohide">
            {StickerALL &&
              StickerALL.map((item, index) => (
                <div className={TradeCTN && selected === index? "Trade-container activeTrade "
                : "Trade-container"}
                 
                >
                  <div className="column1-trade">
                    <div className=" stcicker-TradeShow">{item.sticker}</div>
                  </div>
                  <div className="column2-trade">
                    <text className="txt-trade-name-stk">ชื่อสติ้กเกอร์</text>
                    <text className="item-name-trade">{item.name}</text>
                    <text className="txt-howmuch-star">
                      จำนวนดาวที่ต้องใช้{" "}
                    </text>
                    <div className="group-row-howmuchstar">
                      <img
                        className="sizestar-shop"
                        src="../IMGshop/star.png"
                      ></img>
                      {item.price} starpoint.
                    </div>
                    <text className="detail-item-stk">
                      รายละเอียด :
                      สติ้กเกอร์นี้คุณสามารถใช้ได้ตลอดไม่มีวันหมดอายุ
                      และคุณสามารใช้งานได้ในส่วนของการตอบโพสต์หรือแสดงความคิดเห็น
                      และสามารถตรวจสอบสติ้กเกอร์ของคุณได้ใน "กระเป๋า" ของคุณ
                    </text>
                  </div>
                  <div className="column3-trade">
                    <text className="set-font-total">จำนวนดาวของคุณที่เหลืออยู่ในตอนนี้ 20  <img
                        className="sizestar-shop"
                        src="../IMGshop/star.png"
                      ></img>starpoint.</text>
                    <text className="set-font-total">หลังจากแลกเปลี่ยนจะคงเหลือ 10  <img
                        className="sizestar-shop"
                        src="../IMGshop/star.png"
                      ></img>starpoint. </text>
                  <button className="butten-accept-trade">แลกเปลี่ยน</button></div>
                </div>
              ))}
 </div>

          </TabPane>
          <TabPane
            tab={
              <span
                style={{ fontSize: 25, color: "#333", fontFamily: "kanit" }}
              >
                <ProfileOutlined />
                กรอบโปรไฟล์
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
          <TabPane
            tab={
              <span
                style={{ fontSize: 25, color: "#333", fontFamily: "kanit" }}
              >
                <WindowsOutlined />
                อื่นๆ
              </span>
            }
            key="3"
          >
            ไม่มีรายการ
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default ShopScreen;
