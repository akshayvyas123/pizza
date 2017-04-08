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
    
    if(req.body.result.action == 'openWeatherMap')
    {
       sendWeather(req,res);
    }
    
    if(req.body.result.action == 'getLyrics')
    {
       sendLyrics(req,res);
    }
    
    if(req.body.result.action == 'getHotel')
    {
       sendHotel(req,res);
    }
    
     if(req.body.result.action == 'getVideo')
    {
       sendVideo(req,res);
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
    
    if(req.body.result.parameters.newssource == 'the hindu' ||req.body.result.parameters.newssource == 'cnn' || req.body.result.parameters.newssource == 'espn' )
        {
            var source=""
            if(req.body.result.parameters.newssource == 'the hindu')
                {
                    source="the-hindu"
                }
            if(req.body.result.parameters.newssource == 'cnn')
                {
                    source="cnn"
                }
            if(req.body.result.parameters.newssource == 'espn')
                {
                    source="espn"
                }
            console.log(source);
            queryNews(req,res,source);
        }
}



function queryNews(req,res,source)
{
    console.log('inside query news')
   // var urlsource="https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=efe7d0056b3f440688d97aa0d13f76f1";
     request("https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=efe7d0056b3f440688d97aa0d13f76f1", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var a=JSON.parse(body)
        console.log(a.articles[0].description); // Show the HTML for the Modulus homepage.


        
        var inko = []
  console.log(body)
  var i=0;
    a.articles.forEach ( function(ink) {
      if(i<5)
      {
  inko.push({
            "title":ink.title,
            "image_url":ink.urlToImage,
             "subtitle":ink.description,
           "default_action": {
              "type": "web_url",
              "url":ink.url,
               }
  })
      i++
    }
  }
  )
  
  var json = JSON.stringify({
   data:{
   "facebook": {
    "attachment": {
      "type": "template",
      "payload": {
      "template_type":"generic",
        "elements":inko
      }
      }
    }
   },
    source : "text"
  })
        
  
    res.write(json);
    res.end();
    

    }
     })
}


function  sendWeather(req,res)
{
    var city = req.body.result.parameters["geo-city"];
    console.log(city);
    request("http://api.openweathermap.org/data/2.5/weather?q=" +city + "&units=metric&APPID=3dc9a29630ee9a892dcd672335bf6e6b",function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var c = JSON.parse(body);
            var desc=c.weather[0].description;
            var temperature=c.main.temp;
            var icon=c.weather[0].icon;
            
            console.log(desc);
            console.log(icon);
            console.log(temperature);
            
           var img="http://openweathermap.org/img/w/"+icon+".png";
            var txt="The weather is" + desc + "and the temperature is " + temperature +"degree centrigrade"
            console.log(txt);
           var json = JSON.stringify({
   data:{
   "facebook": {
    "attachment": {
      "type": "template",
      "payload": {
      "template_type":"generic",
        "elements":[
           {
            "title":"Weather in "+city,
            "image_url":img,
            "subtitle":txt
           }//element
           ]//element
      }//payload
      }//attachment
    }//facebook
   },//data
    source : "text"
  })//json
            res.write(json);
    res.end();
        
    }
})
}



function sendLyrics(req,res){
    
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
    var lyrics=a.lyrics_body; // Show the HTML for the Modulus homepage.
       var c =  lyrics.replace("******* This Lyrics is NOT for Commercial use *******" , " ");
        c = c.replace("(1409607470331)","");
     var responseBody = 
   {
    //data:{
             "speech":c,
          "displayText":"there is good news"
    //}           
  // }
  };
    res.write(JSON.stringify(responseBody));
    res.end();
    }
});
    
    
}


function sendHotel(req,res){
    if(req.body.result.resolvedQuery == 'book a hotel'){
        if(req.body.result.parameters["geo-city"]!=" " && req.body.result.parameters.date!=" " && req.body.result.parameters.number!=" " ){
            
            
            console.log("hi");
             var responseBody = 
   {
    "data":{
      
       "facebook": {
    "text":"Select hotel chain",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Taj",
        "payload":"hotel taj"
      },
        {
        "content_type":"text",
        "title":"marriott",
        "payload":"hotel marriott"
      },
        {
        "content_type":"text",
        "title":"novotel",
        "payload":"hotel novotel"
      }
      
    ]
  }          
   },
     "source" : "text"
  };
    res.write(JSON.stringify(responseBody));
    res.end();
             
        }
    }
    
}

function sendVideo(req,res)
{
    console.log("INSIDE VIDEO MODULE");
    if(req.body.result.resolvedQuery == 'youtube videos'){
        
        var channel = req.body.result.parameters.val;
        
        request("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCsojMsfWiHhc4RwlXmfGBbNy747m5oAk9&part=snippet&q=" + channel , function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var a=JSON.parse(body)
      var inko = []
        var i=0;
     a.items.forEach ( function(ink)
     {
        if(i<5)
        {
            if(ink.id.kind == "youtube#channel")
                {
                     id = "channel/"+ink.id.channelId
                }
            else{
                 id = "watch?v="+ink.id.videoId
            }
            
            
            inko.push({
                "title":ink.snippet.title,
            "image_url":ink.snippet.thumbnails.high.url,
             "subtitle":ink.snippet.description,
           "default_action": {
              "type": "web_url",
              "url":"https://www.youtube.com/"+id,
               }
                
                
                
            })
            i++;
        }
                         })
        
        var json = JSON.stringify({
   data:{
   "facebook": {
    "attachment": {
      "type": "template",
      "payload": {
      "template_type":"generic",
        "elements":inko
      }
      }
    }
   },//data
    source : "text"
  })//json
       console.log(json)

  console.log(inko)
  response.end(json)
    }
})
    }
}
