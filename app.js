const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

require('dotenv').config()
const MONGODB_URI_PROD=process.env.MONGODB_URI_PROD
console.log("mongo uri",MONGODB_URI_PROD);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',indexRouter);

const mongoURI = MONGODB_URI_PROD;
// const mongoURI = "mongodb://localhost:27017/todo-demo";

mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("DB connection fail", err);
  });

  app.listen(5000,()=>{
    console.log("server on 5000");
  });

  // 1.회원가입
  // 유저가 이메일, 패스워드, 유저이름 입력해서 보냄
  // 받은 정보를 저장함 (데이터베이스 모델 필요)
  // 패스워드를 암호화시켜서 저장

  //1. 라우터
  //2. 모델
  //3. 데이터를 저장(이미 가입된 유저 유무,패스워드 암호화)
  //4. 응답을 보낸다