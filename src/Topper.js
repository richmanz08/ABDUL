import "./Topper.css";
import { Link } from "react-router-dom";
function Topper() {
  return (
    <div className="Headertop">
      <div className="HeadertopBox">
        <img className="logoabdul" src="./logoabdul.png"></img>
        <Link to="./Loginpage">
          <button className="button-mode1 hovermode">หน้าหลัก</button>
        </Link>
        <button className="button-mode2 hovermode">ติดต่อ</button>

        <button className="button-mode3 hovermode">ระบบดาว</button>

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
        <Link to="./LoginandRegister">
          <button className="button-login ">เข้าสู่ระบบ</button>
        </Link>
        <Link to="./RegisterandLogin">
          <button className="button-register">สมัครสมาชิก</button>
        </Link>
      </div>
    </div>
  );
}
export default Topper;
