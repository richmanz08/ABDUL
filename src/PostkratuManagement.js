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
  
  const ALLpost = [
    {
      postID:1,
      icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>
      ,mode:"กีฬา",
      text:"วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม"
     ,date:"01/02/64"
       
    },
    {
      postID:2,
      icons: <img className="img-post" src="./IMGpost/2.jpg" alt=""></img>
      ,mode:"ฟุตบอล",
      text:"บาร์เซโลน่า ขอสนับสนุน ลิโอเนล เมสซี่ อย่างเต็มที่ โดยเฉพาะอย่างยิ่งจากการที่ใครก็ตามพยายามจะทำลายภาพลักษณ์ของเขา และจากการที่อาจจะทำให้เกิดความเสียหายระหว่างความสัมพันธ์ของเขากับสโมสรที่เขาเล่นให้ตลอดช่วงที่ผ่านมาจนกลายเป็นนักเตะที่เก่งที่สุดของโลก และประวัติศาสตร์ของวงการฟุตบอล์"
      ,date:"03/12/64"
    } ,{
      postID:1,
      icons: <img className="img-post" src="./IMGpost/rues.jpg" alt=""></img>
      ,mode:"กีฬา",
      text:"วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม"
     ,date:"01/02/64"
       
    },
    {
      postID:1,
      icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>
      ,mode:"กีฬา",
      text:"วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม"
     ,date:"01/02/64"
       
    },
    {
      postID:1,
      icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>
      ,mode:"กีฬา",
      text:"วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม"
     ,date:"01/02/64"
       
    },

  ]
  
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
        <div className="ALLPOST-CONTAINER">
        {ALLpost &&
                ALLpost.map((item, index) => (
                   <div className="itemAllPost-area">
                     <div>{item.icons}</div>
<div className="zone-DateandMode">
                     <day className="set-date-style">{item.date}</day>
                     <button className="item-all-mode setCSS-mode-inpost">{item.mode}</button>
                    </div>
                     <div className="zone-textandtool">
                     <text className="text-post">{item.text}</text>
                     <tool className="tool-container">
                       <button className="setButtonTT">
                         <img className="set-button-TT" src="./IMGpost/settingpost.png"></img>
                         
                       </button>
                       <button  className="setButtonTT">
                       <img className="set-button-TT" src="./IMGpost/bin.png"></img>
                       </button>
                     </tool>
                     </div>
                     <div className="Show-more">
                   <img className="setshowmore" src="./IMGpost/showmore.png"></img>
                     </div>
                   </div>
                ))}
         

        </div>
      </div>
    </div>
  );
}

export default PostkratuManagement;
