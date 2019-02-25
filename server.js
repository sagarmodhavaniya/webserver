const express=require('express');
const hbs=require('hbs');
var app=express();
hbs.registerPartials(__dirname+'/viwes/partials');
app.use(express.static(__dirname+'/public'))
app.set('view engine','hbs')
app.use((req,res,next)=>{
  next();
  
    res.render('maintenance',{
        copyright:'kevit technology',
        mono:9624296269
    })
// next()
})
app.get('/',(req,res)=>{
    
        //res.send("<h1>server was running");
        res.render('home.hbs',{
            copyright:'kevit technology',
            mono:9624296269,
                Title:'Home',
                welmsg:"Welcome to kevit technology"

        })
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        copyright:'kevit technology',
        mono:9624296269,
    })
    
})



app.listen(1111,()=>{
    console.log("server are running on 1111 por")
});