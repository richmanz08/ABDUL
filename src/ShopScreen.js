import React, { useState, Component } from "react";
import "antd/dist/antd.css";
import "./ShopScreen.css";
import { Tabs } from "antd";
import {
 
  QqOutlined ,
  WindowsOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Stickershop from "./components/Stickershop";


function ShopScreen() {
  const { TabPane } = Tabs;
 
  
  return (
    <div className="Layout-container-ShopScreen">
      <div className="Center-containner-ShopScreen">
        <Tabs defaultActiveKey="1" style={{ backgroundColor: "#fff" }}>
          <TabPane
            tab={
              <span
                style={{ fontSize: 25, color: "#333", fontFamily: "kanit" }}
              >
                <QqOutlined />
                สติ้กเกอร์
              </span>
            }
            key="1"
          >
            <Stickershop/>

          </TabPane>
          <TabPane
            tab={
              <span
                style={{ fontSize: 25, color: "#333", fontFamily: "kanit" }}
              >
                <ProfileOutlined />
                กรอบโปรไฟล์
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
          <TabPane
            tab={
              <span
                style={{ fontSize: 25, color: "#333", fontFamily: "kanit" }}
              >
                <WindowsOutlined />
                อื่นๆ
              </span>
            }
            key="3"
          >
            ไม่มีรายการ
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default ShopScreen;
