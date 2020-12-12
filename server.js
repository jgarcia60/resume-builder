const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

const {
    allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main", handlebars: allowInsecurePrototypeAccess(handlebars)}));
app.set("view engine", "handlebars");

//ROUTES

//add Views routes  

//test route to test basic index.handlebars route without data
// app.get("/", (req,res)=>{
//     db.User.findAll({}).then((result)=>{
//         res.render("index",result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

//add API routes

//uncomment this when sequelize is set up
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on http://localhost:${PORT}`);
    })
})

const seed = require('./seeds');
function runSeed() {
    seed.addUser();
}
runSeed();