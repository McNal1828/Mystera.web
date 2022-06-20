const connection = require('./dbconnection');

async function doSql(sql,values=[]){
    return new Promise((resolve, reject)=>{
        const results =  connection.connect(sql,values);
        resolve(results);
    });
}
async function doSqls(sqls, values = []) {
    let results_ = [];
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
