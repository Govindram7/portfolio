const express = require('express')
const app = express();
const hbs = require('hbs')
const path = require('path')
const port = process.env.port|| 8000 ;

// public path
const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");


app.set('view engine' , 'hbs');
app.set('views' , template_path);
hbs.registerPartials(partials_path);

app.use (express.static(static_path));

app.get("" , (req ,res)=>{
    res.render("index");
});

app.get("/about" , (req ,res)=>{
    res.render("about");
});

app.get("/contact" , (req ,res)=>{
    res.render("contact");
});

app.get("/bio-data" , (req ,res)=>{
    res.render("bio-data");
});

app.get("/portfolio" , (req ,res)=>{
    res.render("portfolio");
});

app.get("*" , (req ,res)=>{
    res.render(`404page`);
});

app.listen( port ,()=>{
    console.log (`listing in a port ${port}` );
});

