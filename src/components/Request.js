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
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112512,
      username: "arnon",
      topic: "หัวข้อนีเได้รับการยกย่องให้ป็นที่หนึ่งในวงการด้านอาหารและเด็กและเยาวชนสนับสนุนทุดเ้านทางด้านของรัฐบาลและเอกกเสาสวรส ครับถ้างั้นแนะนำให้มาทานร้านนี้ได้เลยครับ อร่อยแน่นอนก",
      Descriptions: "ดอนนี่ ฟาน เดอ เบ็ค มิดฟิลด์ แมนเชสเตอร์ ยูไนเต็ด สโมสรดังของศึก พรีเมียร์ลีก อังกฤษ ต้องการย้ายออกจากทีมในช่วงซัมเมอร์นี้ ตามรายงานของ เดลี่ สตาร์ สื่อของเมืองผู้ดีฟาน เดอ เบ็ค ย้ายมาอยู่กับ แมนฯ ยูไนเต็ด เมื่อช่วงซัมเมอร์ ปีก่อน ด้วยค่าตัวในเบื้องต้น 35 ล้านปอนด์ (ประมาณ 1,400 ล้านบาท) ซึ่งตอนนั้นหลายคนก็มองว่าเขาจะเป็นแนวรุกตัวหลักของทีมได้หลังจากที่ทำผลงานได้น่าประทับใจทั้งกับ อาแจ็กซ์ อัมสเตอร์ดัม และทีมชาติฮอลแลนด์มาพักหนึ่ง อย่างไรก็ตาม มิดฟิลด์ชาวดัตช์กลับไม่ได้รับโอกาสลงเล่นมากเท่าที่ควร โดยเขาเพิ่งได้ลงเล่นในลีกให้ต้นสังกัดไปเพียง 13 เกม แถมได้เป็นตัวจริงแค่ 2 นัดเท่านั้นทั้งที่ในช่วงหนึ่ง ปอล ป็อกบา กองกลางคนดังของ แมนฯ ยูไนเต็ด มีอาการบาดเจ็บจนอดลงเล่นไปหลายเกม ขณะที่ช่วงไม่กี่สัปดาห์ที่ผ่านมา ฟาน เดอ เบ็ค ก็โดนโรคเดี้ยงเล่นงานเช่นกันทั้งนี้ เดลี่ สตาร์ บอกว่าตอนนี้ ฟาน เดอ เบ็ค กลัวว่าเขาไม่มีอนาคตระยะยาวกับทีมแล้ว รวมถึงกังวลว่าจะหลุดจากทีมชาติฮอลแลนด์ชุดเล่นศึก ยูโร 2020 โดยเขาจะหาทีมใหม่ในช่วงซัมเมอร์นี้ และถึงขั้นเตรียมที่จะคุยกับ เอ็ด วู้ดเวิร์ด รองประธานบริหารของทีมก่อนที่ฤดูกาลนี้จะจบลงด้วย เพราะอยากได้คำตอบว่าทำไมเขาถึงไม่ค่อยได้รับโอกาสลงเล่นมากเท่าไหร่ ซึ่งสื่อเจ้าเดิมเสริมว่าที่จริงแล้ว โอเล่ กุนนาร์ โซลชา ผู้จัดการทีม แมนฯ ยูไนเต็ด ก็ไม่ได้อยากได้ ฟาน เดอ เบ็ค มาร่วมทีมมากมายอะไรนักตั้งแ",
      picture:'./IMGmodepng/pubg2.jpg',
    },
    {
      postID: 112513,
      username: "messi",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },
    {
      postID: 112514,
      username: "neymar",
      topic: "หัวข้อ",
      Descriptions: "รายละเอียด",
      picture: "",
    },

  ];

  return (
    <div className="Layout-Request">
      <div className="Table-Style-Request">
        <text className="lundub">ลำดับ</text>
        <div className='tabSpaceReH'></div>
        <text className='kratuid'>กระทู้ไอดี</text>
        <div className='tabSpaceReH'></div>
        <text className='whorequest'>ผู้ร้องขอ</text>
        <div className='tabSpaceReH'></div>
        <text className='topicHstyle'>หัวข้อ</text>
        <div className='tabSpaceReH'></div>
        <text className='accept-view-delete'>ดู/ยืนยัน/ลบ</text>
      
      </div>
      {RequestPostList &&
        RequestPostList.map((item, index) => (
        <div style={{display:'flex',flexDirection:'column'}}>
          <div className="setBoxrequest">
            <text className="lundub-i">{index + 1}</text>
            <text className='kratuid-i'>{item.postID}</text>
            <text  className='whorequest-i'>{item.username}</text>
            <text className='topicHstyle-i'>{item.topic}</text>
            <div className='accept-view-delete-i'>    
            
            <button className="btn-chekRequest"
              
              onClick={() => {
                ShowCheck(index);
              }}
            >
              ตวรจสอบ
            </button>
            <button  className='btn-cclickdelete'>
              delete
            </button>
            <button className='btn-acceptRequest'>
              ยืนยัน
            </button>
            
            
              </div>
             
              
          </div><div className="barRe"></div></div>
          
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
            <div className="Checkbox-View">

              <text>ลำดับ : {index + 1} </text>
              <img className="setCloseCheckmodal" src='./IMGadmin/close.png' onClick={()=>ShowCheck()}></img>
              <text>กระทู้ไอดี : {item.postID}</text>
              <text>ยูสเซอร์เนม : {item.username}</text>
             
              <img className="showpicture-forchek" src={item.picture} alt='ไม่มีรูปภาพ'></img>
              <text className="topic-forcheck">หัวข้อ : {item.topic} </text>
              <text className="Detail-forcheck">รายละเอียด : {item.Descriptions}</text>
               
            </div>
           
          </div>
          
          
       
            ))}
    </div>
  );
}
export default Request;
