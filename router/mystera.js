const express = require('express');
const router = express.Router();

const template = require('../view/mysteryaTemplate');

router.get('/', (req, res) => {
    const html = template.html(template.defaultHeader(23,''),"미스야라우터","");
    res.send(html);
});

router.get('/player/list',(req,res)=>{
    res.send('리스트');
});

router.get('player/:playerNumber',(req,res)=>{
    res.send('28');
});

router.get('/ranking/league/:leagudIndex',(req,res)=>{

});

router.get('/ranking/year/:year',(req,res)=>{

});

module.exports = router;