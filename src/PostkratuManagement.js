import Item from "antd/lib/list/Item";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PktMnm.css";
import { Pagination } from "antd";
import BlogList from './components/BlogList.js';
function PostkratuManagement() {
  const [ModalLike, setModalLike] = useState(false);
  const showModalLike = () => setModalLike(!ModalLike);
  // const [closelike, setLike] = useState(false);
  const closeModallike = () => showModalLike(!ModalLike);

  //modalComment
  const [ModalComment, setModalComment] = useState(false);
  const showModalComment = () => setModalComment(!ModalComment);


// const [blogs, setBlogs]= useState ([ 
//   {
//     id:1,
//     icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>,
//     mode: "กีฬา",
//     topic:
//       "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
//     date: "01/02/64",
//   },
//   {
//     id:2,
//     icons: <img className="img-post" src="./IMGpost/2.jpg" alt=""></img>,
//     mode: "ฟุตบอล",
//     topic:
//       "บาร์เรที่ใครก็ตามพยายห้ตลอดช่วงที่ผ่านมาจนกลายเป็นนักเตะที่เก่งที่สุดของโลก และประวัติศาสตร์ของวงการฟุตบอล์",
//     date: "03/12/64",
//   },
//   {
//     id:3,
//     icons: <img className="img-post" src="./IMGpost/rues.jpg" alt=""></img>,
//     mode: "ภาพยนตร์",
//     topic:
//       "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
//     date: "01/02/64",
//   },
//   {
//     id:4,
//     icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>,
//     mode: "ครอบครัว",
//     topic:
//       "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
//     date: "01/02/64",
//   },
//   {
//     id:5,
//     icons: <img className="img-post" src="./IMGpost/1.jpg" alt=""></img>,
//     mode: "กีฬา",
//     topic:
//       "วันที่ 18 มิ.ย.63 เชลซี ทีมดังในศึกพรีเมียร์ลีก อังกฤษ คว้าตัว ติโม แวร์เนอร์ กองหน้ามาจาก แอร์เบ ไลป์ซิก เป็นที่เรียบร้อย โดยค่าตัวอยู่ที่ประมาณ 47.5 ล้านปอนด์ โดยจะอนุญาตให้เล่นจนจบฤดูกาลในศึกบุนเดสลีกา เยอรมัน 2019-2020 ก่อนย้ายแบบสมบูรณ์ในเดือนกรกฎาคม",
//     date: "01/02/64",
//   }
//  ]);



// const handleDelete = (id) => {
//   const newBlogs = blogs.filter(item => item.id !== id );
//   setBlogs(newBlogs)
// }
  

  return (
    <div className="BACK-BODY-CONTAINER">
      <div className="CON-K-size">
        <div className="Last-post-Container">
          <Link to="/CreateScreens">
            <div className="btn-create-new">สร้างโพสต์ใหม่</div>
          </Link>
          <div className="contentalllist">
            <div className="header-text">
            หน้า | การจัดการกระทู้ของคุณ</div>
          <BlogList 
          // blogs={blogs} 
          // handleDelete={handleDelete} 
          />
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostkratuManagement;
