var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
  fs.readFile('index.html',(er,data)=>{
      if(er){
          console.log(er)
      }else{
          res.write(data)
      };
      res.end()
  })
}).listen(8080,(er)=>{
if(er) throw er 
console.log('8080')
})
