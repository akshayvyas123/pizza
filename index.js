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
    
    if(req.body.result.action == 'typepizza')
    {
        
        
        if(req.body.result.resolvedQuery == 'i want to order a pizza'||req.body.result.resolvedQuery == 'pizza') 
            {
        
   console.log("IN the pizza code now sending user veg or non veg option");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"What type of pizza would you like?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Veg",
        "payload":"veg pizza"
      },
        {
        "content_type":"text",
        "title":"Non-Veg",
        "payload":"nonveg pizza"
      },
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
    }
    
    
    
    
    if(req.body.result.resolvedQuery == 'nonveg pizza'||req.body.result.resolvedQuery == 'veg pizza')
       {
              
   console.log("IN the pizza code now sending user topping's option ");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"What type of toppings would you like?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"onions",
        "payload":"onions pizza topping"
      },
        {
        "content_type":"text",
        "title":"Mushroom",
        "payload":"mushroom pizza topping"
      },
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
       
       }
        
        
         if(req.body.result.resolvedQuery == 'onions pizza topping'||req.body.result.resolvedQuery == 'mushroom pizza topping')
       {
              
   console.log("IN the pizza code now sending user crust options");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"What type of crust would you like?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"thick",
        "payload":"thick crust pizza"
      },
        {
        "content_type":"text",
        "title":"thin",
        "payload":"thin crust pizza"
      },
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
       
       }
        
        
         if(req.body.result.resolvedQuery == 'thick crust pizza'||req.body.result.resolvedQuery == 'thin crust pizza')
       {
              
   console.log("IN the pizza code now sending user sauce options");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"What type of sauce would you like?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Pesto",
        "payload":"pesto sauce pizza"
      },
        {
        "content_type":"text",
        "title":"Tandoori",
        "payload":"tandoori sauce pizza"
      },
        {
        "content_type":"text",
        "title":"Alfredo",
        "payload":"alfredo sauce pizza"
      }
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
       
       }
        
       
         if(req.body.result.resolvedQuery == 'alfredo sauce pizza'||req.body.result.resolvedQuery == 'tandoori sauce pizza' || req.body.result.resolvedQuery == 'pesto sauce pizza' )
       {
              
   console.log("IN the pizza code now sending user size options");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"size",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"small",
        "payload":"small size pizza"
      },
        {
        "content_type":"text",
        "title":"medium",
        "payload":"medium size pizza"
      },
        {
        "content_type":"text",
        "title":"large",
        "payload":"large size pizza"
      }
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
       
       }
        
        
        if(req.body.result.resolvedQuery == 'small size pizza'||req.body.result.resolvedQuery == 'medium size pizza' || req.body.result.resolvedQuery == 'large size pizza' )
       {
              
   console.log("IN the pizza code now sending user size options");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
   
           //11111111111111111111111111111111111111111111111111111111111111111111111111
           
              "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title":"Welcome to Peter\'s Hats",
            "image_url":"https://petersfancybrownhats.com/company_image.png",
            "subtitle":"We\'ve got the right hat for everyone.",
            "default_action": {
              "type": "web_url",
              "url": "https://peterssendreceiveapp.ngrok.io/view?item=103",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]      
          }
        ]
      }
              }
//111111111111111111111111111111111111111111111111111111111111111111111111111111111111    
       }
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
       
       }
        
        
        
    
    }
  
})
