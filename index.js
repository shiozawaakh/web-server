const express = require('express')
const path = require("path")
const app = express()

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('')
// })
 
// app.get('/about', function (req, res) {
//     res.send('About Page')
// })

app.post('/api/v1/input', function (req, res) {
    const answer = req.body.answer;
    if(answer == "Akihiro"){
        res.redirect("/correct.html")
        // res.send(answer + "-san, Welcome.");
    }else{
        // res.send(answer + ", Go Home!!");
        res.redirect("/wrong.html")
    }
})

app.get('/api/v1/user', function (req, res) {
    res.send({
        name: "Akihiro",
        age: 30
    })
})

app.listen(3000, function(){
    console.log("I am running!")
});
