import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Modal, Button } from "antd";
import Item from "antd/lib/list/Item";
import ShowKratuScreen from "../ShowKratuScreen";
import { Link } from "react-router-dom"

const BlogList = ({}) => {
  const history = useHistory();

  const routeChange = (id) => {
    let path = `Showkratu`;
    history.push(path);
    // history.push(id);
  };

  //modal
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "หากคุณลบโพสต์ โพสต์นี้จะไม่สามารถนำกลับมาได้อีก คุณยืนยันที่จะลบโพสต์นี้หรือไม่ "
  );
  const [saveid, Setsaveid] = useState();
  const showModal = (data) => {
    setVisible(true);
    Setsaveid(data.id);
  };

  const handleOk = () => {
    handleDelete(saveid);
    setModalText("คุณยืนยันที่จะลบใช่ไหม");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((item) => item.id !== id);
    setBlogs(newBlogs);
  };
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>,
      mode: "กีฬา",
      topic:
        "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
      date: "01/02/64",
    },
    {
      id: 2,
      icons: <img className="img-post" src="./IMGpost/2.jpg" alt=""></img>,
      mode: "ฟุตบอล",
      topic:
        "บาร์เรที่ใครก็ตามพยายห้ตลอดช่วงที่ผ่านมาจนกลายเป็นนักเตะที่เก่งที่สุดของโลก และประวัติศาสตร์ของวงการฟุตบอล์",
      date: "03/12/64",
    },
    {
      id: 3,
      icons: <img className="img-post" src="./IMGpost/rues.jpg" alt=""></img>,
      mode: "ภาพยนตร์",
      topic:
        "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
      date: "01/02/64",
    },
    {
      id: 4,
      icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>,
      mode: "ครอบครัว",
      topic:
        "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
      date: "01/02/64",
    },
    {
      id: 5,
      icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>,
      mode: "กีฬา",
      topic:
        "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
      date: "01/02/64",
    },
  ]);
  const [testy, setTesty] = useState(false);
  const [id, setID] = useState();




  const doLink = (testID) => {
    setTesty(true);
    setID(testID)
  }


  
  //modal
  return (
    <div className="container-Boxitem">
      {blogs &&
        blogs.map((item, index) => (
          <div className="Boxitem" key={item.id}>
            <div className="row1-bloglist">
              <div className="items-mode">{item.mode}</div>
              <div className="items-Image">{item.icons}</div>
              <Link to = {{ pathname: "/Showkratu", state : {blogs : item.id}}}
                onClick = {() => doLink(item.id)}
              ><button className="View-button" 
              // onClick={() => routeChange(item)}
              >
                ดูโพสต์
              </button>
              </Link>
            </div>
            <div className="items-TOPIC">{item.topic}</div>

            <div className="row4">
              <div className="items-date">คุณโพสต์เมื่อ {item.date}</div>

              <img
                className="Button-delete"
                src="./IMGpost/delete.png"
                // onClick={()=>handleDelete(item.id)}
                onClick={() => showModal(item)}
              ></img>
            </div>
          </div>
        ))}

      <Modal
        style={{ backgroundColor: "#333", fontFamily: "kanit" }}
        title="คำเตือน"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      {testy && id && <ShowKratuScreen blogs = {`${id}`} />}
    </div>
  );
};
export default BlogList;
