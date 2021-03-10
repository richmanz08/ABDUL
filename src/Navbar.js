import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "./PageDefault";
import "./Navbar.css";
import HOME from "./HOME";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const SidebarData = [
    {
      title: " โปรไฟล์",
      path: "/profile",
      icons: <img className="allpicturesidebar" src="./IMGnavbar/1.png"></img>,
    },
    {
      title: "กระเป๋า",
      path: "/inventory",
      icons: (
        <img className="allpicturesidebar" src="./IMGnavbar/2.png"></img>
      ),
    },
    {
      title: "จัดการกระทู้",
      path: "/PostkratuManagement",
      icons: <img className="allpicturesidebar" src="./IMGnavbar/3.png"></img>,
    },
    {
      title: "สร้างกระทู้",
      path: "/CreateScreens",
      icons: <img  className="allpicturesidebar" src="./IMGnavbar/4.png"></img>,
      
    },
   
  ];
  const [userDropdown, setDropdown] = useState(false);
  const showDropdown = () => setDropdown(!userDropdown);
  const DropdownUser = [
    {
      title: "โปรไฟล์",
      icons: <img className="icons-userMENU" src="./Profile.png"></img>,
    },
    {
      title: "เปลี่ยนรหัสผ่าน",
      icons: <img className="icons-userMENU" src="./Changepassword.png"></img>,
    },
    {
      title: "สลับบัญชีผู้ใช้",
      icons: <img className="icons-userMENU" src="./Switchaccount.png"></img>,
    },
    { path:"./",
      title: "ออกจากระบบ",
      icons: <img className="icons-userMENU" src="./Logout.png"></img>,
    },
  ];

  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-barsOne">
          <img
            src="./navbaricon/menu.png"
            onClick={showSidebar}
            style={{ width: 20, height: 20 }}
          ></img>
        </Link>
        <div className="Containernavbaritems">
          <div className="containnercenter">
            <img className="navbarlogo" src="./IMGhome/logo.png"></img>
            <Link to="./PageDefault" style={{ textDecoration: "none" }}>
              <div className="mainpage butCss">หน้าหลัก</div>
            </Link>
             <Link to="./ShopScreen">
            <div className="shop butCss">ร้านค้า</div></Link>
            <Link to="./ModePage" style={{ textDecoration: "none" }}>
              <div className="mode butCss">หมวดหมู่</div>
            </Link>
            <Link to="./CreateScreens">
              <div className="create butCss">สร้างกระทู้</div>
            </Link>

            <div className="searchbar2">
              <div className="search-box2">
                <input
                  type="text"
                  className="search-txt2"
                  // placeholder="ค้นหา"
                ></input>
                <div className="box-btn2">
                  <img className="search-btn2" src="./search.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Userzone">
          <Link to="#" className="menu-user">
            <div>
              <img
                className="icon-button"
                src="./navbaricon/user.png"
                onClick={showDropdown}
              ></img>
            </div>
          </Link>
          <nav
            className={
              userDropdown ? "dropdown-user activeDropdown" : "dropdown-user "
            }onClick={showDropdown}
          >

           
            <div className="dropdown-menu-items" >
              {DropdownUser.map((item, index) => {
                return (
                  <div className="width-dditems">
                  <div key={index} className={item.className}>
                    <Link to={item.path} style={{ textDecoration: "none" }}>
                      <div className="DDitems">
                        {item.icons}
                        <div className="fonttitleDD">{item.title}</div>
                      </div>
                    </Link>
                  </div></div>
                );
              })}
              
            </div><text className="text-florr-userdropdown">ความเป็นส่วนตัว : กรุณาล็อคเอ้าทุกครั้งหลังเสร็จสิ้นการใช้งาน เพื่อความปลอดภัย</text>
          </nav>
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-items" onClick={showSidebar}>
          <div className="navbar-toggle">
            <Link
              to="#"
              className="menu-bars"
              style={{ textDecoration: "none" }}
            >
              Close Left bar
              
            </Link>
          </div>
          <div className="space"></div>
          {/* <div className="UserprofileContainer">
            <div className="TemplateUserImage C">
              <img className="userImage" src="./unnamed.png"></img>
            </div>
            <div className="UserName-T">Richmanz08</div>
            <div className="space"></div>
          </div> */}


          
          <div className="ContainerItemsidebar">
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className={item.className}>
                  <Link to={item.path} style={{ textDecoration: "none" }}>
                    <div className="boxitems">
                      {item.icons}
                      <div className="fonttitle">{item.title}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="box-button-sidebar">
            
          </div>
          <div className="text-show-box">
            <button className="Set-account">ตั้งค่าบัญชีผู้ใช้</button>
           
            <button className="Logout-button">ออกจากระบบ</button>
            
            <text>Tel.0984437173 24hr.</text>
            <text>@ Kasetsart university</text>
             </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
