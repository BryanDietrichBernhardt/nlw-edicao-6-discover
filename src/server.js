const express = require('express')  //importar o Express
const route = require('./route')    //importar arquivo route
const path = require('path')

const server = express()  //cria o servidor dando o comando de iniciar o Express

server.set('view engine', 'ejs')  //responsável pela "view engine" vai ser o ejs

server.use(express.static('public'))  //usar o conteúdo estático da pasta public

server.set('views', path.join(__dirname, 'views')) //o path pega o caminho da pasta onde está o projeto

server.use(express.urlencoded({extended: true}))

server.use(route) //usar o arquivo route

server.listen(3000, () => console.log("Successful!")) //rodar na porta 3000 e rodar função