//criando o servidor 
const express =  require("express")
const server = express()

//criando a rota  /
// capturando o pedido para o cliente para  responder "/"
server.get("/", function(req, res){
    return res.send("Hello Word!")
}

)

//console.log(server)
//ligando a porta do servidor
server.listen(3000)
/*
poderia também ser criado desta forma (mais indicavel para react!!)
var express = require('express'),
    server = express();

server.use(express.logger());

server.get('/', function(req, res){
    res.send('Ola Mundo');
});

var server = server.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port)*/