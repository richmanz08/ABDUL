import React, { useState } from 'react'
import '../ADMIN.css';


function Dashbord() {

    const dataSystemALL = [
        {
            Totaluser:125,
            Totalpost:652,
            MosthitSticker:'น้องหมีตีพุง',
            MosthitPortrait:'วินเทจแบบที่ 1'

        }
    ]

  return (
    <div className="Layout-Dashbord">
        {dataSystemALL && dataSystemALL.map((item,index) =>(
            <div className="dashbordCSS">
                <div >ภาพรวมระบบบริหารจัดการกระทู้</div>
                <div className="Boxdashbord-container">
                    <div className="Group-DITEM">
                        
                <div className="Boxdashitem">{item.Totaluser} คน</div>
                <text className="settext-diitem">จำนวนผู้เข้าใช้งานระบบทั้งหมด</text>
                
                </div>
                <div className="Group-DITEM">
                <div className="Boxdashitem">{item.Totalpost} กระทู้</div>
                <text className="settext-diitem">จำนวนกระทู้ในระบบทั้งหมด</text>
                </div>
                <div className="Group-DITEM">
                <div className="Boxdashitem">{item.MosthitSticker}</div>
                <text className="settext-diitem">สติ้กเกอร์ที่ได้รับความนิยมมากที่สุด</text>
                </div>
                <div className="Group-DITEM">
                <div className="Boxdashitem">{item.MosthitPortrait}</div>
                <text className="settext-diitem">กรอบโปรไฟล์ที่ได้รับความนิยมมากที่สุด</text>
                </div>
                </div>
             {/* <text>จำนวนผู้เข้าใช้งานระบบ : {item.Totaluser}</text>
             <text>จำนวนกระทู้ทั้งหมด : {item.Totalpost}</text>
             <text>สติ้กเกอร์ที่ได้รับความนิยมมากที่สุด : {item.MosthitSticker}</text>
             <text>กรอบโปรไฟล์ที่ได้รับความนิยมมากที่สุด: {item.Totalpost}</text> */}
            </div>
        ) ) }
    </div>
  );
}
export default Dashbord;