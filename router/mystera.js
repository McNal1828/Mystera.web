const express = require('express');
const doSqls = require('../middleware/mysterya/doSqls').doSqls;
const router = express.Router();
const ejs = require('ejs');

const connect = require('../middleware/mysterya/dbconnection').connect;

router.get('/', (req, res) => {
    let main='';
    ejs.renderFile('view/mysterya/index.ejs', (err,str)=>{
        main = str;
    });
    res.render('mysterya/mainLayout.ejs',{headerMyNumber:28, main:main});
});

router.get('/player/list', async (req,res)=>{
    // const sqls =[];
    // sqls.push(`select * from player`);
    const sql=`select * from player`;
    const results = await connect(sql);
    let main='';
    ejs.renderFile('view/mysterya/playerList.ejs',{PL:results[0]}, (err,str)=>{
        main = str;
    });
    res.render('mysterya/mainLayout.ejs',{headerMyNumber:28, main:main});
});

router.get('/player/:playerNumber',async (req,res)=>{
    const playerNumber = req.params.playerNumber;
    const sqls =[];
    sqls.push(`select * from ra_yearlist`);
    sqls.push(`select * from numposition`);
    sqls.push(`select * from player`);

    const results = await connect(sqls);
    console.log("완료");
    // res.render('../view/mysterya/playerDetail.ejs');
    res.render('mysterya/playerDetail.ejs');
});

router.get('/ranking/league/:leagudIndex',(req,res)=>{

});

router.get('/ranking/year/:year',async (req,res)=>{
    let sqls=[];
    let values=[];
    sqls.push(`select * from ra_yearlist`);
    values.push([]);
    sqls.push(`select * from numposition`);
    values.push([]);
    sqls.push(`select * from player`);
    values.push([]);
    const results = await doSqls(sqls,values);
    console.log(results);
    res.end('ss');
});

module.exports = router;