import React, { useState } from "react";
import "../ADMIN.css";

function Request() {
  const [Selectindex, Setselectindex] = useState("");
  const [check, SetCheck] = useState(false);
  const ShowCheck = (data) => {
    SetCheck(!check);
    Setselectindex(data);
  };

  const RequestPostList = [
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "ไม่มี",
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "ไม่มี",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "ไม่มี",
    },
  ];

  return (
    <div className="Layout-Request">
      {RequestPostList &&
        RequestPostList.map((item, index) => (
          <div className="setBoxrequest">
            <text>กระทู้ที่ {index + 1}</text>
            <text>postID: {item.postID}</text>
            <text>Username: {item.username}</text>
            <text>topic : {item.topic}</text>
            <button
              style={{ color: "#000" }}
              onClick={() => {
                ShowCheck(index);
              }}
            >
              ตวรจสอบ
            </button>
            <button style={{ color: "#000", backgroundColor: "red" }}>
              delete
            </button>
          </div>
        ))}
      {RequestPostList &&
        RequestPostList.map((item, index) => (
          <div
            className={
              check && Selectindex == index
                ? "Checkshowcontainer"
                : "displayCheckshow"
            }
          >
            <div>
              {index + 1}ไอดี={item.postID} ยูสเซอร์เนม={item.username} หัวข้อ=
              {item.topic} เนื้อหา={item.Descriptions} รูปภาพ={item.picture}
            </div>
          </div>
        ))}
    </div>
  );
}
export default Request;
