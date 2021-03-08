import React,{useState} from 'react'

import {useHistory} from 'react-router-dom';
import { Modal, Button } from 'antd';
import Item from 'antd/lib/list/Item';





const BlogList = ({blogs,handleDelete}) => {
  const history =useHistory()
  const routeChange = () =>{ 
      let path = `Showkratu`; 
      history.push(path);
    }

    //modal
const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('หากคุณลบโพสต์ โพสต์นี้จะไม่สามารถนำกลับมาได้อีก คุณยืนยันที่จะลบโพสต์นี้หรือไม่ ');

  const showModal = (id) => {
    setVisible(true); 
   
  };

  const handleOk = (id) => {
     
     handleDelete(id)
    setModalText('คุณยืนยันที่จะลบใช่ไหม');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
     
    
      
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  //modal
    return(
        <div className='container-Boxitem' >
            {blogs &&
              blogs.map((item, index) => (
                <div className="Boxitem" key={item.id}  > 
                <div className="row1-bloglist">
                <div className="items-mode">{item.mode}</div>
                  <div className="items-Image"  >{item.icons}</div>
                <button className="View-button" onClick={()=>routeChange()}>ดูโพสต์</button>
                  
                  </div>
                  <div className="items-TOPIC">{item.topic}</div>
                  
                 
                  <div className="row4">
                    <div className="items-date">คุณโพสต์เมื่อ {item.date}</div>
                   
                  <img className="Button-delete" src="./IMGpost/delete.png" 
                  // onClick={()=>handleDelete(item.id)}
                  onClick={()=> handleDelete(item.id)}
                  ></img>
                  
                </div></div>
                
              ))}
             
               <Modal
        title="คำเตือน"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
        </div>
    )
}
export default BlogList