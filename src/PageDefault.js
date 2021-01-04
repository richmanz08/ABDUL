import React, { useState } from "react";
import "./PageDefault.css";
import { Link } from "react-router-dom";
function PageDefault() {
  const [itemdot, setDot] = useState(false);
  const showDot = () => setDot(!itemdot);
  const dotitems = [
    { title: "รายงานกระทู้นี้" },
    {
      title: "ดูนามบัตรเจ้าของกระทู้",
    },
    { title: "ดูไปรไฟล์" },
  ];
  const Modeitems = [
    {
      nameMode: "กีฬา",
      icons: (
        <img className="icons-M" src="./IMGmodepng/sports.png" alt=""></img>
      ),
    },
    {
      nameMode: "ครอบครัว",
      icons: (
        <img className="icons-M" src="./IMGmodepng/family.png" alt=""></img>
      ),
    },
    {
      nameMode: "ความรัก",
      icons: <img className="icons-M" src="./IMGmodepng/love.png" alt=""></img>,
    },
    {
      nameMode: "งาน",
      icons: <img className="icons-M" src="./IMGmodepng/work.png" alt=""></img>,
    },
    {
      nameMode: "เพลง",
      icons: (
        <img className="icons-M" src="./IMGmodepng/music.png" alt=""></img>
      ),
    },
    {
      nameMode: "ภาพยนตร์",
      icons: (
        <img className="icons-M" src="./IMGmodepng/movie.png" alt=""></img>
      ),
    },
    {
      nameMode: "เกมส์",
      icons: <img className="icons-M" src="./IMGmodepng/game.png" alt=""></img>,
    },
    {
      nameMode: "อาหาร",
      icons: <img className="icons-M" src="./IMGmodepng/food.png" alt=""></img>,
    },
  ];
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
        <div className="CTN-USER-AND-MODE">
          <div className="User-Post-Container">
            <div className="Box-post-ctn">
              <div className="heder-post">
                <div className="pictureuserprofile-show">
                  <img className="pictureSET" src="./non.jpg"></img>
                </div>
                <div className="username-show">Arnon Ruengrueang</div>
                <div className="timing-show">12 ชั่วโมง</div>
                <div className="dot-ctn">
                  <div className="Boxdot" onClick={showDot}>
                    <img className="Dot" src="./IMGpageDF/dot.png"></img>
                  </div>

                  <nav
                    className={
                      itemdot ? "dropdown-dot activeDropdot" : "dropdown-dot "
                    }
                  >
                    <div className="dropdown-dot-items" onClick={showDot}>
                      {dotitems.map((item, index) => {
                        return (
                          <div key={index} className={item.className}>
                            <Link
                              to={item.path}
                              style={{ textDecoration: "none" }}
                            >
                              <div className="Dotitems">
                                {/* {item.icons} */}
                                <div className="fonttitledot">{item.title}</div>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </nav>
                </div>
              </div>
              <div className="boxdetail">
                <div className="detail-post">ข้อมูล</div>
              </div>
              <div className="comment-post">
                <div className="ZoneButton-cp">
                  <div className="setboxLike">
                    <img
                      className="likethis"
                      src="./IMGpageDF/likethis.png"
                    ></img>
                  </div>
                  <div className="numberlike">120</div>
                </div>
                <div className="ZoneComment-cp">
                  <div className="think">แสดงความคิดเห็น</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ModeSelect-Container">
            <div className="Txt-modeHead">
              <div>หมวดหมู่</div>
            </div>
            <div className="setbox-MC">
              {Modeitems &&
                Modeitems.map((item, index) => (
                  <div className="BOX-m">
                    <div>{item.icons}</div>
                    <div>{item.nameMode}</div>
                  </div>
                ))}
            </div>
            <div className="Txt-allmode">
              <div className="set-allmode">ดูทั้งหมด</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDefault;
