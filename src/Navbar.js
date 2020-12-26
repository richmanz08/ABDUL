import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const SidebarData = [
    {
      title: " โปรไฟล์",
      path: "/",
      icons: <img className="allpicturesidebar" src="/profileicons8.png"></img>,
    },
    {
      title: "กระเป๋า",
      path: "/inventory",
      icons: (
        <img className="allpicturesidebar" src="/backpackicons8.png"></img>
      ),
    },
    {
      title: "จัดการกระทู้",
      path: "/PostkratuManagement",
      icons: <img className="allpicturesidebar" src="/posticons8.png"></img>,
    },
    // {
    //   title: " Home",
    //   path: "/",
    //   icons: <img src="/homemenu.png"></img>,
    //   className: "nav-text",
    // },
  ];
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <img
            src="./menubar.png"
            onClick={showSidebar}
            style={{ width: 20, height: 20 }}
          ></img>
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-items" onClick={showSidebar}>
          <div className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <img className="settingClosePNG" src="./close.png"></img>
            </Link>
          </div>
          <div className="UserprofileContainer">
            <div className="TemplateUserImage P">
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
