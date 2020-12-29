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
            <div className="boxdetail">
              <div className="detail-post">เครียดเว้ย</div>
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
      </div>
    </div>
  );
}

export default PageDefault;
