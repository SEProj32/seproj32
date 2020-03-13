var http = require('http');
var url = require('url');
var mysql = require('mysql');
const AWS  = require('aws-sdk');
const fs = require('fs');
const path= require('path');


AWS.config.update({
  "accessKeyId":"ASIAWNTJQVZTDZKTPSNT",
    "secretAccessKey":"XwU2urRxlIC0d+m+HLDgdXTT1a6pikBUr34uuBNN",
    "sessionToken":"FQoGZXIvYXdzEPX//////////wEaDObuZ9K3cLlunAK1CCL8BFKCD/yIHTo85GpWooVyH7Bk5PEZ1lDjQaaDuq7WtYAGfyu7FmuxbEqm9ZQDYodpjNCWTsjvyeOOM3rlKdgKuk5V8OFLv7lynoeN4a7+1RCIvZpXReHpvg2UgBmX7wtckvc/mlehRBAJimX0oBcs2DtKxtUNR85FxxA+W3efOHpXGR/NfjFcHN/kgMGwx/5p92m76PqQGheE181GXyXGMmDBFJIvKhbNctWX8OCxIqlALuvO+DR1IH4/ptY3sPDhOOu85fvXMgzL42dJr6cbVQOlXvyCJbcfmgtB0gIkTQRwF6K/S9VBlyObTMAHckN5ILxNQ94nqoW9TwHItma3rwTzMP3oSx2lLhCE9u8/Pnac5V1QqOsFyc8rQncgGk9YmgRa2Tlt+2dZVyimpJqdes+Dk8s+/kmqoTDEO17lz96gXGDOf1l9nfVmqjVy721bV6V/1MnJl1mfU3OmiFX8XtjKsuB1qf2K+kxGQwXAaDqL5NlPd27OdjFB4fATXQHL1mWQNWmmcx8V9QbtoVOiDLq8MVWvqdEmNRUpKS5moOvsZni1gKCWCu1ujbgd4RDBE3SUMbZINweeIiWr2gw1M6P1qDtp9AU1Hrf7V9FDXWBnrnHOgFVYHqrpKDj6gLlgItAf2RpbhG1ahXP+mQ8Vqr6dlwczq75OdaubNyjwrLh1NexXi2hGisUsroBPrENOGyIBJP35hy/0DD/rScxakekoXxd6cOSvOdEcBGk85GaZWKphErQ7eED9tPMmSbsI9BgqI/hbge124kOwpVHBk0zEsiCXkvdf/H8T5ME/n1NvALtZSxtgrJ/2gIrHi+uf6POQUA2UoSpFgsljQCjezubqBQ==",
    "region":"us-east-1"
    })


    

var redir = false;
var length = 0;
var length2 = 0;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    res.write('<br/>'+ q.entdate + '<br/>' + q.days + '<br/>' + q.country + '<br/>' + q.sta);


    function qu(){


      var connection = mysql.createConnection({
        host     : "localhost",
        user     : "root",
        password : "jimmy1999",
        database : "project",
        });
    
    
    
        var records = [[q.entdate,q.days,q.country,q.sta]];
    
        if(records[0][0]!=null)
        {
        connection.query("INSERT INTO data1 (da,days,country,state) VALUES ?", [records], function (err, result, fields) {
        
        if (err) throw err;
        
        console.log(result);
        });
        }
    
        connection.connect(function(err) {
            if (err) {
              console.error('Database connection failed: ' + err.stack);
              return;
            }
            console.log('Connected to database.');
        });
    
    
         connection.query('SELECT * from data1 where days>30', function (error, results, fields) {
            if (error) throw error;
            length=results.length
    
            for(i=0;i<length;i++)
            {
                console.log('\nThe solution is: ', results[i].days);
            }
    
    
            // if(length > 0)
            // {
            //   console.log('redir enter days');
            //   redir= true;
            // }
    
          
          });
    
          connection.query('delete from data1 where days>30;',function (error2,temp,feilds2){
            if (error2) throw error2;
          });
          
    
    
          connection.query('select * from data1 where da>(SELECT CONVERT(NOW(), DATETIME));', function (error, results, fields) {
            if (error) throw error;
            length2=results.length;
    
            for(i=0;i<length2;i++)
            {
                console.log('\nThe solution is: ', results[i].days);
            }
    
    
            // if(length2 > 0)
            // {
            //     console.log('redir enter date');
            //   redir= true;
            // }
    
          });
    
          res.end(); 
    
    
          connection.query('delete from data1 where da>(SELECT CONVERT(NOW(), DATETIME));',function (error2,temp,feilds2){
            if (error2) throw error2;
            //console.log('deleted'+ temp);
          });
    
       
    
        
        connection.end();





    }


    function qu2(){
      if((length === 0) && (length2 === 0))
      {
        var s3=new AWS.S3({apiVersion:'2006-03-01'});
        var filepath="./image/"+q.loc;
        var params={
        Bucket:"swaroopsample3",
        Body: fs.createReadStream(filepath),
        //Key:"Data1/"+path.basename(filepath),
        Key:path.basename(filepath),
        }
        s3.upload(params,function(err,data)
        {
          if(err)
          {
            console.log("Error",err)
          }
          if(data)
          {
            console.log("Success")
          }
        })
      }
      else
      {
        console.log("redir == false");
      }
      
     
    }
    

    qu();



    setTimeout(qu2, 20000);






}).listen(8081);
