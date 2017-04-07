var express = require('express'),
    app = express(),
    dir = [__dirname, 'build'].join('/')

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
  res.sendFile(dir + '/index.html')
})

app.get('/faq', function(req, res){
  res.sendFile(dir + '/faq.html')
})

app.use('/javascripts', express.static(dir + '/javascripts'));
app.use('/images', express.static(dir + '/images'));
app.use('/stylesheets', express.static(dir + '/stylesheets'));

app.set('port', process.env.PORT || 8100);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
