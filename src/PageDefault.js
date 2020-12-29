import React from "react";
import "./PageDefault.css";
function PageDefault() {
  return (
    <div className="PageDefaultCTN">
      <div className="ContainerPDF">
        <div className="PictureSlide-Container">
          {/* รูป 1 */}
          <div className="slideshow-item">
            <img
              className="PictureSet"
              src="./IMGpageDF/beach.jpg"
              alt=""
            ></img>
          </div>
          {/* รูป 2 */}
          <div className="slideshow-item">
            <img className="PictureSet" src="./IMGpageDF/snow.jpg" alt=""></img>
          </div>
          {/* รูป 3 */}
          <div className="slideshow-item">
            <img
              className="PictureSet"
              src="./IMGpageDF/lightning.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div className="User-Post-Container">
          <div className="Box-post-ctn">
            <div className="heder-post">
              <div className="pictureuserprofile-show">
                <img className="pictureSET" src="./non.jpg"></img>
              </div>
              <div className="username-show">Arnon Ruengrueang</div>
              <div className="timing-show">12 ชั่วโมง</div>
            </div>
            <div className="detail-post">
              Galaxy Z Fold2 5G สมาร์ทโฟนจอพับได้แห่งอนาคต มาพร้อมกล้อง 5 ตัว
              มอบประสบการณ์ถ่ายภาพรูปแบบใหม่ และสิทธิพิเศษที่ไม่เหมือนใคร Galaxy
              Z Fold2 5G สมาร์ทโฟนจอพับได้แห่งอนาคต มาพร้อมกล้อง 5 ตัว
              มอบประสบการณ์ถ่ายภาพรูปแบบใหม่ และสิทธิพิเศษที่ไม่เหมือนใครGalaxy
              Z Fold2 5G สมาร์ทโฟนจอพับได้แห่งอนาคต มาพร้อมกล้อง 5 ตัว
              มอบประสบการณ์ถ่ายภาพรูปแบบใหม่ และสิทธิพิเศษที่ไม่เหมือนใครGalaxy
              Z Fold2 5G สมาร์ทโฟนจอพับได้แห่งอนาคต มาพร้อมกล้อง 5 ตัว
              มอบประสบการณ์ถ่ายภาพรูปแบบใหม่ และสิทธิพิเศษที่ไม่เหมือนใคร
            </div>
            <div className="comment-post"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDefault;
