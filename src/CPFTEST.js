



import React, { useState } from "react";
import './CPFTEST.css';
import { Select } from 'antd';

function CPFTEST() {
  
  const [hidden,setHidden] = useState(true)
  const hanleClick = () => {
 setHidden(!hidden)
  }
  
  const { Option } = Select;

  function handleChange(value) {
    console.log(value); 
  }

  const [showContainer,SetShowcon] = useState(false)
  const clickShowcon = () => {
SetShowcon(!showContainer)
  }



//   window.addEventListener('scroll',function(){
//  let header = document.querySelector('header');

//  header.classList.toggle('scrolling-active', window.scrollY > 0);
//   } )



  return (
    <div className="CPF-Layout">
        <div className="BG-container">
            <img className='setbg' src='./CPF/mom.jpg'></img>
          <div className="Header-container">
              <img className="setlogo" src='./CPF/logo.jpg'></img>
              <button className="BTN-cpf" onClick={()=>clickShowcon()}>ABOUT CPF<div className='linegreen'></div></button>
              <button className="BTN-cpf">BUSINESS <div className='linegreen'></div></button>
              <button className="BTN-cpf">GOVERNANCE<div className='linegreen'></div></button>
              <button className="BTN-cpf">INVESTORS<div className='linegreen'></div></button>
              <button className="BTN-cpf">SUSTAINABILITY<div className='linegreen'></div></button>
              <button className="BTN-cpf">MEDIA CENTER<div className='linegreen'></div></button>
              <button className="BTN-cpf">CONTACT<div className='linegreen'></div></button>
              <img className="setearth" src='./CPF/earth.png'></img>
              <button className="BTN-cpf A">ENGLISH</button>
              <img className="setsearch" src='./CPF/search.png'></img>

          </div>
          <div className="kitchen">"Kitchen of the World"</div>
          <div className="vision">Vision</div>
          <div className="Staff"><img className="setKey" src='./CPF/Key.png'></img>Staff Login</div>
          </div>
        <div className={showContainer?"hovercontainer":'activehovercpf'}>
          <div className="layout-cpf-sethidden">
            <div className="Abouthidden-c1">
              <text className="Aboutset">ABOUT CPF</text>
              <text className="OPERATESET">CPF operates integrated agro-industrial and food business with its objectives to provide products in high quality and environmentally and socially responsible manner.</text>
              <button className="BO">Businese Overview</button>
              <button className="StaffL">Staff Login<img className='inimgstaff' src='./CPF/blackkey.png'></img> </button>
            </div>
            <div className="Abouthidden-c2">
       <text className="adc2set">Commitment</text>
       <text className="adc2set">At a Glance</text>
       <text className="adc2set">Milestones</text>
       <text className="adc2set">Leadership</text>
       <text className="adc2set">Awards & Recognitions</text>








            </div>
            <div className="linespceacpf"></div>
            <div className="Abouthidden-c3">
            <img className="setmap" src='./CPF/map.png'></img>
              <text className="inversmap">Investment Map</text>
              <text className="contricpf">CPF operates in 17 countries and exports to over 30 countries in five continents, covering more than 3 billion people</text>
            </div>
          </div>

        </div>



          <div className="Sustainability-VDO">
              <img className="setcinema" src='./CPF/cinema.png'></img>
              <div className="SusText">Sustainability VDO</div>
              <img className="plus" src="./CPF/plus.png" onClick={()=>hanleClick()}></img>
          </div>
          <div className={hidden?"Hidden":"activeHid"}>
            <div className="Colum1-Vdo">
                 <div className="txt-sustainnability-vdo">Sustainability VDO</div>
                 <img className="video" src='./CPF/video.png'></img>
            </div>
                  <div className="Colum1-Vdo2">
                  <div className="goodtext">เรื่องดีๆ CPF EP.60 ตอน 1 ทศวรรษ "โครงการ กองทุน ซีพีเอฟ คืนสุข ผู้สูงวัย" ร่วมสร้างสังคมเอื้ออาทร
                     </div>
                     <div className="mar08">08 Mar 2021</div>
                     <div className="Seemore">See more</div></div>
          </div>
          <div className="Cpf-container2">
            <div className="Linecpf"></div>
            <div className="itemstatement">

            <img className="boxstate" src='./CPF/statement.png'></img>
            <img className="boxstate" src='./CPF/global.png'></img>  
            <img className="boxstate" src='./CPF/corn.png'></img>

            </div>
             <div className="GroupPicturecpf">
             <img className="boxstate2" src='./CPF/picture1.jpg'></img>
             <img className="boxstate2" src='./CPF/picture2.jpg'></img>
             <img className="boxstate2" src='./CPF/picture3.jpg'></img>
             </div>
             <div className="detailBoxstate2">
               <div className="detailcpf1 cpfcolor1">
                 <text className="cpf-textsus">CPF Sustainability</text>
                 <text className="cpf-textwe">We pride ourselves in providing safe and high quality foods that promote for all lives on earth</text>
               </div>
               <div className="detailcpf1 cpfcolor2">
                 <text className="cpf-textsus">Investor Relations</text>
                 <text className="cpf-textwe">Rank 1,149th in the Forbes Global 2000 List of the World's Largest and Most Powerful listed Companies 2017</text>
               </div>
               <div className="detailcpf1 cpfcolor1">
                 <text className="cpf-textsus">Business</text>
                 <text className="cpf-textwe">Fresh,Delicious,Convenience...And Safety Food with CP product</text>
               </div>
             </div>
             <div className="Press-Container">
                <text className="ReleasesTxt">Press Releases</text>
              
              
               <div className="Rowpress-1">
               <text className="daymarcpf">16 Mar 2021</text>
              <div className="columnpress-1">
               <text className="GroupcpfTEXT">CP GROUP - CP Foods and Maejo University to collaborate on hemp research and development</text>
               <text className="coporate">CORPORATE NEWS</text></div></div>
               <div className="Linespacecpd"></div>


               <div className="Rowpress-1">
               <text className="daymarcpf">15 Mar 2021</text>
              <div className="columnpress-1">
               <text className="GroupcpfTEXT">CPF receives two IAA Awards for Best CEO and CFO in Agriculture and Food Sector</text>
               <text className="coporate">CORPORATE NEWS</text></div></div>
               <div className="Linespacecpd"></div>

               <div className="Rowpress-1">
               <text className="daymarcpf">14 Mar 2021</text>
              <div className="columnpress-1">
               <text className="GroupcpfTEXT">CP  Vietnam's members received the HCYU  "For Young Generation"medals  </text>
               <text className="coporate">CORPORATE NEWS</text></div></div>
               <div className="Linespacecpd"></div>
               <div className="ViewAll-btn">View All</div>

             </div>
             <div className="Overlay-annual">
             <img className="Annualpicture" src='./CPF/autojune.jpg'></img>
              <div className="GlassReview">
                <div className="Text2019">Annual Review 2019</div>
                <div className="HAStext">CPF has production and processing bases in "17 countries" across the globe</div>
                  <div className="Download">Download</div>
              </div>
             </div>
             <div className="Footercpf">
               <div className="Zonetopcpf">
               <div className="Footercolumn1">
                 <div className="Rowfooter1">
                        <div className="itemAbout1">
                           <text className="Haboutcpf">ABOUT CPF</text>
                           <text className="itemaboutcpf">Commitment</text>
                           <text className="itemaboutcpf">Milestones</text>
                           <text className="itemaboutcpf">Leadership</text>
                           <text className="itemaboutcpf">Awards & Recognitions</text>
                        </div>
                        <div className="itemAbout1">
                           <text className="Haboutcpf">BUSINESS</text>
                           <text className="itemaboutcpf">Feed Business</text>
                           <text className="itemaboutcpf">Farm Business</text>
                           <text className="itemaboutcpf">Food Businese</text>
                           <text className="itemaboutcpf">Catering</text>
                        </div>
                        <div className="itemAbout1">
                           <text className="Haboutcpf">INVESTORS</text>
                           <text className="itemaboutcpf">Financial Highlight</text>
                           <text className="itemaboutcpf">Financial information</text>
                           <text className="itemaboutcpf">News to SET</text>
                           <text className="itemaboutcpf">Investor Services</text>
                           <text className="itemaboutcpf">Publications</text>
                        </div>
                        <div className="itemAbout1">
                           <text className="Haboutcpf deletemargin">SUSTAINABILLITY</text>
                           <text className="Haboutcpf deletemargin">CAREER</text>
                           <text className="Haboutcpf deletemargin">MEDIA CENTER</text>
                           <text className="Haboutcpf deletemargin">CONTACT</text>
                           
                        </div>
                        
                 </div>
                 <div className="Rowfooter2">
           <img className='seticonsCPF' src="./CPF/icon-facebook.png"></img>
           <img  className='seticonsCPF' src="./CPF/icon-Twitter.png"></img>
           <img className='seticonsCPF' src="./CPF/icon-intagram.png"></img>
           <img className='seticonsCPF' src="./CPF/icon-linkedin.png"></img>
           <img className='seticonsCPF' src="./CPF/icon-line.png"></img>
                 </div>
               </div>
               <div className="Footercolumn2">
                  <text className="pfText1">Charoen Pokphand Foods Public</text>
               <text className="pfText2"> Company Limited</text>
               <text className="pfText3">C.P. Tower,313 Silom Road,Bangrak        Bangkok 10500 Thailand</text>
               <text className="pfText4"> 66 (0) 2766 8000</text>
               <text  className="pfText5">consumercenter@cpf.co.th</text>
               <Select 
    labelInValue
    defaultValue={{ value: 'Family' }}
    style={{ width: 250, }}
    onChange={handleChange}
  >
    <Option value="Family">Family Sites</Option>
    <Option value="BrandSite">CP BrandSite</Option>
    <Option value="Star">Five Star Businese</Option>
    <Option value="Chester">Chester's</Option>
    <Option value="Meiji">CP Meiji</Option>
    <Option value="World">CP Food World</Option>
  </Select>,
               </div>
              
               </div>
               <div className="zonebottom">
                 <div className='stylelinecpf'></div>
                 <div className="lastcpf">
                 <div>© Charoen Pokphand Foods PCL. All rights reserved.</div>
                 <div>Terms & Conditions Privacy Notice Site map Staff Login</div>
               </div></div>
             </div>
          </div>
    </div>
  );
}

export default CPFTEST;
