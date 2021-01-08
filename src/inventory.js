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
  // const [sticker, setSticker] = useState(false);
  // const showSticker = () => setSticker(!sticker);
  const [selectS, setSelect] = useState(false);
  const showSelect = () => setSelect(!selectS);

  const [selectP, setSelectP] = useState(false);
  const showSelectP = () => setSelectP(!selectP);
  return (
    <div className="inventoryCTN">
      <div className="InventoryBox">
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
            Sticker
          </div>
          <div onClick={showSelectP} className="btn-portrait SandP-CSS">
            <img
              className="setpictureinventory"
              src="./IMGinventory/portrait.png"
            ></img>
            Portrait
          </div>
        </div>
        <div className="Present-container">
          <div className="Present-items">
            {/* /* //Sticker*/}
            <div
              className={selectS ? "StickerCss activeSticker" : "StickerCss "}
              onClick={showSelectP}
            >
              <div className="StickerCtn">Sticker55</div>
            </div>
            {/* Portrait */}
            <div
              className={
                selectP ? "PortraitCss activePortrait" : "PortraitCss "
              }
              onClick={showSelect}
            >
              <div className="PortraitCtn">Portrait</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
