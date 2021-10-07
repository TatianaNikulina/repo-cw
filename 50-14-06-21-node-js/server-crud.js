const express = require('express')
const bodyParser = require ('body-parser')  // библиотека обрабатывает поступающую инфу
const PORT = 3000

const app = express()
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true})) // по полям

// const users = [{name: 'Ivan'}]
const users = [
    {
        id: 1623665927504,
        fName: "Ivan",
        lName: "Ivanov",
        age: 25,
        profession: "WEB Developer"
    }
]

app.get('/users/', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    // res.json(req.body)
    const user = req.body
    const newUser = {
        id: Date.now(),
        fName: user.fullName.split(' ')[0],
        lName: user.fullName.split(' ')[1],
        age: user.age,
        profession: user.profession
    }
    users.push(newUser)
    res.json( users[users.length - 1])
})

app.get('/users/:id', (req, res) => {
    // res.json(req.params.id)
    const idx = users.findIndex( user => user.id === +req.params.id)
    if (idx === -1) {
        res.json({error: 'User not found'})
        return
    }
    res.json(users[idx])
})

app.put('/users/:id', (req, res) => {
    const idx = users.findIndex( user => user.id === +req.params.id)
    if (idx === -1) {
        res.json({error: 'User not found'})
        return
    }
    users[idx] = {...users[idx], ...req.body} //перезапись в объекте по ключу
    res.json(users[idx])
})

app.delete('/users/:id', (req, res) => {
    const idx = users.findIndex( user => user.id === +req.params.id)
    if (idx === -1) {
        res.json({error: 'User not found'})
        return
    }
    const user = users.splice(idx, 1)
    res.json(user)
})

app.listen(PORT, () => {
    console.log(`Starting in port ${PORT}`)
})