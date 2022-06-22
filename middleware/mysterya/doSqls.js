const connection = require('./dbconnection');
let results_ = [];

async function doSql(sql,values=[]){
    // console.log(sql);
    return new Promise((resolve, reject)=>{
        const results = connection.connect(sql,values);
        // console.log(results);
        resolve(results);
    });
}
async function doSqls(sqls, values = []) {
    let promises = [];
    for (var i = 0; i < sqls.length; i++) {
        promises.push(doSql(sqls[i], values[i]));
    }
    await Promise.all(promises).then((results) => {
        results_ = results;
    });
    return results_;
}

exports.doSqls = doSqls;
