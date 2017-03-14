var express = require('express'),
    bodyParser = require('body-parser'),
    router = express.Router(),
    app = express();

router.get('/', function(req,res){
  res.send('init test');
});

app.use('/', router);

app.listen(3000, function(){
  console.log('Server start');
});
