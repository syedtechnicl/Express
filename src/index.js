// const express = require("express");
// const path = require("path");
// const port = 3000;
// const app = express();
// const hbs = require("hbs");

// const staticPath = path.join(__dirname, "../public");
// const templatePath = path.join(__dirname, "../templates/views");
// const partialPath = path.join(__dirname, "../templates/partials");

// app.set("view engine", "hbs");
// app.set("views", templatePath);
// hbs.registerPartials(partialPath);

// app.use(express.static(staticPath));

// app.get("/0", (req, res) => {
//   res.render("index", {
//     name: "syed muqtadeer",
//   });
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("*", (req, res) => {
//   res.render("404");
// });
// app.listen(port, () => {
//   console.log(`server is starting`);
// });

// new my own

// const express = require('express');
// const path = require('path');
// const port = 3000;
// const hbs = require('hbs');
// const app = express();

// const staticPath = path.join(__dirname,'../public');
// const templatePath = path.join(__dirname,'../templates/views');
// // const partialPath = path.join(__dirname,'../templates/partials');

// app.set('view engine', 'hbs');
// app.set('views',templatePath);
// hbs.registerPartials(templatePath);

// app.use(express.static(staticPath))
// app.get('/name',(req,res)=>{
// res.render('index')
// })
// app.get('/about',(req,res)=>{
// res.render('about')
// })
// app.get('*',(req,res)=>{
// res.render('404')
// })

// app.listen(port,()=>{
//    console.log(`server is starting`) 
// })



// new
const express = require('express');
const port = 3000;
const path = require('path');
const hbs = require('hbs');
const app = express();

const staticPath = path.join(__dirname,'../public');
const partialPath = path.join(__dirname,'../templates/views')

app.set('view engine', 'hbs');
app.set('views',partialPath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

app.get('/',(req,res)=>{
res.render('index',{
    names:'1234'
})
})

app.get('/about',(req,res)=>{
res.render('about',{
   name:'syed muqtadeer' 
})
})

app.get('/contact',(req,res)=>{
res.render('contact')
})

app.get('*',(req,res)=>{
res.render('404')
})

app.listen(port,()=>{
   console.log(`server is starting`) 
})


















