import React from "react";
import "./profile.css";
function profile() {
  return (
    <div className="profileCTN">
      <div className="Box-profile">
        <div className="Boxitems1-profile">
          <div className="header-pf">ข้อมูลทั่วไป</div>
          <div className="GROUP-PROFILE-1">
            <img className="profile-img" src="./non.jpg"></img>
            <div className="G-1-1">
              <div className="Username-user">ยูสเซอร์เนม</div>
              <div className="username-items">Richmanz 08</div>
              <div className="G-1-2">
                <img className="set-star" src="./IMGprofile/star.png"></img>
                <div className="star-point">x10</div>
              </div>
              <button className="changephoto">
                <img className="camera-set" src="./IMGprofile/camera.png"></img>
                แก้ไขรูปโปรไฟล์
              </button>
            </div>
          </div>
          <div className="Description-user">
            *****อธิบายเกี่ยวกับตัวคุณ*******
          </div>
          <div className="CONTAINER-ssa">
            <div className="box-status">
              <div className="status-user">สถานะ</div>
              <div className="Answer-status-user">แอดมิน</div>
            </div>
            <div className="box-sex">
              <div className="men-or-male">เพศ</div>
              <div className="Answer-men-or-male">ชาย</div>
            </div>
            <div className="box-age">
              <div className="age-profile">อายุ</div>
              <div className="Answer-age-profile">24</div>ปี
            </div>
          </div>
          <div className="CARD-Name">
            <button className="Set-button-card">
              <img className="Set-icon-card" src="./IMGprofile/card.png"></img>
              นามบัตร
            </button>
          </div>
        </div>
        <div className="Boxitems2-profile">
          <div>ข้อมูลส่วนบุคคล</div>
          <div>Email</div>
          <div>arnonruengrueang@hotmail.com</div>
          <div>ยูสเซอร์เนม</div>
          <div>Richmanz08</div>
          <div>ชื่อ-นามสกุล</div>
          <div>อานนท์ รุ่งเรือง</div>
          <div>ชื่อเล่น</div>
          <div>นนท์</div>
          <div>สถานะ</div>
          <div>แอดมิน</div>
          <div>เพศ</div>
          <div>ชาย</div>
          <div>อายุ</div>
          <div>21</div>
          <div>เบอร์โทร</div>
          <div>0984437173</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default profile;
