// const os = require('os');
// const fs = require('fs')
// const user = os.userInfo();
// // console.log(user);
// // console.log(user.username);
// fs.appendFile("username.txt",user.username +"!\n",()=>{console.log("file is created")})
const arr = ['sujeet',22,23,24,25,22,'sujeet','jadu']
const loadsh = require('loadsh');
const filter = loadsh.uniq(arr);
console.log(filter);
const data = loadsh.isString("sujeet");
console.log(data);
