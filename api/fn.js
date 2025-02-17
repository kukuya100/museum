const fs = require("fs");
const { exec } = require("child_process");

module.exports = {
  search: function (params) {
    return new Promise(function (resolve, reject) {
      try {
        let cmd = docsearchPath + ' -q "' + params.query + '"';
        exec(cmd, function (error, stdout, stderr) {
          //resolve(JSON.stringify(JSON.parse(stdout).result));
          resolve(stdout);
        });
      } catch (err) {
        resolve({ status: "fail", err: err });
      }
    });
  },
};

// db.run("INSERT INTO contacts VALUES (?,?,?,?,?)",[nextno,name,tel,address,'noimage.jpg'], function(err) {
//     if (err) {
//         resolve({ status:'fail', message:'연락처 추가 실패 : ' +err });
//     } else {
//         resolve({ status:'success', message:'No(' + this.lastID + ') 데이터 추가 성공!!', no:this.lastID });
//     }
// })
