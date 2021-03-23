import React, { useState } from 'react'
import '../ADMIN.css';


function Account() {
    const user =[
        {
            username:'messi',
            password:'0021a44'
        },
        {
            username:'Ronaldo',
            password:'0021a44'
        },
        {
            username:'Nadech',
            password:'0021a44'
        },
        {
            username:'Alogkoen',
            password:'0021a44'
        },
        {
            username:'starup',
            password:'0021a44'
        },
        {
            username:'uni',
            password:'0021a44'
        },
        {
            username:'jbl',
            password:'0021a44'
        },
        {
            username:'fottball',
            password:'0021a44'
        },
        {
            username:'arssaaaaa',
            password:'0021a44'
        },
        {
            username:'messi',
            password:'0021a44'
        },
        {
            username:'Ronaldo',
            password:'0021a44'
        },
        {
            username:'Nadech',
            password:'0021a44'
        },
        {
            username:'Alogkoen',
            password:'0021a44'
        },
        {
            username:'starup',
            password:'0021a44'
        },
        {
            username:'uni',
            password:'0021a44'
        },
        {
            username:'jbl',
            password:'0021a44'
        },
        {
            username:'fottball',
            password:'0021a44'
        },
        {
            username:'arssaaaaa',
            password:'0021a44'
        },
        {
            username:'messi',
            password:'0021a44'
        },
        {
            username:'Ronaldo',
            password:'0021a44'
        },
        {
            username:'Nadech',
            password:'0021a44'
        },
        {
            username:'Alogkoen',
            password:'0021a44'
        },
        {
            username:'starup',
            password:'0021a44'
        },
        {
            username:'uni',
            password:'0021a44'
        },
        {
            username:'jbl',
            password:'0021a44'
        },
        {
            username:'fottball',
            password:'0021a44'
        },
        {
            username:'arssaaaaa',
            password:'0021a44'
        },
        {
            username:'messi',
            password:'0021a44'
        },
        {
            username:'Ronaldo',
            password:'0021a44'
        },
        {
            username:'Nadech',
            password:'0021a44'
        },
        {
            username:'Alogkoen',
            password:'0021a44'
        },
        {
            username:'starup',
            password:'0021a44'
        },
        {
            username:'uni',
            password:'0021a44'
        },
        {
            username:'jbl',
            password:'0021a44'
        },
        {
            username:'fottball',
            password:'0021a44'
        },
        {
            username:'arssaaaaa',
            password:'0021a44'
        },
    ]

  return (
    <div className="Layout-Account">  
    
    <div className="table-css">
    <text className="header-username">Username</text>
    <div className="AC-barline"></div>
    <text className="header-password">Password</text>
    <div className="AC-barline"></div>
    <text className="header-delete">delete</text></div>
    {user&& user.map((item,index) => (
        <div  style={{display:'flex',flexDirection:'column'}}>
<div className="rowtable">
    <text className="itemusername">{item.username}</text>
    <text className="itempassword">{item.password}</text>
    <button className="itemdelete">ลบบัญชีผู้ใช้รายนี้</button></div>
    <div className="barRe setpurmmargin"></div></div>
    ))}

    </div>
  );
}
export default Account;