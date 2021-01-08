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
          <div className="HeaderProfile-private">ข้อมูลส่วนบุคคล</div>
          <div className="Row-1-profile">
            <div className="R1-ITEMS-1 R-ITEMS-set">Email</div>
            <div className="R1-ITEMS-2 set-box-R">
              arnonruengrueang@hotmail.com
            </div>
          </div>
          <div className="Row-2-profile">
            <div className="R2-ITEMS-1 R-ITEMS-set">ยูสเซอร์เนม</div>
            <div className="R2-ITEMS-2 set-box-R">Richmanz08</div>
          </div>
          <div className="Row-3-profile">
            <div className="R3-ITEMS-1 R-ITEMS-set">ชื่อ-นามสกุล</div>
            <div className="R3-ITEMS-2 set-box-R">อานนท์ รุ่งเรือง</div>
            <div className="R3-ITEMS-3 R-ITEMS-set">ชื่อเล่น</div>
            <div className="R3-ITEMS-4 set-box-R">นนท์</div>
          </div>
          <div className="Row-4-profile">
            <div className="R4-ITEMS-1 R-ITEMS-set">สถานะ</div>
            <div className="R4-ITEMS-2 set-box-R">แอดมิน</div>
            <div className="R4-ITEMS-3 R-ITEMS-set">เพศ</div>
            <div className="R4-ITEMS-4 set-box-R">ชาย</div>
            <div className="R4-ITEMS-5 R-ITEMS-set">อายุ</div>
            <div className="R4-ITEMS-6 set-box-R">21</div>
          </div>
          <div className="Row-5-profile">
            <div className="R5-ITEMS-1 R-ITEMS-set">เบอร์โทร</div>
            <div className="R5-ITEMS-2 set-box-R">0984437173</div>
          </div>
          <div></div>
          <div className="edit-box">
            <button className="btn-edit">แก้ไขข้อมูล</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
