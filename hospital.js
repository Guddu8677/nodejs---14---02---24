const express = require('express');

const app = express();
 const port = 1000;
  const user=[{
  name: "guddu",
  kidney: [{
    healty:false
  }]
  }];

  app.get("/" , function(req , res){

    const gudd  = user[0].kidney;
    res.send(gudd);
  });
 

  app.listen(port , function(){
    console.log(`listen port ${port}`);
  });
