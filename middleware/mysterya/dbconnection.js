module.exports={
connect : async (sql,values=[])=>{
    const mysql = require('mysql2/promise');
    let results=[];
    const conn = await mysql.createConnection({
    host : '192.168.0.251',
    user : 'dbwj',
    password : 'votmdnjem',
    database : 'mysterya',
    charset : 'utf8',
    port : 3336,
    multipleStatements : false,
    });
    console.log('시작');
    const [rows,fields] = await conn.execute(sql,values);
    results.push(rows);
    console.log('끝');
    // console.log(rows[0]);
    conn.end();
    return results;
    },
};