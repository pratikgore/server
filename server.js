const express = require('express') 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => {
    res.send("Many more happy returns of the day !!!!");
})

app.get('/img', (req, res) => {
    
    res.sendFile('im.jpeg')
})

app.get('/vid', (req, res) => {

    res.sendFile('vid.mp4')
})

app.listen(port, (err) => {
    if (err) {
        console.log("Error while listing on port !!!"); 
    }
    else {
        console.log("App is listing on port 3000"); 
    }
})