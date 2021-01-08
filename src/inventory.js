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
  const [selectS, setSelect] = useState(false);
  const showSelect = () => setSelect(!selectS);

  const [selectP, setSelectP] = useState(false);
  const showSelectP = () => setSelectP(!selectP);
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
                  <div className="BOX-s">
                    <div className="box-sticker-height">
                      <div className="box-sticker-bg">
                        <img
                          className="setSticker-size"
                          src="./IMGinventory/sticker1.png"
                        ></img>
                      </div>
                    </div>
                    <div className="list-items-sticker">
                      <div className="name-sticker">ชื่อสติ้กเกอร์</div>
                      <div className="name-sticker-n">น้องหมีตีพุง แบบที่1</div>
                    </div>
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
                <div className="PortraitCtn">Portrait</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
