const express = require('express')
const PORT = 3000
const bodyParser = require ('body-parser')  // библиотека обрабатывает поступающую инфу

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.engine('html', require('ejs').renderFile) //движочек =) обрабюатывающий html-файлы
// app.set('view engine', 'html')

app.get('/', (request, response) => {
    // response.send(`<h1>Hello World! Port: ${PORT} </h1>`)
    response.sendFile(__dirname + '/pages/index.html' )
    // response.json(JSON.stringify({name: 'Ivan'}))
})

app.post('/say-hello.html', (request, response) => {
    // response.json( request.body)
    // response.sendFile(__dirname + '/pages/say-hello.html', {fName: request.body.fName})
    response.render(__dirname + '/pages/say-hello.html', request.body)

})

app.listen( PORT, () => {
    console.log(`Listening on port ${PORT}`)
})