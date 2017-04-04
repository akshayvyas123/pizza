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
    
    if(req.body.result.action == 'typepizza'){
   
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"What type of pizza would you like?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Veg",
        "payload":"I Want a veg pizza "
      },
        {
        "content_type":"text",
        "title":"Non-Veg",
        "payload":"I Want a nonveg pizza "
      }
    ]
  }
             
   }
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
