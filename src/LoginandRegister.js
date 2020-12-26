import React from "react";
import "./LoginandRegister.css";
import Topper from "./Topper";
import { Link } from "react-router-dom";
function LoginandRegister() {
  return (
    <div className="Frame2">
      <Topper />
      <div className="ContainerLogin">
        <div className="BoxLogin">
          <div className="InputZoneLogin">
            <div className="text-login">เข้าสู่ระบบ</div>
            <div className="text-login2">กรอกยูสเซอร์เนมและรหัสผ่านของคุณ</div>
            <form action="" method="post">
              <div className="layerLogin">
                <input
                  type="text"
                  className="username usernameandpasswordCSS"
                  placeholder="Email"
                  id="_email"
                  required
                />
                <input
                  type="password"
                  className="password usernameandpasswordCSS"
                  id="_pass"
                  placeholder="Password"
                />
                <Link to="./Mainwebsite">
                  <button className="ButtonSignIn">เข้าใช้งาน</button>
                </Link>
              </div>
            </form>
          </div>
          <div className="ShowZoneLogin">
            <div className="text-ShowZone1">สวัสดี</div>
            <div className="text-ShowZone2">
              หากคุณนั้นยังไม่มีบัญชีผู้ ต้องทำการสมัครสมาชิกก่อน
              กดที่ปุ่มด้านล่าง
            </div>
            <Link to="./RegisterandLogin">
              <button className="ButtonShowZone">สมัครสมาชิก</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginandRegister;
