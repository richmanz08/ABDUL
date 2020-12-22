import "./App.css";
import "./Loginpage.css";
import Footer from "./Footer";
function Loginpage() {
  return (
    <div className="Frame">
      <div className="Headertop">
        <div className="HeadertopBox">
          <img className="logoabdul" src="./logoabdul.png"></img>
          <button className="button-mode1 hovermode">ที่เกี่ยวข้อง</button>
          <button className="button-mode2 hovermode">ติดต่อ</button>
          <button className="button-mode3 hovermode">เติมเงิน</button>
          <div className="searchbar">
            <div className="search-box">
              <input
                type="text"
                className="search-txt"
                placeholder="ค้นหา"
              ></input>
              <div className="box-btn">
                <img className="search-btn" src="./search.png"></img>
              </div>
            </div>
          </div>
          <button className="button-login">เข้าสู่ระบบ</button>
          <button className="button-register">สมัครสมาชิก</button>
        </div>
      </div>
      <div className="Header">
        <div className="HeaderBox">
          <div className="txt-slogan">ทุกปัญหามีทางออก</div>
          <div className="txt-detail">
            พวกเราจะช่วยคุณ แก้ปัญหาที่คุณเจอ
            ขอเพียงแค่คุณบอกเราพวกเราจะช่วยให้คำแนะนำและตอบคุณ
            แต่คุณเองต้องเป็นคนตัดสินใจเอง
          </div>
          <button className="button-start">เริ่มกันเลย :)</button>
        </div>
      </div>
      <div className="body">
        <div className="bodyBox">
          <div className="txt-bd">สำหรับประชาชน</div>
          <div className="txt-middlebar"></div>
          <div className="txt-bddetail">
            Stack Overflow is an open community for anyone that codes. We help
            you get answers to your toughest coding questions, share knowledge
            with your coworkers in private, and find your next dream job.
          </div>
          <div className="GroupA">
            <div className="A1 cssgroup">
              <img className="img-a1" src="./homepro.png"></img>
              <div className="topic-a1">Public Q&A</div>
              <div className="body-a1">
                Get answers to more than 16.5 million questions and give back by
                sharing your knowledge with others. Sign up for an account.
              </div>
              <button className="button-a1">Browser questions</button>
            </div>
            <div className="A2 cssgroup">
              <img className="img-a2" src="./owlhouse.png"></img>
              <div className="topic-a2">Topic</div>
              <div className="body-a2">
                body test bodybody test bodybody test bodybody test bodybody
                test bodybody test body
              </div>
              <button className="button-a2">Button test</button>
            </div>
            <div className="A3 cssgroup">
              <img className="img-a3" src="./doggie.png"></img>
              <div className="topic-a3">หัวข้อทดลอง</div>
              <div className="body-a3">
                ข้อมูลแบยาวๆๆๆไม่อะไรเลยลแบยาวๆๆๆไม่อะไรเลลแบยาวๆๆๆไม่อะไรเลลแบยาวๆๆๆไม่อะไรเลลแบยาวๆๆๆไม่อะไรเล
              </div>
              <button className="button-a3">Button test</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Loginpage;
