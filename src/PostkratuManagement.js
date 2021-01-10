import React from "react";
import "./PktMnm.css";
function PostkratuManagement() {
  return (
    <div className="BACK-BODY-CONTAINER">
      <div className="CON-K-size">
        <div className="Last-post-Container">
          <div className="Box-Lastpost">
            <div className="txt-lastpost-hd">โพสต์ล่าสุด</div>
            <div className="setFlexbox">
              <div className="picture-post">
                <img className="setsize-pp" src="./IMGpost/manu.png"></img>
              </div>
              <div className="text-post-box">
                <div className="descriptionbox">
                  ช่วยหน่อยครับ คิดว่าคู่นี้แมนยูจะออกผลลัพธ์มาเป็นแบบไหนครับ
                  จะชนะขาดไหม หรือแพ้ยับ โอกาศที่แมนยูจะแพ้นอกบ้านมีบ่อยไหมครับ
                  แล้วใครจะลงเล่นเป็นตัวจริงช่วยบอกให้อุ่นใจทีครับ5555555
                </div>
              </div>
            </div>
          </div>
          <div className="btn-create-new">สร้างโพสต์ใหม่</div>
        </div>
      </div>
    </div>
  );
}

export default PostkratuManagement;
