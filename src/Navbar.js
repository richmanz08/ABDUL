import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "./PageDefault";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const SidebarData = [
    {
      title: " โปรไฟล์",
      path: "/profile",
      icons: <img className="allpicturesidebar" src="/Profile.png"></img>,
    },
    {
      title: "กระเป๋า",
      path: "/inventory",
      icons: (
        <img className="allpicturesidebar" src="/icons8-backpack-50.png"></img>
      ),
    },
    {
      title: "จัดการกระทู้",
      path: "/PostkratuManagement",
      icons: <img className="allpicturesidebar" src="/Gear.png"></img>,
    },
    // {
    //   title: " Home",
    //   path: "/",
    //   icons: <img src="/homemenu.png"></img>,
    //   className: "nav-text",
    // },
  ];
  const [userDropdown, setDropdown] = useState(false);
  const showDropdown = () => setDropdown(!userDropdown);
  const DropdownUser = [
    {
      title: "โปรไฟล์",
      icons: <img className="icons-userMENU" src="./usericon.png"></img>,
    },
    {
      title: "เปลี่ยนรหัสผ่าน",
      icons: <img className="icons-userMENU" src="./Changepassword.png"></img>,
    },
    {
      title: "สลับบัญชีผู้ใช้",
      icons: <img className="icons-userMENU" src="./Switchaccount.png"></img>,
    },
    {
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
            <img className="navbarlogo" src="./logo-web.png"></img>
            <Link to="./PageDefault" style={{ textDecoration: "none" }}>
              <div className="mainpage butCss">หน้าหลัก</div>
            </Link>
            
            <div className="shop butCss">ร้านค้า</div>
            <Link to="./ModePage" style={{textDecoration:"none"}}>
            <div className="mode butCss">หมวดหมู่</div></Link>
            <div className="create butCss">สร้างกระทู้</div>

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
            }
          >
            <div className="dropdown-menu-items" onClick={showDropdown}>
              {DropdownUser.map((item, index) => {
                return (
                  <div key={index} className={item.className}>
                    <Link to={item.path} style={{ textDecoration: "none" }}>
                      <div className="DDitems">
                        {item.icons}
                        <div className="fonttitleDD">{item.title}</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
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
              X ปิดหน้าต่าง
              {/* <img className="settingClosePNG" src="./close.png"></img> */}
            </Link>
          </div>
          <div className="space"></div>
          <div className="UserprofileContainer">
            <div className="TemplateUserImage C">
              <img className="userImage" src="non.jpg"></img>
            </div>
            <div className="UserName-T">Richmanz08</div>
            <div className="space"></div>
          </div>
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
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
