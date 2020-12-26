import React from "react";
import "./RegisterandLogin.css";
import Topper from "./Topper";
import { Link } from "react-router-dom";
import ejs from "ejs";
function RegisterandLogin() {
  return (
    <div className="Frame3">
      <Topper />
      <div className="ContainerRegister">
        <div className="BoxRegister">
          <div className="InputZoneRegister">
            <div className="text-Register1">สมัครสมาชิก</div>
            <div className="text-Register2">
              กรุณากรอกข้อมูลด้านล่างให้ครบถ้วน
            </div>
            <form action="/Register" method="post" noValidate>
              <div className="layerRegis">
                <input
                  type="text"
                  name="user_name"
                  className="username-regis EUScss "
                  id="_rname"
                  placeholder="Username"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  className="email-regis EUScss"
                  placeholder="Email"
                  id="_remail"
                  required
                />

                <input
                  type="password"
                  name="user_pass"
                  className="password-regis EUScss"
                  placeholder="Password"
                  id="_remail"
                  required
                />

                <button type="submit" className="ButtonRegister">
                  สมัคร
                </button>
              </div>
            </form>
          </div>
          <div className="ShowZoneRegis">
            <div className="text-ShowZone1-regis">สวัสดี</div>
            <div className="text-ShowZone2-regis">
              หากคุณนั้นมีบัญชีผู้ใช้อยู่แล้วสามารถเข้าใช้ระบบได้เลย
              โดยกดที่ปุ่มด้านล่าง
            </div>
            <Link to="./LoginandRegister">
              <button className="ButtonShowZone-Regis">เข้าสู่ระบบ</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterandLogin;
