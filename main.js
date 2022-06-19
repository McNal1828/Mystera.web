// const fs = require('fs');
// const path = require('path');
// const qs = require('querystring');

const express = require('express');
// const sanitizeHtml = require('sanitize-html');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const MysteryaRouter = require('./router/mystera');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(compression());
app.use(helmet());
app.use(express.static('static'));


app.use('/Mysterya', MysteryaRouter);

app.get('/',(req,res)=>{
    res.send('기본페이지');
});

app.use((req,res,next)=>{
    res.status(404).send('페이지를 찾을 수 없습니다');
});

app.use((err,req,res,next)=>{
    //인자가 4개인 함수(미들웨어)는 에러를 핸들링하기위한 함수(미들웨어)라고 정의되있음
    res.status(500).send('에러가 발생하였습니다');

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});