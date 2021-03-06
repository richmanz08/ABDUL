// {datagame &&
//     datagame.map((item, index) => (
      
//       <div className="itemlistAll-container">
//         <div className="zonepicture">
//           {item.picture}
          
//         </div>
//         <div className="zonecontent">
//           <div className="Text-content">{item.Topic} </div>
//           <div className="whoareyou">
//            <div onClick={() => {
//              showExtension(index);
//            } }>{item.profile}</div>
//          <div  className={extension && selected === index?  "extension-container activeextension ":"extension-container"  }>
//             <div onClick={showExtension}>ดูนามบัตร</div>
//             <div onClick={showExtension}>รายงานความไม่เหมาะสม</div>
//          </div>
            
//             <div className="nameuser-profilt">{item.name}</div>
//             <div>12/02/2556</div>
//             <div className="likeandchat-container">
//               <img
//                 className="setsize-likeandchat"
//                 src="./IMGmodepng/like.png"
//               ></img>
//               <div className="setmargin1">{item.like}</div>
//               <img
//                 className="setsize-likeandchat"
//                 src="./IMGmodepng/chat.png"
//               ></img>
//               <div className="setmargin2">{item.comment}</div>
//             </div>
//           </div>
//         </div>
//         <div className="Show-more-Modepage">
//           <img className="setsize-smm" src="./IMGmodepng/eye.png"></img>
//         </div>
//       </div>
//     ))}
    //                                                                                                         MODEPAGE SCREEN

    // import {useHistory} from 'react-router-dom';    ***ทำให้กลับไปหน้าก่อนหน้านี้***
    // const history =useHistory()
    // onClick={()=>history.goBack() 