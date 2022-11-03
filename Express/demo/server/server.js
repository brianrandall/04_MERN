const { request } = require("express");
const express = require("express");
const app = express();
const port = 8000;

//cd 'server'
//npm install express

//sudo npm install -g nodemon
//nodemon server.js

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const menuItems = [
    {name: 'taco', price: 2.50},
    {name: 'burrito', price: 8.50},
    {name: 'slice of pizza', price: 4.50},
    {name: 'burger', price: 7.50},
    {name: 'salad', price: 12.00}, 
    {name: 'two egg breakfast', price: 7.99}

]
//yooo what up welcome 2 my server
app.get('/api', (request, response) => {
    response.json({ message: 'hello w0rld'})
})

//C - R - U - D.....

//Create
app.post('/api/menu', (req, res)=>{
    menuItems.push(req.body)
    res.json({results: menuItems})
})

//Read 'all' --menuItems
app.get('/api/menu', (request, response) => {
    response.json({
        results: menuItems
    })
})

//Read 'one' --menuItems
app.get('/api/menu/:index', (request, response) => {
    response.json({results: menuItems[request.params.index]})
})

//Update
// 'request' & 'response' can be shortened or changed
// to anything, in this case 'req' / 'res' 
app.put('/api/menu/:index', (req, res) => {
    menuItems[req.params.index] = req.body
    res.json({results: menuItems})
})

//Delete
app.delete('/api/menu/:index', (rq, rs) => {
    menuItems.splice(rq.params.index, 1)
    rs.json({results: menuItems})
    // or in an instance with a gigantic database
    // you don't want to return entire database...
    
    // might want to do this instead
    // rs. json ({ results: 'deleted'})
})



//this needs to be at the bottom of everything
app.listen (port, () => console.log(`serving a server on port ${port}`))

