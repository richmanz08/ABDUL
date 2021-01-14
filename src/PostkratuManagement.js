import React, { useState } from "react";
import "./PktMnm.css";
function PostkratuManagement() {
  const [ModalLike, setModalLike] = useState(false);
  const showModalLike = () => setModalLike(!ModalLike);
  // const [closelike, setLike] = useState(false);
  const closeModallike = () => showModalLike(!ModalLike);

  //modalComment
  const [ModalComment, setModalComment] = useState(false);
  const showModalComment = () => setModalComment(!ModalComment);
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
                <div className="zone-Top">
                  <img className="picture-my-post" src="./non.jpg"></img>
                  <div className="name-post">arnon ruengrueang</div>

                  <img
                    className="icons-repair"
                    src="./IMGpost/settingpost.png"
                  ></img>
                </div>
                <div className="mode-set">
                  <button className="item-1-mode setCSS-mode-inpost">
                    กีฬา
                  </button>
                  <button className="item-2-mode setCSS-mode-inpost">
                    ฟุตบอล
                  </button>
                </div>
                <div className="row-tab-message">
                  <div className="line-row"></div>
                  <div className="Message-m">ข้อความ</div>
                  <div className="line-row"></div>
                </div>
                <div className="descriptionbox">
                  <div className="text-items">
                    ช่วยหน่อยครับ คิดว่าคู่นี้แมนยูจะออกผลลัพธ์มาเป็นแบบไหนครับ
                    จะชนะขาดไหม หรือแพ้ยับ
                    โอกาศที่แมนยูจะแพ้นอกบ้านมีบ่อยไหมครับ
                    แล้วใครจะลงเล่นเป็นตัวจริงช่วยบอกให้อุ่นใจทีครับ5555555
                  </div>
                </div>
                <div className="zone-like-ment">
                  <div className="Like-box" onClick={showModalLike}>
                    <div className="like-button cssSetlike-comment">
                      0 ถูกใจ
                    </div>
                    <modallike
                      className={
                        ModalLike ? "Modal-like activelikemodal" : "Modal-like "
                      }
                      onClick={showModalLike}
                    >
                      <div className="Modal-like-container">Like</div>
                    </modallike>
                  </div>

                  <div
                    className="comment-box"
                    onClick={(() => closeModallike, showModalComment)}
                  >
                    <div className="comment-button cssSetlike-comment">
                      0 ความคิดเห็น
                    </div>
                    <modalcomment
                      className={
                        ModalComment
                          ? "Modal-Comment activeCommentmodal"
                          : "Modal-Comment "
                      }
                      onClick={showModalLike}
                    >
                      <div className="Modal-Comment-container">comment</div>
                    </modalcomment>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-create-new">
            <img className="icons-create" src="./IMGpost/create.png"></img>
            สร้างโพสต์ใหม่
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostkratuManagement;
