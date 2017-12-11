const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db.js');
const sqlite = require ('sqlite3');

const knexConfig = require('./knexfile.js')

const server = express();

server.use(bodyParser.json());



// endpoints here
server.get('/zoos', function(req,res){
    const zoos = db('zoos')
.then(function(records){
    res.status(200).json(records);
}).catch(function(error){
    res.status(500).json({ error});
});
});
server.get('/zoos/:id', function(req,res){
    const{ is } = req.params;

    const zoos =db('zoos')
    .where('id', id)
    .then(function(records){
        res.status(200).json(records);
    })
    .catch(function(error){
        res.status(500).json({ error });
    });
});

const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});
