const express = require("express");
const doSqls = require("../middleware/mysterya/doSqls").doSqls;
const router = express.Router();
const ejs = require("ejs");


const connect = require("../middleware/mysterya/dbconnection").connect;

router.get("/", (req, res) => {
    const cookies = req.cookies;
    let main = "";
    ejs.renderFile("view/mysterya/index.ejs", (err, str) => {
        main = str;
    });
    res.render("mysterya/mainLayout.ejs", { headerMyNumber: cookies.mynumber, main: main });
});

router.post("/",(req,res)=>{
    const myNumber = req.body.mynum;
    res.cookie('mynumber',myNumber,{
        maxAge : 1000*60*60*24*7,
        path : /Mysterya/,
    });
    res.status(302).redirect('/Mysterya');
});

router.get("/player/list", async (req, res) => {
    const cookies = req.cookies;
    let sql=`select * from player`;
    if(req.query.cat == 'num'){
        sql = `select * from player where number like '%${req.query.input}%'`;
    }else if(req.query.cat == 'name'){
        sql = `select * from player where name like '%${req.query.input}%'`;
    }
    console.log(sql);
    console.log(req.query.cat);
    console.log(req.query.input);
    const results = await connect(sql,[]);
    // console.log(results);
    let main = "";
    ejs.renderFile(
        "view/mysterya/playerList.ejs",
        { PL: results },
        (err, str) => {
            main = str;
        }
    );
    res.render("mysterya/mainLayout.ejs", { headerMyNumber: cookies.mynumber, main: main });
});

router.get("/player/:playerNumber", async (req, res) => {
    const cookies = req.cookies;
    const playerNumber = req.params.playerNumber;
    let sqls = [];
    let values = [];
    sqls.push(`select * from player where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from summary where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from league_summary where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from year_summary where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_turn where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_balltotal where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_out where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_tobase where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_etc where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_ballcount where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_howbase2o3 where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_howbase0o1 where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_howbase where number = ${playerNumber}`);
    values.push([]);
    sqls.push(`select * from pa_direction where number = ${playerNumber}`);
    values.push([]);
    const results = await doSqls(sqls, values);
    // console.log(results[2]);
    let main = "";
    ejs.renderFile(
        "view/mysterya/playerDetail.ejs",
        {
            playerDetail: results[0][0],
            ls: results[1][0],
            ll: results[2],
            ly: results[3],
            lpt: results[4],
            lpbt : results[5],
            lpo : results[6],
            lptb : results[7],
            lpetc : results[8],
            lpbc : results[9],
            lphb2o3 : results[10],
            lphb0o1 : results[11],
            lphb : results[12],
            lpd : results[13],
        },
        (err, str) => {
            main = str;
        }
    );
    res.render("mysterya/mainLayout.ejs", { headerMyNumber: cookies.mynumber, main: main });
});

router.get("/ranking/league/:leagudIndex", (req, res) => {});

router.get("/ranking/year/:year", async (req, res) => {
    let sqls = [];
    let values = [];
    sqls.push(`select * from ra_yearlist`);
    values.push([]);
    sqls.push(`select * from numposition`);
    values.push([]);
    sqls.push(`select * from player`);
    values.push([]);
    const results = await doSqls(sqls, values);
    console.log(results[0][0][0].name);
    res.end("ss");
});

module.exports = router;
