let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname+'/'));
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req,res)=>{
    res.render('index.html');
});

app.listen(port, ()=>{
    console.log("Server Started");
}); // this is the logic that will fired upon server start

