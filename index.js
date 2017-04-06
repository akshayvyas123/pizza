const express=require('express')
const bodyParser=require('body-parser')
const request=require('request')
const app=express()


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
  
  console.log("IN the webhook code ");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    if(req.body.result.action == 'typepizza'){
   console.log("IN the pizza code ");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"What type of pizza would you like?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Veg",
        "payload":"veg "
      },
        {
        "content_type":"text",
        "title":"Non-Veg",
        "payload":" nonveg "
      },
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
    };
})
