var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send("Testing ExpressJS")
})

// Endpoint for lessons
app.get('/lessons', function(req, res){
    let lessons = [
        {
            "id": 0,
            "topic": "Basket ball",
            "location": "New york",
            "price": 40
        },
        {
            "id": 1,
            "topic": "Music",
            "location": "Seoul",
            "price": 60
        },
        {
            "id": 2,
            "topic": "Cooking",
            "location": "Beijing",
            "price": 10
        },
        {
            "id": 3,
            "topic": "Biology",
            "location": "Dubai",
            "price": 200
        }
    ]
    res.header("Access-Control-Allow-Origin", "*")
    res.send(lessons)
})

//Endpoint for user's details
app.get('/user', function(req, res){
    let users = {
        "email": "newuser@emailserver.com",
        "password": "selenium"
    }
    res.send(users)
})
app.listen(3000)