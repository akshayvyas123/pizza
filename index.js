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
       sendPizza(req,res);
    }
    
     if(req.body.result.action == 'getNews')
    {
       sendNews(req,res);
    }
})


function sendPizza(req,res){
       
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
   "text" : "Your pizza has been ordered"
          
       }
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
       
       }   
}


function sendNews(req,res){
    if(req.body.result.resolvedQuery == 'news' || req.body.result.resolvedQuery == 'latest news' )
        {
            console.log("IN the news code now sending user source options");
     var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"Select source",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"CNN",
        "payload":"news cnn"
      },
        {
        "content_type":"text",
        "title":"ESPN",
        "payload":"news espn"
      },
        {
        "content_type":"text",
        "title":"THE HINDU",
        "payload":"news  the hindu"
      }
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
        }
    
    if(req.body.result.parameters.news-source == 'the hindu' ||req.body.result.parameters.news-source == 'cnn' || req.body.result.parameters.news-source == 'espn' )
        {
            var source=""
            if(req.body.result.parameters.news-source == 'the hindu')
                {
                    source="the-hindu"
                }
            if(req.body.result.parameters.news-source == 'cnn')
                {
                    source="cnn"
                }
            if(req.body.result.parameters.news-source == 'espn')
                {
                    source="espn"
                }
            
            queryNews(req,res,source);
        }
}



function queryNews(req,res,source)
{
    
    var urlsource="https://newsapi.org/v1/articles?source="+source+"&sortBy=latest&apiKey=efe7d0056b3f440688d97aa0d13f76f1";
     request(urlsource, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var a=JSON.parse(body)
        console.log(a.articles[0].description); // Show the HTML for the Modulus homepage.

     var responseBody = 
   {
     "data":{
      
       "facebook": {
    "text":"check logs",
    
      
    
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
    

    }
     })
}
             
