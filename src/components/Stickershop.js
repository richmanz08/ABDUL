import Countdown from 'antd/lib/statistic/Countdown';
import React, { useState } from 'react'
import '../ShopScreen.css';

function Stickershop() {
//  const [sortS, setSorts] = useState(false);
//   const showSorts = () => setSorts(!sortS);
    const StickerALL = [
        { id :112,
          sticker: (
            <img
              className="setSticker-size-shop"
              src="./IMGinventory/sticker1.png"
            ></img>
          ),
          name: "น้องหมีนอนหลับ แบบที่1",
          price: 10,
        },
        { id:113,
          sticker: (
            <img
              className="setSticker-size-shop"
              src="./IMGinventory/sticker2.png"
            ></img>
          ),
          name: "น้องหมีนอนหลับ แบบที่2",
          price: 5,
        },
        { id:119,
          sticker: (
            <img
              className="setSticker-size-shop"
              src="./IMGinventory/sticker3.png"
            ></img>
          ),
          name: "น้องหมีนอนหลับ แบบที่3",
          price: 2,
        },
        { id:115,
          sticker: (
            <img
              className="setSticker-size-shop"
              src="./IMGinventory/sticker4.png"
            ></img>
          ),
          name: "น้องหมีนอนหลับ แบบที่4",
          price: 13,
        },
       
      ];

      const DBcheckSticker =[ 
        { id :112,
        sticker: (
          <img
            className="setSticker-size-shop"
            src="./IMGinventory/sticker1.png"
          ></img>
        ),
        name: "น้องหมีนอนหลับ แบบที่1",
        price: 10,
      },
      { id:113,
        sticker: (
          <img
            className="setSticker-size-shop"
            src="./IMGinventory/sticker2.png"
          ></img>
        ),
        name: "น้องหมีนอนหลับ แบบที่2",
        price:5,
      },

      ]
      const [selected, setSelected] = useState();
      const [TradeCTN, SetTrade] = useState(false);
      const showTrade = (data) => {
        SetTrade(!TradeCTN);
        setSelected(data);
        SetErrfail(false)
        SetErr(false)
        
      };
  
      const[sumsticker,setSticker] = useState(StickerALL.length)
     const[price,Setprice] = useState('')
     const [idSTK,SetStkid] = useState([])
     const[A,setA] = useState()
     const[starUs,setUs] = useState('5')
     const Paypal =(e) => {
       
       Setprice(e.price)
       functionCheckSTk()
       SetStkid(e.id)
     }  
      const functionCheckSTk =() => {

           if(idSTK==112 || idSTK==113){
              return showMessagefail()
           }
           else {
             return showMessage()
           }
          
          }
      const clearbill = () =>{
        
        showMessage()
      } 
    const[VisebilityMessage,SetErr] = useState(false)
    const showMessage = () => {
      SetErr(true)
      SetErrfail(false)
      CountDown()
    }
    const[VisebilityMessagefail,SetErrfail] = useState(false)
    const showMessagefail = () => {
      SetErrfail(true)
      SetErr(false)
      
    }
    
    const  CountDown = () => {
      return setUs(starUs-price)
    }
   
     
   return (
    <div className="Layout-StickerShop">
        
        
        <div>
          <text>เทส{idSTK} ดาวคงเหลือ{starUs} ราคา price {price}</text>
        <text className="header-all-list-txt"> item all {sumsticker} pcs</text>
            <div className="classname-container">
              {StickerALL &&
                StickerALL.map((item, index) => (
                  <div
                    className="bodycontainer-sticker-shop Eventclicked"
                    onClick={() => {
                      showTrade(index);
                    }}
                
                  
                  >
                    <div className="box-sticker-shop">{item.sticker}</div>

                    <div className="box-name-shop">
                      <div className="name-s-shop">ชื่อสติ้กเกอร์</div>
                      <div className="stickername-s-shop">{item.name}</div>
                      <div className="star-container">
                        <img
                          className="sizestar-shop"
                          src="../IMGshop/star.png"
                        ></img>
                        {item.price}
                      </div>
                    </div>
                  </div>




                ))}
            </div></div>
            
                  <div className="Largbar"></div>
                  <div className="Want-tohide">
            {StickerALL &&
              StickerALL.map((item, index) => (
                <div className={TradeCTN && selected === index? "Trade-container activeTrade "
                : "Trade-container"}
                 
                >
                  <div className="column1-trade">
                    <div className=" stcicker-TradeShow">{item.sticker}</div>
                  </div>
                  <div className="column2-trade">
                    <text className="txt-trade-name-stk">ชื่อสติ้กเกอร์</text>
                    <text className="item-name-trade">{item.name}</text>
                    <text className="txt-howmuch-star">
                      จำนวนดาวที่ต้องใช้{" "}
                    </text>
                    <div className="group-row-howmuchstar">
                      <img
                        className="sizestar-shop"
                        src="../IMGshop/star.png"
                      ></img>
                      {item.price} starpoint.
                    </div>
                    <text className="detail-item-stk">
                      รายละเอียด :
                      สติ้กเกอร์นี้คุณสามารถใช้ได้ตลอดไม่มีวันหมดอายุ
                      และคุณสามารใช้งานได้ในส่วนของการตอบโพสต์หรือแสดงความคิดเห็น
                      และสามารถตรวจสอบสติ้กเกอร์ของคุณได้ใน "กระเป๋า" ของคุณ
                    </text>
                  </div>
                  <div className="column3-trade">
                    <text className="set-font-total">จำนวนดาวของคุณที่เหลืออยู่ในตอนนี้ {starUs}  <img
                        className="sizestar-shop"
                        src="../IMGshop/star.png"
                      ></img>starpoint.</text>
                
                      <div className={VisebilityMessage?"Messagefinish":"displaymessagefinish"}>
                       <div className="finishtext">แลกเปลี่ยนสำเร็จ</div> 
                        </div>
                        <div className={VisebilityMessagefail?"Messagefail":"displaymessagefail"}>
                       <div className="failtext">คุณมีสติ้กเกอร์นี้เเล้ว</div> 
                        </div>
                  <button className="butten-accept-trade"  onClick={()=>Paypal(item)} >แลกเปลี่ยน</button></div>
                  
                </div>
              ))}
 </div>
       
    </div>
  );
}
export default Stickershop;