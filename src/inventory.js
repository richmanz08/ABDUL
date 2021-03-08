import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./inventory.css";
// class Sticker extends Component {
//   render() {
//     return (
//       <div id="choice1" className="Sticker-container">
//         Sticker
//       </div>
//     );
//   }
// }
// class Portrait extends Component {
//   render() {
//     return (
//       <div id="choice2" className="Portrait-container">
//         Portrait
//       </div>
//     );
//   }
// }
function Inventory() {
  const [selectS, setSelect] = useState(true);
  const showSelect = () => {setSelect(!selectS)
   setSelectP(false)
  
  };

  const [selectP, setSelectP] = useState(false);
  const showSelectP = () => {setSelectP(!selectP);
  setSelect(false)
  }

  const StickerALL = [
    {
      sticker: (
        <img
          className="setSticker-size"
          src="./IMGinventory/sticker1.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่1",
    },
    {
      sticker: (
        <img
          className="setSticker-size"
          src="./IMGinventory/sticker2.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่2",
    },
    {
      sticker: (
        <img
          className="setSticker-size"
          src="./IMGinventory/sticker3.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่3",
    },
    {
      sticker: (
        <img
          className="setSticker-size"
          src="./IMGinventory/sticker4.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่4",
    },
    {
      sticker: (
        <img
          className="setSticker-size"
          src="./IMGinventory/sticker5.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่5",
    },
    {
      sticker: (
        <img
          className="setSticker-size"
          src="./IMGinventory/sticker6.png"
        ></img>
      ),
      name: "น้องหมีนอนหลับ แบบที่6",
    },
  ];
  return (
    <div className="inventoryCTN">
      <div className="InventoryBox">
        <div className="CONTAINER-IN">
          <div className="Ctn-button-inventory">
            <div
              onClick={showSelect}
              // onClick={showSelectP}
              className="btn-sticker SandP-CSS"
            >
              <img
                className="setpictureinventory"
                src="./IMGinventory/sticker.png"
              ></img>
              สติ้กเกอร์
            </div>
            <div className="Button-center-tab"></div>
            <div onClick={showSelectP} className="btn-portrait SandP-CSS">
              <img
                className="setpictureinventory"
                src="./IMGinventory/portrait.png"
              ></img>
              กรอบโปรไฟล์
            </div>
          </div>
          <div className="TAB-InVENTOTY"></div>
          <div className="Present-container">
            <div className="Present-items">
              {/* /* //Sticker*/}
              <div
                className={selectS ? "StickerCss activeSticker" : "StickerCss "}
              >
                <div className="StickerCtn">
                  <div className="set-wrap">
                    {StickerALL &&
                      StickerALL.map((item, Index) => (
                        <div className="BOX-s">
                          <div className="box-sticker-height">
                            <div className="box-sticker-bg">{item.sticker}</div>
                          </div>
                          <div className="list-items-sticker">
                            <div className="name-sticker">ชื่อสติ้กเกอร์</div>
                            <div className="name-sticker-n">{item.name}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="bar-sticker" onClick={showSelect}>
                  <img className="setHand" src="./IMGinventory/hand.png"></img>
                  ซ่อนหน้าต่างนี้
                </div>
              </div>
              {/* Portrait */}
              <div
                className={
                  selectP ? "PortraitCss activePortrait" : "PortraitCss "
                }
              >
                <div className="PortraitCtn">
                  <div className="BOX-p">
                    <div className="box-Portrait-height">
                      <div className="box-Portrait-bg">
                        <img
                          className="setPortrait-size"
                          src="./IMGinventory/stickser1.png"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="list-items-Portrait">
                      <div className="name-Portrait">รูปแบบ</div>
                      <div className="name-Portrait-n">สไตล์มินิมอล</div>
                    </div>
                  </div>
                </div>
                <div className="bar-Portrait" onClick={showSelectP}>
                  <img className="setHand" src="./IMGinventory/hand.png"></img>
                  ซ่อนหน้าต่างนี้
                </div>
              </div>
              <div className="show-click-text">
                <img
                  className="Show-click-icon"
                  src="./IMGinventory/show.png"
                ></img>
                คลิ้กที่ปุ่มด้านบนเพื่อแสดง สติ๊กเกอร์ หรือ กรอบโปรไฟล์
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
