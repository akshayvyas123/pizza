// npm packages 
var unirest = require('unirest');
const express=require('express')
const bodyParser=require('body-parser')
const request=require('request')
const app=express()
var artist = "";
var track = "";

app.set('port',(process.env.PORT))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res)
{
res.send('hello youtube !')
  })

app.get('/webhook/',function(req,res)
{
    if(req.query['hub.verify_token']     === 'my_voice_is_my_password_verify_me')
    {
res.send(req.query['hub.challenge'])
   }
  res.send('No entry')
    
})
app.listen(app.get('port'),function(){
console.log('running on port ',app.get('port'))
}) 


app.post('/webhook/', function (req, res) 
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    if(req.body.result.action == 'getLyrics'){
    artist=req.body.result.parameters.artist;
     track=req.body.result.parameters.track;
    console.log(artist);
    console.log(track);
   
    request(
        {headers : {'Content-Type': 'application/json',
                   'X-Mashape-Key' : 'JuE3m8pqggmshVRyCKCGB3hInjubp1mFB7bjsnQNO4tRSHIb4s'},
        uri : 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist=' + artist + '&q_track=' + track,
         methhod : 'POST',
         timeout: 2000
        }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var a=JSON.parse(body)
        console.log(a.lyrics_body); // Show the HTML for the Modulus homepage.

     var responseBody = 
   {
    //data:{
             "speech":a.lyrics_body,
          "displayText":"there is good news"
    //}           
  // }
  };
    res.write(JSON.stringify(responseBody));
    res.end();
    }
});
    }
   
else(req.body.result.action == 'getJoke'){
    request(
        {headers : {'Content-Type': 'application/json',
                   'X-Mashape-Key' : 'JuE3m8pqggmshVRyCKCGB3hInjubp1mFB7bjsnQNO4tRSHIb4s'},
        uri : 'https://webknox-jokes.p.mashape.com/jokes/random?maxLength=100',
         methhod : 'POST'
        }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var b=JSON.parse(body)
        console.log(b.joke); // Show the HTML for the Modulus homepage.
         // Show the HTML for the Modulus homepage.

     var responseBody = 
   {
   
  };
    res.write(JSON.stringify(responseBody));
    res.end();
    }
});
    
    
}

  // res.send('yay!');
})