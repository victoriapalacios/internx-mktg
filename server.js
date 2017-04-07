var express = require('express'),
    app = express();

var isDev = process.argv[2] === 'dev'

if (!isDev){
  app.get('*',function(req,res,next){
    if(req.headers['x-forwarded-proto'] != 'https'){
      var url = ['https://', req.hostname, req.url].join('');
      res.redirect(url)
    } else {
      next() /* Continue to other routes if we're not redirecting */
    }
  })
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.get('/faq', function(req, res){
  res.sendFile(__dirname + '/faq.html')
})

app.use('/javascripts', express.static(__dirname + '/javascripts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));

app.set('port', process.env.PORT || 8100);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
