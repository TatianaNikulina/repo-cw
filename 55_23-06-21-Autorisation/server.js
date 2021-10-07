const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./models') //ищет в э той папке index.js, поэтому его не пишем
const authRoutes = require('./routes/auth.routes')

const {authJwt} = require('./middleware')

const PORT = 8080

const app = express();

let corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// db.sequelize.sync({force:true}).then(()=>{
//     console.log('Resync DB')
// })

db.sequelize.sync()

authRoutes(app)  //вызвали роутер который отвечает за signin, signup

app.get("/", (req, res) => {
    res.json({ message: "Hello, World!!! 23-06-21" });
});

app.get('/test', [authJwt.verifyToken], (req, res) => {
    res.send({message: "It's working"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
